import { useEffect, useState } from "react"
import { getMovieReviews } from "../services/api"
import { useParams } from "react-router-dom"

export default function Reviews() {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        async function fetchReviews() {
            const data = await getMovieReviews(movieId)
            setReviews(data.results)
        }
        fetchReviews()
    }, [movieId])
    if (!reviews.length) return <p>no reviews found</p>
    return(
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    )
}