// getPokemons.js
export const getPokemons = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon?limit=500";
    try {
        const result = await fetch(api);
        if (!result.ok) {
            throw new Error("Error: " + result.status);
        }
        const data = await result.json();

        // Fetch detailed data for each Pokémon using Promise.all
        const details = await Promise.all(
            data.results.map(async (currentElement) => {
                const response = await fetch(currentElement.url);
                if (!response.ok) {
                    throw new Error("Error fetching details for: " + response.status);
                }
                const pokemonData = await response.json();
                return { name: currentElement.name, data: pokemonData };
            })
        );
        return details;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error; // Throwing error so that react-router can handle it
    }
};
