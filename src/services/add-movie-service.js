import axios from "axios";

const URL='http://localhost:8080/movie';
class AddMovieService
{
    addmovie(movie)
    {
      return axios.post(URL,movie);
    }
    modifymovie(movie)
    {
      return axios.put(URL,movie);
    }

    getAllMovie(){
        return axios.get(URL);
    }

    getMovieById(id)
    {
      return axios.get(URL+"/"+id);
    }
  
    getMovieByName(name)
    {
      return axios.get(URL+"/movie/"+name);
    }
    getMovieByTheatreName(tname)
    {
      return axios.get(URL+"/theatre/"+tname);  
    }
    fnSearch(movies){
      return movies;
    }
    
    deleteMovie(id)
    {
      return axios.delete(URL+"/"+id);
    }

    modifyMovieticket(movie)
    { 
      return axios.put(URL+"/tickets",movie);    
    }

    modifyMovieWithoutPic(movie)
    {
      return axios.put(URL+"/withoutpic"+movie);    
    }
 
}

export default new  AddMovieService();