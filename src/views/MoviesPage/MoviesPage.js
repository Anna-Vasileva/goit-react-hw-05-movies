import { useEffect, useState } from "react";
import { getSearchFilms } from "../../services/ServiceAPI";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";
  const [film, setFilm] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    console.log(searchQuery);
    if (!searchQuery) return;
    getSearchFilms(searchQuery)
      .then(({ data }) => {
        if (data.results.length === 0) {
          console.log("MoviesPage:data.results.length === 0");
          setFilm([]);
        }

        setFilm(data.results);
      })
      .catch((error) => {
        console.log("Ошибка:MoviesPage");
      });
  }, [searchQuery]);
  const onChangeQuery = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };
  console.log(film);
  return (
    <section>
      <SearchInput onSubmit={onChangeQuery} />
      {film && (
        <div className={s.wrapper}>
          <ul className={s["movie-list"]}>
            {film.map(({ id, title, poster_path }) => {
              return (
                <li key={id} className={s["movie-item"]}>
                  <NavLink
                    to={{ pathname: `movies/${id}`, state: { from: location } }}
                  >
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : defaultImage
                      }
                      alt={title}
                      className={s["movie-img"]}
                    />
                    <h2 className={s["movie-title"]}>{title}</h2>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MoviesPage;
