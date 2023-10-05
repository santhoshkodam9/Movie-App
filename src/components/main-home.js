import React, { Component } from 'react';
import '../styles/main-home.css';
import addMovieService from "../services/add-movie-service";
import Carousel from './carousel';
import { Link } from 'react-router-dom';

export default class MainHome extends Component{
  constructor(props)
  {
      super(props);
      this.state={ movies:[], bookSelected: false, show:false, disabled : false };
      this.book=this.book.bind(this);
      this.close=this.close.bind(this);
      this.login=this.login.bind(this);


  }

  componentDidMount()
  {
    addMovieService.getAllMovie().then((response)=>{            
        this.setState({movies:response.data});
    },(error)=>{
        console.log(error)
    });

  }

  book = (event) => {
    if (this.state.disabled) {
        return;
    }
    this.setState({disabled: true});
        var loggedUser = sessionStorage.getItem("user");
    if(loggedUser !== null && loggedUser !== undefined){
        this.setState({bookSelected:  false});
    }else{
        this.setState({show:  true});
        this.setState(prevState =>{
            return{
                 ...prevState,
                 show : true
            }
         })
         var element = document.getElementById("bimg");
         element.style.backgroundColor = "black";
         element.style.opacity= "0.8";
    }
}

close = (event) => {
    if (this.state.disabled) {
        this.setState({disabled: false});
        this.setState(prevState =>{
            return{
                 ...prevState,
                 show : false
            }
         })
         var element = document.getElementById("bimg");
         element.style.backgroundColor = "black";
         element.style.opacity= "1";
        return;
    }else{
    this.setState({disabled: true});
    }
}
login = (event) => {
    if (this.state.disabled) {
        this.setState({disabled: false});
        this.setState(prevState =>{
            return{
                 ...prevState,
                 show : false
            }
         })

        window.location.href = "http://localhost:3000/login";
    }else{
    this.setState({disabled: true});
    }
}

    render()
    {
    return (<>
    <Carousel/><br/><br/>
    { this.state.show &&
    <div class="modal" id="myModal" style= { { display : 'block'}}  >
    <div class="modal-dialog">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title"> <strong>Info !</strong></h4>
          <button type="button" class="close" data-dismiss="modal" onClick={this.close}>&times;</button>
        </div>
        
        <div class="modal-body">
            Please <a href='/login'><span onClick={this.login} style= { { color : 'blue', textDecoration: "underline"}} > Login  </span></a>to Book a Ticket.
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.close} >Close</button>
        </div>
        
      </div>
    </div>
    </div>
    }
    <div class="container-flex">
        <h2>
          <span  style= { { paddingLeft: 18 , color:'whitesmoke'}} > Featured Movies</span>
        </h2>
        <div class="card-deck" > 
        {
        this.state.movies.map((m)=>  
        <div class="col-lg-3 col-md-4 mt-2" > 
             <div class="card" >
                <img class="card-img-top hoverable"  src={ 'data:image/png;base64,' + m.image} alt="Movie Poster" />
                <div class="card-body"  style= { { backgroundImage: 'linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))' }}>
                    <h5 class="card-title"  style= { { color:'whitesmoke'}} > {m.movieName} &nbsp;
                           <span class="badge badge-primary">4.4
                            <i id="str" class="material-icons icon-size">star</i>
                           </span> 
                    </h5>

                    <p class="card-text" > </p>
                   
                        <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal" disabled={this.state.disabled}  onClick={this.book}>
                            <span class="material-icons">movie_filter</span> Book Movie
                        </button>
                        &emsp;&emsp;&nbsp;
                        <span class="material-icons col-4 text-secondary "  style= { { fontSize: 28, verticalAlign: "middle"}} >
                            favorite_border
                        </span> <br/><br/>
                    { 
                       this.state.bookSelected &&  
                        <div class="alert alert-danger alert-dismissible" >
                            <button type="button" class="close" data-dismiss="alert" >&times;</button>
                            <strong>Info!</strong> Please<Link to='/login'><a href='/#'> Login  </a></Link> to Book.
                        </div>
                    }
                </div>
             </div>
        </div>        
       )}
        </div>
        
   </div>
   </>)
  }

}
