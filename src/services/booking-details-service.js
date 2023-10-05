import axios from "axios";

const URL='http://localhost:8080/book/customer';
class BookingDetailsService
{
  
  findBooksByCustomer(id){
    return axios.get(URL+"/" + id);
  }
  getBookingCount(){
    return axios.get(URL);
  }
}

export default new  BookingDetailsService();