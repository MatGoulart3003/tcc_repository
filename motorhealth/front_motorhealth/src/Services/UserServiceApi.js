import axios from "axios"

const baseUrl = 'http://192.168.0.247:3000/users';

class UserServiceApi {

    async register(data){
        return axios({
            url: `${baseUrl}`,
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
            url: `${baseUrl}/login`,
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