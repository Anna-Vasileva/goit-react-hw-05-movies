import { useState, useEffect } from "react";
import { getFilmsReviews } from "../../services/ServiceAPI";
import PropTypes from "prop-types";
import s from "./Reviews.module.css";
import myError from "../../components/Message/Message";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getFilmsReviews(movieId)
      .then(({ data }) => {
        if (data.results.length === 0) {
          myError("Reviews is not available.");
          // console.log("Ошибка: Reviews:results.results.length === 0");
        }
        setReviews(data.results);
      })
      .catch((error) => {
        myError("Something went wrong. Please try again later.");
        // console.log("ошибка:Reviews");
      });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={s["reviews-list"]}>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={s["reviews-item"]}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s["reviews-text"]}>
          We do not have any reviews for this movie.
        </p>
      )}
    </>
  );
};
Reviews.propTypes = { movieId: PropTypes.string.isRequired };
export default Reviews;
