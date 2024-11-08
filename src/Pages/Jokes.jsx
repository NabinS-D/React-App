import { useLoaderData } from "react-router-dom";
import "../jokes.css";

export const GetJokes = () => {
    const jokes = useLoaderData();
    // const [joke, setJokes = useState([])

    return (
        <>
            <div className="jokes-heading">
                Fantastic Jokes
            </div>

            <div>
                <ul >
                    {jokes.map((currentjoke, index) => (
                        <li className="jokes-container" key={index}>
                            <div>{index + 1}. {currentjoke}</div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};
