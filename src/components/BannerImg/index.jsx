// styles
import { Content, Text, Wrapper } from "./BannerImg.styles"

const BannerImg = ({ img, title, text }) => (
  <Wrapper img={img}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
)

export default BannerImg
