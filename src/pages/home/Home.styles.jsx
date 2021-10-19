import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: grey;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`
export const WrapperFilter = styled.div`
  display: flex;
  @media screen and (max-width: 540px) {
    margin-bottom: 20px;
  }
`
export const SubTitleFilter = styled.span`
  margin-left: 30px;
  margin-right: 10px;
  font-size: 1.5rem;
  color: grey;
`

export const Message = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;

  text-align: center;

  font-size: 30px;
`
