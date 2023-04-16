import axios from 'axios';

const baseUrl = 'http://192.168.0.247:3000/usersCars';

class CarsServiceApi {

    async createCar (data){
        return axios({
            url:`${baseUrl}/create`,
            method: "POST",
            timeout: 5000,
            data: data,
            headers:{
                Accept: 'aplication/json'
            }
        }).then((response)=>{
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const carsServiceApi = new CarsServiceApi()
export default carsServiceApi