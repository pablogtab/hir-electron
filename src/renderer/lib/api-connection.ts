/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios'
import { AppConfig } from '../../shared/configuration'


let token = ''
let API_URL = ''

window.hirApi.getConfig().then((config: AppConfig) => {
    API_URL = config.API_URL
})

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
})

axiosInstance.interceptors.request.use(async (config) => {
    const value = token
    if (value)
        config.headers['Authorization'] = `Bearer ${token}`

    config.baseURL = API_URL
    return config
}, (error) => {
    return Promise.reject(error);
})

axiosInstance.interceptors.response.use(async (response) => {

    if (response.data && typeof response.data === 'object' && response.data['access_token']) {
        token = response.data['access_token']
    }

    if (response.data && typeof response.data === 'object') {
        if (response.data.name === 'HttpException')
            return Promise.reject(response.data)
    }


    return response.data //Devuelve solo el body
}, (error) => {
    return Promise.reject(error.response);
})

export const api = axiosInstance;
