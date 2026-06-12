const API_KEY = "b13d6f591e3eba6448c85678057bdbb3"
const BASE_URL = "https://api.themoviedb.org/3"

export async function getTrendingMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies")
  }

  return res.json()
}
export async function searchMovies(query) {
    const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    )
    if (!res.ok) {
        throw new Error("error")
    }
    return res.json()
}

export async function getMovieCredits(movieId) {
    const res = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    )
    return res.json()
}

export async function getMovieReviews(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return res.json();
}
export async function getMovieDetails(movieId) {
    const res = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    )
    if (!res.ok) {
        throw new error("error")
    }
    return res.json()
}