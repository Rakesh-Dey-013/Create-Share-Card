// api.js
import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const cardAPI = {
  createCard: (data) => API.post('/cards/create', data),
  getAllCards: () => API.get('/cards'),
  getCardById: (id) => API.get(`/cards/${id}`),
}
