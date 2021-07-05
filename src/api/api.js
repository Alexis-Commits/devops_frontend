import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://20.86.175.51:8000',
})

