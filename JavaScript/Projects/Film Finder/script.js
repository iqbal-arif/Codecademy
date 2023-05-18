const tmdbKey = 'e5c07e42c2ab928b4482636c59e352a3';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = 'genre/movie/list';
  const queryString = `?key=value`;
  const requestParams = queryString;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
  } catch (error) {
    console.log(error);
  }
  const response = await fetch(urlToFetch)
    .then(
      (response) => {
        return response.json();
      },
      (networkError) => console.log(networkError.message)
    )
    .then((jsonResponse) => {
      console.log(jsonResponse);
    });
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
