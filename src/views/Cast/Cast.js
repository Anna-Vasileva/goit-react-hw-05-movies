import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getFilmsCredits } from "../../services/ServiceAPI";
import s from "./Cast.module.css";

const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    console.log("useEffect Cast");
    getFilmsCredits(movieId)
      .then(({ data }) => {
        if (data.cast.length === 0) {
          console.log("ошибка:cast.length === 0");
        }
        setCast(data.cast);
      })
      .catch(({ error }) => {
        console.log("ошибка:Cast");
      });
  }, [movieId]);

  console.log(cast);
  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s["cast-item"]}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : defaultImage
                }
                alt={name}
                className={s["cast-img"]}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = { movieId: PropTypes.string.isRequired };
export default Cast;
