import { Component } from "react";
import '../styles/theatre.css';
import bookDetailsService from "../services/booking-details-service";
import { Link } from "react-router-dom";
export default class BookingHistory extends Component
{

    constructor(props)
    {
        super(props);
        this.state={ bookingHistory:[] };

    }
    componentDidMount()
    {
        var str=sessionStorage.getItem('user');
        if(str!=null){
            var user=JSON.parse(str); 
            var customer_id=user.userId;                                                 
            bookDetailsService.findBooksByCustomer(customer_id).then((response)=>{            
            this.setState({bookingHistory:response.data});
        },(error)=>{
            console.log(error)
        });
    }
   }

    render()
    {
        return (
            <div >
                <div class="row">
                    <div class="col-md-2">
                        <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Link to='/viewprofile'><a href='/#'><i id= "icons"class="fa fa-user"aria-hidden="true"></i> View Profile</a></Link>
                            <Link to='/homeuser'><a href='/#'><i id= "icons"class="fa fa-fw fa-home"></i> Home</a></Link>
                            <Link to="/bookmovie"><a href='/#'><i id = "icons" class="fas fa-ticket"></i> Book Movie</a></Link>
                            <Link to='/bookinghistory'><a href='/#'> <i id= "icons"class="fa fa-history"></i>  Booking History</a></Link>
                            <Link to="/faqs"><a href='/#'><i class="fa fa-fw fa-envelope" style= { { color : "black" }}></i> FAQ'S</a></Link>
                        </div>  
                    </div>
                    <div class="col-md-10" >
                        <div class="container-fluid">
                            <h3 style= { {  color : "antiquewhite" , justifyContent : "center"}} >My Booking History</h3> <br/> 
                            
                            <table class="table table-bordered-collapse table-striped table-hover ">
                                <thead>
                                <th>Booking Id</th><th>Movie Id</th><th>Movie Name</th><th>Theatre Id</th><th>Theatre Name</th><th>Booking Date</th><th>Tickets</th><th>Seat Type</th>
                                </thead>
                                <tbody>
                                    {
                                    this.state.bookingHistory.map((b)=>
                                        <tr>
                                            <td>{b.id}</td>
                                            <td>{b.movieId}</td>
                                            <td>{b.movieName}</td>
                                            <td>{b.theatreId}</td>
                                            <td>{b.theatreName}</td>
                                            <td>{b.bookDate }</td>
                                            <td>{b.tickets}</td>
                                            <td>{b.seatType}</td>
                                        </tr>
                                     )
                                    }
                                </tbody>    
                            </table>
                        </div> 
                    </div>
                </div>
               </div> 
        )
    }
}