// router
import { Link } from "react-router-dom"

// styles
import { Image } from "./CardMovie.styles"

const CardMovie = ({ img, movieId, clickable }) => (
  <>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={img} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={img} alt='movie-thumb' />
    )}
  </>
)

export default CardMovie
