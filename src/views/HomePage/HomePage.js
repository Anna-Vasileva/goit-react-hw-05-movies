import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTrendingFilms } from "../../services/ServiceAPI";
// import MovieDetailsPage from "../MovieDetailsPage";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  //   const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms()
      .then(({ data }) => setFilms(data.results))
      .catch((error) => console.log("Ошибка:HomePage"));
  }, []);

  return (
    <>
      {films && (
        <>
          <h2 className={s.title}>Trending today</h2>
          <ul className={s["home-list"]}>
            {films.map(({ id, poster_path, title }) => (
              <li key={id} className={s["home-item"]}>
                <Link
                  to={{
                    pathname: `${url}movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {/* <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImage
                    }
                    alt={title}
                  /> */}
                  <p className={s["home-title"]}>{title}</p>
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
