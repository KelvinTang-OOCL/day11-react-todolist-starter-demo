import axios from "axios";

export const api = axios.create({
    baseURL: 'https://68b297adc28940c9e69cdcd2.mockapi.io/api'
})