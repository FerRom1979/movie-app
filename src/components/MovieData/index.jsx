// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API/config-API"

// styles
import { Image, Wrapper, Content, Text } from "./MovieData.styles"

const MovieData = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Image
        img={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : ""
        }
        clickable={false}
        alt='movie-thumb'
      />

      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
)

export default MovieData
