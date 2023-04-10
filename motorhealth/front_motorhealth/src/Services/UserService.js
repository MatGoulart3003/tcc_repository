import axios from "axios"

class UserService {
    async register(data){
        return axios({
            url: "http://192.168.0.247:3000/user/register",
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
}

const userService = new UserService()
export default userService