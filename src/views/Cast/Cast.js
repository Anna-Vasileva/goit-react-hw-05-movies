import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getFilmsCredits } from "../../services/ServiceAPI";
import s from "./Cast.module.css";
import myError from "../../components/Message/Message";

const defaultImage = "https://i.postimg.cc/VNTY47h0/image.jpg";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getFilmsCredits(movieId)
      .then(({ data }) => {
        if (data.cast.length === 0) {
          myError("Cast is not available.");
          // console.log("ошибка:cast.length === 0");
        }
        setCast(data.cast);
      })
      .catch(({ error }) => {
        myError("Something went wrong. Please try again later.");
        // console.log("ошибка:Cast");
      });
  }, [movieId]);

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
