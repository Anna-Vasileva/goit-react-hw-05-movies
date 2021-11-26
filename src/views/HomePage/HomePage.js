import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTrendingFilms } from "../../services/ServiceAPI";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";
  const { url } = useRouteMatch();

  useEffect(() => {
    getTrendingFilms()
      .then(({ data }) => setFilms(data.results))
      .catch((error) => console.log("Ошибка:"));
  }, []);

  return (
    <>
      {films && (
        <>
          <h2>Trending today</h2>
          <ul>
            {films.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`${url}films/${id}`}>
                  {/* <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImage
                    }
                    alt={title}
                  /> */}
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default HomePage;
