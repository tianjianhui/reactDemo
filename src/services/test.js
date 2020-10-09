import axios from '../service.js'
export const testData = (params) => axios({ method: 'post', url: '/number', data: params})