/* eslint-disable react/prop-types */
import "../card.css";
export const MovieCard = ({ data }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img className="poster" src={posterUrl} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h2 className="title">{data.original_title}</h2>
            <h2>
              IMDB Rating:
              <span
                className={`${data.vote_average >= 7 ? "bg-green-500" : "bg-orange-500"
                  } inline-block px-2 rounded`}
              >
                {data.vote_average}
              </span>
            </h2>

            <h2> Release Year: {data.release_date}</h2>
            <a
              href={`https://youtu.be/zlTKpqybQTA`}
              className="text-white no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Watch</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
