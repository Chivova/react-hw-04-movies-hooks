const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a646222142e0c314405154e1a0a21d7b';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  ).then(data => data.results);
}

function fetchMoviesSearchByName(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&${query}&language=en-US`,
  );
}

function fetchMovieDetailsById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

function fetchMovieActorsCredit(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-USpage=1`,
  );
}
const moviesApi = {
  fetchTrendingMovies,
  fetchMoviesSearchByName,
  fetchMovieDetailsById,
  fetchMovieActorsCredit,
  fetchMovieReviews,
};

export default moviesApi;
