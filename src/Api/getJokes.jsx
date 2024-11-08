import axios from "axios";

export const getJokes = async () => {
    const ApiUrl = "https://v2.jokeapi.dev/joke/any";
    const jokesCount = 50;
    const jokes = [];

    try {
        for (let i = 0; i < jokesCount; i++) {
            const response = await axios.get(ApiUrl);
            if (response.data.type === "single") {
                jokes.push(response.data.joke); // For single jokes
            } else if (response.data.type === "twopart") {
                jokes.push(`${response.data.setup} - ${response.data.delivery}`); // For two-part jokes
            }
        }
    } catch (error) {
        throw new Error("Failed to fetch: " + error.message);
    }

    return jokes; // Return the fetched jokes
};
