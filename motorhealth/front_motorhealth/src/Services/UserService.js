class UserService {
    async register(data){
        let response = {
            msg: "OK"
        }
        return Promise.resolve(response)
    }
}

const userService = new UserService()
export default userService