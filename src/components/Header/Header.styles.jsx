import styled from "styled-components"

export const Content = styled.div`
  background-color: black;
  padding-top: 20px;
`
export const ImgLogo = styled.img`
  width: 40px;
  color: var(--white);
  transform: rotate(-10deg);

  @media screen and (max-width: 600px) {
    width: 100px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: center;
  align-items: baseline;
`
export const Title = styled.h1`
  color: var(--white);
  margin-left: 20px;
`
