import { get, post, put, del } from '../http'
export const getUser = () => get('/user')
export const login = (data) => post('/login', data)