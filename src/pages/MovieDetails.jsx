import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from "../services/api";
export default function MovieDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchMovie() {
            try{
                const data = await getMovieDetails(movieId)
                setMovie(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchMovie()
    }, [movieId])
    if (!movie) return <p>loading</p>
  return (
    <div className='movie-details'>
      <h1>{movie.title}</h1>
      <button onClick={() => navigate(-1)}>return back</button>

        <p>user score: {movie.vote_average}</p>
        <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        />
        <p>{movie.overview}</p>

        <h3>additional info</h3>
        <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>
      <Outlet/>
    </div>
  );
}