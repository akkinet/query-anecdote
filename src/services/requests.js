import axios from "axios";
const baseURL = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
    const res = await axios.get(baseURL)
    return res.data
}