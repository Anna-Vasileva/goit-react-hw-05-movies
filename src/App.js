import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact>
        <HomePage />
      </Route>
    </>
  );
}

export default App;
