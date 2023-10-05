import axios from "axios";

const URL='http://localhost:8080/movie';
class MovieService
{
    getAllMovie()
    {
      return axios.get(URL);
    }
}

export default new  MovieService();