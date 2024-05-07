import axios from 'axios'
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key ahora tiene el valor configurado

const getWeather = (capital) => {
  const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
  return request.then(response => response.data)
}


export default {getWeather}