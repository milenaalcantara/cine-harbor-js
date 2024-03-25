// Import the Axios library
import axios from 'axios'

// Define the base URL for your API
const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '7cd33f57ce1734a36e86edb23ecef15f'

export let allStreams = []

// Create an instance of Axios with the base URL
// const api = axios.create({
//   baseURL: baseURL
// })

// Make a GET request to retrieve data
async function getAllStreams(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/all/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios.get(url).then((response) => {
    allStreams = response.data.results
    return response.data
  })
  return data
}

async function getMovies(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/movie/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios.get(url).then((response) => {
    allStreams = response.data.results
    return response.data
  })
  return data
}

async function getSeries(page) {
  const pageNumber = page ? page : 1
  const url = `${baseURL}/trending/tv/day?api_key=${apiKey}&page=${pageNumber}`

  let data = await axios.get(url).then((response) => {
    allStreams = response.data.results
    return response.data
  })
  return data
}

async function getStreamByID(type, id) {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  let data = await axios.get(url).then((response) => {
    console.log('DATA BY ID: ', response.data)
    return response.data
  })
  return data
}

console.log('----------------SERIES----------------')
getStreamByID('tv', 209867)

// Export the Axios instance for use in other files
export { getAllStreams, getMovies, getSeries, getStreamByID }
