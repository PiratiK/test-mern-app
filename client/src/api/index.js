import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)

const apis = {
    insertUser,
    updateUserById,
}

export default apis