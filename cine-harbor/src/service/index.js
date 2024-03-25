// Import the Axios library
import axios from 'axios'

// Define the base URL for your API
const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '7cd33f57ce1734a36e86edb23ecef15f'

export let allStreams = []

// Make a GET request to retrieve data
async function getAllStreams(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/all/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios
    .get(url)
    .then((response) => {
      return response.data
    })
    .catch((err) => console.error(err))
  return data
}

async function getMovies(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/movie/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios.get(url).then((response) => {
    return response.data
  })
  return data
}

async function getSeries(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/tv/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios.get(url).then((response) => {
    return response.data
  })
  return data
}

async function getStreamByID(type, id) {
  const url = `${baseURL}/${type}/${id}?api_key=${apiKey}`
  let data = await axios
    .get(url)
    .then((response) => {
      return response.data
    })
    .catch((err) => console.error(err))
  return data
}

async function getTrailerByID(type, id) {
  const url = `${baseURL}/${type}/${id}/videos?api_key=${apiKey}`
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.error(err))

  let dataFiltered = data.results.filter((e) => e.type == 'Trailer')
  return dataFiltered == undefined ? '' : dataFiltered[0].key
}

// Export the Axios instance for use in other files
export { getAllStreams, getMovies, getSeries, getStreamByID, getTrailerByID }
