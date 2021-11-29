import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
  Route,
  useRouteMatch,
  NavLink,
  Switch,
} from "react-router-dom";
// import PropTypes from "prop-types";
import { getFilmsById } from "../../services/ServiceAPI";
import Cast from "../Cast";
import Reviews from "../Reviews";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const [film, setFilm] = useState([]);
  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

  useEffect(() => {
    getFilmsById(movieId)
      .then(({ data }) => setFilm(data))
      .catch((error) => console.log("Ошибка: MovieDetailsPage"));
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = film;
  const genresName = genres?.map((el) => el.name).join();
  //   console.log(url);
  return (
    <>
      <section className={s.section}>
        <button
          type="button"
          className={s.btn}
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
        <div className={s.wrapper}>
          <div className={s.thumb}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImage
              }
              alt={title}
              className={s["details-img"]}
            />
          </div>
          <div className={s.description}>
            <h2>{title}</h2>
            <p className={s.text}>
              User score: <span className={s.accent}>{vote_average * 10}%</span>
            </p>
            <h2>Overview</h2>
            <p className={s.text}>{overview}</p>
            <h2>Genres</h2>
            <p className={s.text}>{genresName}</p>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <h4>Additional information</h4>
        <ul className={s["details-list"]}>
          <li className={s["details-item"]}>
            <NavLink to={`${url}/cast`} className={s["details-title"]}>
              Cast
            </NavLink>
          </li>
          <li className={s["details-item"]}>
            <NavLink to={`${url}/reviews`} className={s["details-title"]}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default MovieDetailsPage;
