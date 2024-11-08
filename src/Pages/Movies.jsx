import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../UI/Cards";
import { useState } from "react";
import "../movies.css"

export const Movies = () => {
    const movies = useLoaderData();
    const [search, setSearch] = useState("");
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const filteredmovie = movies.filter((currentMovie) =>
        currentMovie.original_title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <header>
                <h1>Top Movies</h1>
            </header>

            <div className="pokemon-search">
                <input
                    type="text"
                    placeholder="Search"
                    name="Search movie"
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            <div className="container grid grid-four--cols">
                {filteredmovie.map((movie, index) => (
                    <ul key={`${movie.id}-${index}`}> {/* Combines id with index as a fallback */}
                        <MovieCard data={movie} />
                    </ul>
                ))}
            </div>
        </>
    );
};
