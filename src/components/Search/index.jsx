// hooks
import { useEffect, useState, useRef } from "react"

// svg
import search from "../../svg/iconmonstr-magnifier-4.svg"

// styles
import { Wrapper, Content } from "./Search.styles"

const Search = ({ setSearch }) => {
  const [state, setState] = useState("")
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }

    const timer = setTimeout(() => {
      setSearch(state)
    }, 2000)

    return () => clearTimeout(timer)
  }, [setSearch, state])

  return (
    <Wrapper>
      <Content>
        <img src={search} alt='search' />
        <input
          type='text'
          name=''
          id=''
          placeholder='Search Movie'
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

export default Search
