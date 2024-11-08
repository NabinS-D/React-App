export const getMovies = async () => {
    const apiKey = "8b439bcd0f2d413b2eb306401126d155";
    const language = "en-US";
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Change this to fetch more pages if needed
    const movies = [];

    try {
        // Fetch movies from the specified pages
        await Promise.all(
            pages.map(async (page) => {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}&page=${page}`);
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                movies.push(...data.results); // Combine the results
            })
        );

        return movies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("Failed to retrieve data");
    }
};
