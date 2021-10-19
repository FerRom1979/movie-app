import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: black;
  padding: 0 20px;
`

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: #292828;
  margin: 0 auto;
  border-radius: 40px;
  color: white;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }
  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: white;
    :focus {
      outline: none;
    }
  }
`
