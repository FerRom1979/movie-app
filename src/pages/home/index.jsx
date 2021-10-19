// hooks
import { useEffect, useState } from "react"

import imageNotAvailable from "../../img/imgNotAvailable.webp"

// fetch
import API from "../../API/get-info-movies"
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../../API/config-API"

//library
import ReactStars from "react-stars"

// components
import { BannerImg, CardMovie, Loader, Search } from "../../components"

// styles
import {
  Content,
  Message,
  SubTitleFilter,
  Wrapper,
  WrapperFilter,
  WrapperTitle,
} from "./Home.styles"

const Home = () => {
  const [state, setState] = useState([])
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(null)
  const [star, setStar] = useState(10)

  const fetchData = async (search = "", start = 10) => {
    setLoading(true)
    setError(null)
    try {
      const movies = await API.fetchMovies(search)
      const newMovies = movies.results.filter(
        (movie) => movie.vote_average <= star
      )
      setState(newMovies)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }
  const ratingChanged = (newRating) => {
    setStar(newRating * 2)
  }
  useEffect(() => {
    fetchData(search, star)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, star])

  if (error)
    return <Message>sorry, there are glitches. wait and try again</Message>
  if (state.length === 0 && !loading) {
    setTimeout(() => {
      setStar(10)
    }, 3000)
    return <Message>Sorry, there are no movies in this rating range. </Message>
  }
  return (
    <>
      {!loading && state[0] && (
        <BannerImg
          title={state[0].original_title}
          text={state[0].overview}
          img={
            state[0].backdrop_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state[0].backdrop_path}`
              : imageNotAvailable
          }
        />
      )}

      {!loading && state ? (
        <>
          <Search setSearch={setSearch} />
          <Wrapper>
            <WrapperTitle>
              <h1>{search ? "Search Result" : "Popular Movies"}</h1>
              <WrapperFilter>
                <SubTitleFilter>Filter</SubTitleFilter>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
              </WrapperFilter>
            </WrapperTitle>

            <Content>
              {state &&
                state.map((movie) => (
                  <CardMovie
                    key={movie.id}
                    clickable
                    img={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : imageNotAvailable
                    }
                    movieId={movie.id}
                  />
                ))}
            </Content>
          </Wrapper>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
