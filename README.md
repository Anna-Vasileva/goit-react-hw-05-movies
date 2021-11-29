Задание «Кинопоиск»

Создай базовую маршрутизацию для приложения поиска и хранения фильмов. Превью рабочего приложения смотри по ссылке.

API themoviedb.org

Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно ввести произвольные данные) и получить API-ключ. В этой работе будут использоваться следующие ендпоинты.

/trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
/search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
/movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
/movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма.

Маршруты

В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
Code Splitting (разделение кода)
Добавь асинхронную загрузку JS-кода для маршрутов приложения используя React.lazy() и Suspense.
