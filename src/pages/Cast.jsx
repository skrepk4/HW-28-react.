import { useEffect, useState } from "react"
import { getMovieCredits } from "../services/api"
import { useParams } from "react-router-dom"

export default function Cast() {
    const {movieId} = useParams()

    const [cast, setCast] = useState([])
    useEffect(() => {
        async function fetchCast() {
            const data = await getMovieCredits(movieId)
            setCast(data.cast)
        }
        fetchCast()
    }, [movieId])
    if (!cast.length) return <p>no cast found</p>
    return(
        <ul>
            {cast.map(actor => (
                <li key={actor.id}>
                    {actor.name} as {actor.character}
                </li>
            ))}
        </ul>
    )
}