import React, { Component } from 'react';
import '../styles/home-admin.css';
import userService from "../services/login-service";
import bookDetailsService from "../services/booking-details-service";
import { Link } from 'react-router-dom';


export default class HomeAdmin extends Component{

  constructor(props)
  {
      super(props);
      this.state={registerUsersCount:[],
        BookingsCount:[],
      };
  }

  componentDidMount()
  {
    userService.getUserCount().then((response)=>{            
      this.setState({registerUsersCount:response.data});
      },(error)=>{
        console.log(error)
      });

      bookDetailsService.getBookingCount().then((response)=>{            
        this.setState({BookingsCount:response.data});
        },(error)=>{
          console.log(error)
        });
  }

    render()
    {
    return ( <>
    <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
      <Link to="/homeadmin"> <a href='/#' ><i class="fa fa-fw fa-home"></i> Home</a></Link>
      <Link to="/manageusers"><a href='/#'><i class="fa fa-fw fa-user"></i> Manage Users</a></Link>
      <Link to="/addmovie"><a href='/#'><i class="fa fa-film"></i> Add Movies</a></Link>
      <Link to="/theatre"><a href='/#'><i class="fa fa-building" ></i> Add Theatres</a></Link>
   </div>  

  <div class="content">
  <h2  style= { { textAlign: 'center', color : "whitesmoke"}} ><u><b>WELCOME ADMIN</b> </u></h2><br/><br/><br/>
  <div class="row">
  
 
   <div class="col-md-10"  style= { {  justifyContent : 'right'}} >
          <div class="col-xl-3 col-lg-6"   style= { {  marginLeft : 300}} >
              <div class="card l-bg-blue-dark">
                  <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                      <div class="mb-4">
                          <h5 class="card-title mb-0">Registered Users</h5>
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                          <div class="col-8">
                              <h2 class="d-flex align-items-center mb-0">
                                {this.state.registerUsersCount.userId}
                               </h2>
                              <span><i>Users</i></span>

                          </div>
                          <div class="col-4 text-right">
                              <span>9.23% <i class="fa fa-arrow-up"></i></span>
                          </div>
                      </div>
                      <div class="progress mt-1 " data-height="8"  style= { { height : 8}} >
                          <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style= { { width: 25 }}></div>
                      </div>
                  </div>
              </div>
          </div>
     <br/>
      <div>
        <div class="col-xl-3 col-lg-6" style= { {  marginLeft : 300}}>

          <div class="card l-bg-green-dark">
              <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                  <div class="mb-4">
                      <h5 class="card-title mb-0">Number Of Bookings </h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                      <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                            {this.state.BookingsCount.id}
                          </h2>
                          <span><i>Booked</i></span>
                      </div>
                      <div class="col-4 text-right">
                          <span>10% <i class="fa fa-arrow-up"></i></span>
                      </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style= { { height : 8}} >
                      <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style= { { width: 25 }}></div>
                  </div>
              </div>
          </div>
      </div>
      </div>
   </div>
   ssdsaajnkjsankj
   <div class="col-md-2" >

</div>
</div>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
  </div>
</div>
    </>

    )
  }

}
