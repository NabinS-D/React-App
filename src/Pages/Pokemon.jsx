import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../pokemon.css";

export const Pokemon = () => {
    const pokemondetails = useLoaderData(); // Use the loader data
    const [searchvalue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const searchItems = pokemondetails.filter((currentElement) =>
        currentElement.name.toLowerCase().includes(searchvalue.toLowerCase())
    );

    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemons</h1>
            </header>

            <div className="pokemon-search">
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={searchvalue}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <ul className="grid-three-cols">
                    {searchItems.map((currentData) => (
                        <li key={currentData.data.id} className="pokemon-card">
                            <figure>
                                <img
                                    src={currentData.data.sprites.other.dream_world.front_default}
                                    alt={currentData.name}
                                    className="pokemon-image"
                                />
                            </figure>
                            <h1 className="pokemon-name">{currentData.name}</h1>
                            <div className="pokemon-info pokemon-highlight">
                                <p>
                                    {currentData.data.types
                                        .map((currentElement) => currentElement.type.name)
                                        .join(", ")}
                                </p>
                            </div>
                            <div className="grid-three-cols">
                                <p className="pokemon-info">
                                    <span> Height : </span>
                                    {currentData.data.height}
                                </p>
                                <p className="pokemon-info">
                                    <span> Weight : </span>
                                    {currentData.data.weight}
                                </p>
                                <p className="pokemon-info">
                                    <span> Speed : </span>
                                    {currentData.data.stats[5].base_stat}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
