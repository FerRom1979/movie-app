import styled from "styled-components"

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  width: 100%;
  height: 70px;
  background: #3f3e3e;
  color: white;
`
export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  span {
    font-size: 1.2rem;
    color: white;
    padding-right: 10px;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`
