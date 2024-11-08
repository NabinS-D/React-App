import { NavLink } from "react-router-dom";
import "../../header.css";

export const Header = () => {
    return (
        <>
            <nav className="nav-container">
                <div className="nav-img">
                    <figure>
                        <img src="/Company Logo.png" alt="Description of the image" />
                    </figure>
                </div>

                <div className="nav-menu">
                    <NavLink className="link" aria-current="page" to="/home" end>
                        Home
                    </NavLink>

                    <NavLink className="link" aria-current="page" to="/movies" end>
                        Movies
                    </NavLink>

                    <NavLink className="link" to="/jokes" end>
                        Jokes
                    </NavLink>

                    <NavLink className="link" to="/pokemon" end>
                        Pokemon
                    </NavLink>
                </div>

            </nav>
        </>
    );
};
