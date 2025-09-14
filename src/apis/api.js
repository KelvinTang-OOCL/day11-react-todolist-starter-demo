import axios from "axios";

export const api = axios.create({
    baseURL: 'https://68b297adc28940c9e69cdcd2.mockapi.io/api'
})

export const getTodos = async () => {
    const response = await api.get('/todos')
    return response.data
}

export const addTodo = async (todo) => {
    const response = await api.post('/todos', todo);
    return response.data
}

export const deleteTodo = async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data
}

export const updateTodo = async (id, todo) => {
    const response = await api.put(`/todos/${id}`, todo);
    return response.data
}   