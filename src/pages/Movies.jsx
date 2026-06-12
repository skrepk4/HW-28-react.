import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)

  const query = searchParams.get("query") ?? ""
  const [input, setInput] = useState(query)

  useEffect(() => {
    if (!query) return

    async function fetchMovies() {
      try {
        setLoading(true)
        const data = await searchMovies(query)
        setMovies(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) return

    setSearchParams({ query: input })
  };

  return (
    <div>
      <h1>Search movies</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search movies..."
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            />
            <Link to={`/movies/${movie.id}`}>
            {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}