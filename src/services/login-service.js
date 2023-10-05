import axios from "axios";

const URL='http://localhost:8080/user';
class LoginService
{
    login(username, password, role)
    {
      console.log(username + password + role);
      return axios.get(URL + "/" + username + "/" + password + "/" + role);
    }

    signup(myuser)
    {
      return axios.post(URL,myuser);
    }

    getUserCount(){
      return axios.get(URL + "/count");
    }
    getOtp(email)
    {
      return axios.get(URL + "/otp/" + email);
    }
}

export default new  LoginService();