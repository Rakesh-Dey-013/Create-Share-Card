import axios from 'axios'

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const cardAPI = {
  createCard: (data) => API.post('/cards/create', data),
  getAllCards: () => API.get('/cards'),
  getCardById: (id) => API.get(`/cards/${id}`),
}