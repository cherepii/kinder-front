import axios from 'axios'

export const API_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const instance = axios.create({
  baseURL: API_URL,
})
