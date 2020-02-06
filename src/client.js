import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 10000,
  headers: {}
})

client.setAuthToken = (token) => {
  client.defaults.headers['Authorization'] = token
}

client.removeAuthToken = () => {
  delete client.defaults.headers['Authorization']
}
