import './App.css'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import("./pages/Home.jsx"))
const Movies = lazy(() => import("./pages/Movies.jsx"))
const Cast = lazy(() => import("./pages/Cast.jsx"))
const Reviews = lazy(() => import("./pages/Reviews.jsx"))
const MovieDetails = lazy(() => import("./pages/MovieDetails.jsx"))
import { Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './Navigation'
function App() {
  
  return (
    <>
    <Navigation />
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </>

  )
}

export default App
