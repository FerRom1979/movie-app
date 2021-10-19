// router
import { Link } from "react-router-dom"

// svg
import video from "../../svg/iconmonstr-video-1.svg"

// styles
import { Content, ImgLogo, Title, Wrapper } from "./Header.styles"

const Header = () => (
  <Content>
    <Wrapper>
      <Link to='/'>
        <ImgLogo src={video} alt='logo-video' />
      </Link>
      <Title>FILMS</Title>
    </Wrapper>
  </Content>
)

export default Header
