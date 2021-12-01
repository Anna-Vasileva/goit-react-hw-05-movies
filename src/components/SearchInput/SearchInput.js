import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchInput.module.css";

const SearchInput = ({ onSubmit }) => {
  const [nameMovie, setNameMovie] = useState("");

  const onChange = (e) => {
    setNameMovie(e.currentTarget.value.toLowerCase());
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (nameMovie.trim() === "") {
      console.log("Please enter your correctly query!");
      return;
    }
    // console.log(nameMovie);
    onSubmit(nameMovie);
    setNameMovie("");
  };
  return (
    <form onSubmit={onSearchSubmit} className={s.form}>
      <label>
        <input type="text" value={nameMovie} onChange={onChange}></input>
      </label>
      <button type="submit" className={s["form-btn"]}>
        Search
      </button>
    </form>
  );
};
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchInput;
