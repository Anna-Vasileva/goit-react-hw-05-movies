import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTrendingFilms } from "../../services/ServiceAPI";
import s from "./HomePage.module.css";
import myError from "../../components/Message/Message";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    getTrendingFilms()
      .then(({ data }) => setFilms(data.results))
      .catch((error) =>
        myError("Something went wrong. Please try again later.")
      );
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
