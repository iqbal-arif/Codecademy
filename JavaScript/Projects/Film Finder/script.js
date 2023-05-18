const tmdbKey = 'e5c07e42c2ab928b4482636c59e352a3';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/157336?';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint =
    'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const requestParams = tmdbKey;
  const urlToFetch = tmdBaseUrl;

  const response = await fetch(urlToFetch.json());
  console.log(response);
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
