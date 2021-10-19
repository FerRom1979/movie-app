// hooks
import { useEffect, useState } from "react"

// router
import { useParams } from "react-router"
import { Link } from "react-router-dom"

// config
import apiData from "../../API/get-info-movies"

// components
import { Loader, MovieData } from "../../components"
import { Message } from "../home/Home.styles"

// styles
import { ContentTitle, WrapperTitle } from "./Movie.styles"

const Movie = () => {
  const [movie, setMovie] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const { movieId } = useParams()

  const getFetchMovie = async (movieId) => {
    setLoading(true)
    setError(null)
    try {
      const movie = await apiData.fetchMovie(movieId)
      setMovie(movie)
      setLoading(null)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    getFetchMovie(movieId)
  }, [movieId])
  if (error)
    return <Message>sorry, there are glitches. wait and try again</Message>
  if (loading) return <Loader />
  return (
    <>
      {movie && (
        <>
          <WrapperTitle>
            <ContentTitle>
              <Link to='/'>
                <span>Home</span>
              </Link>
              <span>|</span>
              <span>{movie.title}</span>
            </ContentTitle>
          </WrapperTitle>
          <MovieData movie={movie} />
        </>
      )}
    </>
  )
}

export default Movie
