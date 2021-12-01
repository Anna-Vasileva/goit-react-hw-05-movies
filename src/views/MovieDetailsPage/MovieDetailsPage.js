import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useHistory,
  useLocation,
  Route,
  useRouteMatch,
  NavLink,
  Switch,
} from "react-router-dom";
import { getFilmsById } from "../../services/ServiceAPI";
// import Cast from "../Cast";
// import Reviews from "../Reviews";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "Reviews" */)
);
const MovieDetailsPage = () => {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [film, setFilm] = useState([]);
  const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

  useEffect(() => {
    getFilmsById(movieId)
      .then(({ data }) => setFilm(data))
      .catch((error) => console.log("Ошибка: MovieDetailsPage"));
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = film;
  const genresName = genres?.map((el) => el.name).join();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <section className={s.section}>
        <button type="button" className={s.btn} onClick={onGoBack}>
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
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: location?.state?.from,
              }}
              className={s["details-title"]}
              activeClassName={s["details-title--current"]}
            >
              Cast
            </NavLink>
          </li>
          <li className={s["details-item"]}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: location?.state?.from,
              }}
              className={s["details-title"]}
              activeClassName={s["details-title--current"]}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>spinner</div>}>
          <Switch>
            <Route path={`${path}/cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetailsPage;
