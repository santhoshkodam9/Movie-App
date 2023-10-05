import axios from "axios";

var book1 = {} 
class PayBookService
{

    bookTicket(book)
    {
        book1.id = book.id; 
        book1.bookDate = book.bookDate;
        book1.theatreId = book.theatreId;
        book1.movieId = book.movieId;
        book1.customerId = book.customerId;
        book1.tickets = book.tickets;
        book1.seatType = book.seatType;
        this.fnBook();

      return axios.post(URL,book);
    }
    fnBook()
    {
        return this.book1;
    }

}

export default new  PayBookService();