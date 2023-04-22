import axios from 'axios';

const apiCar = axios.create({
    baseURL: 'http://192.168.0.247:3000'
})

export default apiCar;