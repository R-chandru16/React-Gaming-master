import axios from "axios";

const User_Baseurl = "https://dummyjson.com/auth/login";


class AuthService {


    login(user) {
        return axios.post(User_Baseurl + "/login", user);
    }



}

export default new AuthService()