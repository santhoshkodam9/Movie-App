import axios from "axios";

const URL='http://localhost:8080/theatre';
class TheatreService
{
    addTheatre(theatre)
    {
      return axios.post(URL,theatre);
    }
    modifyTheatre(theatre)
    {
      return axios.put(URL,theatre);
    }

    getAllTheatre(){
        return axios.get(URL);
    }

    deleteTheatre(id)
    {
      return axios.delete(URL+"/"+id);
    }
   
}

export default new  TheatreService();