import { Switch, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <section>
            <HomePage />
          </section>
        </Route>
        <Route path="/movies" exact>
          {/* <MoviesPage /> */}
          <p>страница поиска фильмов</p>
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
