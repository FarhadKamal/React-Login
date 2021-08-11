import axios from 'axios'

const API = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/api/',
})

export const getverify = () => API.get(`/verify`)
export const getAllUsers = () => API.get(`/users`)

export const signIn = (formData) => API.post('/login', formData)
export const signUp = (formData) => API.post('/register', formData)
export const signOut = () => API.post(`/logout`)
