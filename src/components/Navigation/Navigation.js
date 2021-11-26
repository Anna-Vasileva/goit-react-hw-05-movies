import React from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s["navigation"]}>
      <NavLink
        exact
        to="/"
        className={s["navigation__link"]}
        activeClassName={s["navigation__link--current"]}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s["navigation__link"]}
        activeClassName={s["navigation__link--current"]}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
