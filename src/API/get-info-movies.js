import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from "./config-API"

const apiData = {
  fetchMovies: async (search) => {
    const endpoint = search
      ? `${SEARCH_BASE_URL}${search}`
      : `${POPULAR_BASE_URL}`
    return await (await fetch(endpoint)).json()
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
    return await (await fetch(endpoint)).json()
  },
}

export default apiData
