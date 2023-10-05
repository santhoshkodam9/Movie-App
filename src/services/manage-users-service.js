import axios from "axios";

const URL='http://localhost:8080/user';
class ManageUsersService
{
    addUser(user)
    {
      return axios.post(URL,user);
    }
    modifyUser(user)
    {
      return axios.put(URL,user);
    }

    getAllUsers(){
        return axios.get(URL);
    }

    deleteUser(username)
    {
      return axios.delete(URL+"/"+username);
    }
   
}

export default new  ManageUsersService();