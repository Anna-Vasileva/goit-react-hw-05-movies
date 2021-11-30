// import { useEffect, useState } from "react";
// import { getSearchFilms } from "../../services/";

// const MoviesPage = () => {
//   const [film, setFilm] = useState(null);
//   useEffect(() => {
//     getSearchFilms()
//       .then(({ data }) => {
//         if (data.results.length === 0) {
//           console.log("MoviesPage:data.results.length === 0");
//           setFilm([]);
//         }
//         setFilm(data.results);
//       })
//       .catch((error) => {
//         console.log("Ошибка:MoviesPage");
//       });
//   }, []);
//   const onSearchQuery = (query) => {};

//   return <section></section>;
// };

// export default MoviesPage;
