import axios from "axios"

const baseUrl = 'http://192.168.0.247:3000';

class UserServiceApi {

    async register(data){
        return axios({
            url: `${baseUrl}/users`,
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'aplication/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async doLogin (data){
        return axios({
            url: `${baseUrl}/users/login`,
            method: "POST",
            timeout: 5000,
            data: data,
            headers:{
                Accept: 'aplication/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}


const userServiceApi = new UserServiceApi()
export default userServiceApi