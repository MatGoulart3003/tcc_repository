import axios from 'axios';
import IpApi from './IpApi';

const apiCar = axios.create({
    
    baseURL: IpApi
})

export default apiCar;

//'http://192.168.43.116:3000'