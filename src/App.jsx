import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./Components/Layout/AppLayout";

import { Contact, contactformsubmit } from "./Pages/Home";
import { Pokemon } from "./Pages/Pokemon";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Error } from "./Pages/Error";
import { GetJokes } from "./Pages/Jokes";
import { getMovies } from "./Api/getMovies";
import { Movies } from "./Pages/Movies";
import { getPokemons } from "./Api/getPokemon";
import { getJokes } from "./Api/getJokes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/home",
          element: <Contact />,
        },
        {
          path: "/contactform",
          element: <Contact />,
          action: contactformsubmit,
        },
        {
          path: "/jokes",
          element: <GetJokes />,
          loader: getJokes,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMovies,
        },

        {
          path: "/pokemon",
          element: <Pokemon />,
          loader: getPokemons,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
