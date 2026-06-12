import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true)

        const data = await getTrendingMovies()
        setMovies(data.results)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>

      {loading && <p>Loading...</p>}

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            />
            {movie.title}
          </li>
        ))}
        
      </ul>
    </div>
  );
}