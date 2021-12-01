import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Navigation from "./components/Navigation";
// import HomePage from "./views/HomePage";
// import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
// import MoviesPage from "./views/MoviesPage";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const Navigation = lazy(() =>
  import("./components/Navigation" /* webpackChunkName: "Navigation" */)
);
const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <section>
              <HomePage />
            </section>
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
