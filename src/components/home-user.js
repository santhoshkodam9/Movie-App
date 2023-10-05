import React, { Component } from 'react';
import '../styles/home-user.css';
import movieService from "../services/movie-service";
import { Link } from 'react-router-dom';

export default class HomeUser extends Component{

  constructor(props)
  {
      super(props);
      this.state={movies:[]};
      this.book=this.book.bind(this);

  }

  componentDidMount()
  {
    movieService.getAllMovie().then((response)=>{            
      this.setState({movies:response.data});
      },(error)=>{
        console.log(error)
      });
  }

  book(){
    window.location.href="http://localhost:3000/bookmovie";
  }

    render()
    {
    return ( <>
    <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
    <Link to='/viewprofile'><a href='/#'><i id= "icons"class="fa fa-user"aria-hidden="true"></i> View Profile</a></Link>
    <Link to='/homeuser'><a href='/#'><i id= "icons"class="fa fa-fw fa-home"></i> Home</a></Link>
    <Link to="/bookmovie"><a href='/#'><i id = "icons" class="fas fa-ticket"></i> Book Movie</a></Link>
    <Link to='/bookinghistory'><a href='/#'> <i id= "icons"class="fa fa-history"></i>  Booking History</a></Link>
    <Link to="/faqs"><a href='/#'><i class="fa fa-fw fa-envelope" style= { { color : "black" }}></i> FAQ'S</a></Link>
  </div> 
  <div class="container">
    <h2>
      <span  style= { { paddingLeft: 18,  marginLeft: 30 , color : "whitesmoke"}}> Featured Movies</span>
    </h2>
    <div style= { { marginLeft: 30 }} class="card-deck" >  
    {
         this.state.movies.map((m)=>
      <div class="col-lg-3 col-md-4 mt-2" > 
        <div class="card ">
          <img class="card-img-top hoverable" width="130" src={ 'data:image/png;base64,' + m.image} alt="Movie Poster" />
          <div class="card-body" >
            <h5 class="card-title" style= { { color: 'whitesmoke' }} >  {m.movieName}
                <span class="badge badge-primary">4.4
                 <i id="str" class="material-icons icon-size">star</i>
                </span> 
            </h5>
  
            <p class="card-text" > </p>
            <button type="button" class="btn btn-success" onClick={this.book} >
                 <span class="material-icons">movie_filter</span>  Book Movie
            </button>
             &emsp;&emsp;&nbsp;      
          </div>
        </div>
      </div>
       )}

    </div>
  </div>  
    </>

    )
  }

}
