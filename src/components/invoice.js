import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import bookMovieService from "../services/book-movie-service";
import '../styles/payment.css';
// import payBookService from "../services/payBook-service";

export default class Invoice extends Component {
  
  constructor(props)
  {
      super(props);
      this.state={bookimage:'',bookMovieName:'',bookTheatreName:'', bookingId:0, showDate: '' ,bookDate:'', showName:'', seatType:'', tickets:0 };
  }

  componentDidMount()
  {
    var bookObj = JSON.parse(localStorage.getItem("confirmBook"));
    this.setState({ 
        bookimage : localStorage.getItem("bookimage"),
        bookMovieName : localStorage.getItem("movieName"),
        bookTheatreName :localStorage.getItem("theatreName"),
        seatType : bookObj.seatType,
        tickets : bookObj.tickets,
        bookDate : bookObj.bookDate
    });

    bookMovieService.getBookingId().then((response)=>{            
      console.log(response.data);
      var bookObj = response.data;
      this.setState({
        bookingId : bookObj.id,
        showDate : localStorage.getItem("bookDate"),
        showName : localStorage.getItem("showName"),
      });
  });
}

  render()
    {
    return ( <> 
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
            <a href='/#'><i id= "icons"class="fa fa-user"aria-hidden="true"></i> View Profile</a>
            <Link to='/homeuser'><a href='/#'><i id= "icons"class="fa fa-fw fa-home"></i> Home</a></Link>
            <Link to="/bookmovie"><a href='/#'><i id = "icons" class="fas fa-ticket"></i> Book Movie</a></Link>
            <Link to='/bookinghistory'><a href='/#'> <i id= "icons"class="fa fa-history"></i>  Booking History</a></Link>
            <Link to="/faqs"><a href='/#'><i class="fa fa-fw fa-envelope" style= { { color : "black" }}></i> FAQ'S</a></Link>
          </div>  
       </div>
       <div class="col-sm-4" ></div>    
    </div>
    <div class="container-fluid">
     
        <h2 class="text-center"  style= { { marginLeft: 80 ,color: 'whitesmoke' }} > Invoice</h2> <br/><br/>
        <div  style= { { marginLeft: 600  }} class="container">
            <div class="row">
                <div class="col-md-3">
                    <img width="200" src={'data:image/png;base64,'+ this.state.bookimage} alt="" /><br/>
                </div>
                <div class="col-md-9">
                    <table style={{color : 'whitesmoke' } } class=" table-striped table-hover"><br/>
                        <tbody>
          
                            <tr> <th>Booking Id</th> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.bookingId} </tr>
                            <tr><th>Show Date</th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.showDate}</tr>
                        {/* <!-- <tr> <th>Movie Id:</th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{book.movieId}}  </tr> --> */}
                            <tr><th>Movie </th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.bookMovieName}</tr>
                        {/* <!-- <tr><th>Theatre Id</th> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{book.theatreId}}  </tr> --> */}
                            <tr><th>Theatre </th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.bookTheatreName}</tr>
                            <tr><th>Show Name</th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.showName}</tr>
                            <tr> <th>Seat Type</th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.seatType}</tr>
                        {/* <!-- <tr> <th>Customer Id:</th>{{book.customerId}}  </tr> --> */}
                            <tr> <th>Tickets</th>&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.tickets} </tr>
                            <tr><th>Book Date</th> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.bookDate}  </tr>
                        </tbody>    
                    </table>
                </div>
            </div>   
        </div> <br/><br/><br/><br/>
        <h2 style= { { marginLeft: 550 ,color: 'rgb(38, 197, 46)' }} >  You have successfully Booked the Ticket !!! </h2> <br/><br/><br/><br/>
    </div>
  </div>
</> 
)
    }
}
