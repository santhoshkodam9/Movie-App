import React from "react"
import { Component } from "react";
import {Link} from 'react-router-dom'
import '../styles/TopNavbar.css';
// logoMovie from "http://4.bp.blogspot.com/-hgCC8bGQGlE/UoXSMEiZubI/AAAAAAAAAdo/1vKKT0rWZvw/s1600/logo+m.png"

export default class TopNavbar extends Component {
    constructor(props) {
      super(props);
      this.state = {loggedUserName: 'Login' , search: ''};
      this.changeHandler=this.changeHandler.bind(this);
    //   this.fnsearch=this.fnsearch.bind(this);

    }
    interval = setInterval(() => {
        // console.log('This will run every second!');
        var loggedUser = sessionStorage.getItem("user");
        if(loggedUser !== null && loggedUser !== undefined){
            var role = JSON.parse(loggedUser);
            // console.log(role);
            this.setState({loggedUserName:role.username });
        }else{
            this.setState({loggedUserName: 'Login'});
        }

    }, 1000);

    changeHandler(event)
    {
        this.setState(
            { 
                [event.target.name]:event.target.value,

            },
            localStorage.setItem("search",event.target.value)
        );
        console.log(this.state.search);
    }

    // fnsearch()
    // {
    //     window.location.href="http://localhost:3000/searchmovies";
    // }
    render() {
    return (
        <div class="banner" >
            <div class="navbar">
                <img style= { { marginLeft: 100 , height: 100, width: 100}}  src="http://4.bp.blogspot.com/-hgCC8bGQGlE/UoXSMEiZubI/AAAAAAAAAdo/1vKKT0rWZvw/s1600/logo+m.png" alt = "Logo"class="logo" />
                <ul> 
                    <li>
                        <form>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" name="search" style= { { width: 300 , backgroundColor : "#fff"}} onChange={this.changeHandler} />
                                <div class="input-group-btn"> 
                                   <Link to="/searchmovie"><button class="btn btn-info" type="submit" >
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                    </Link> 
                                </div>
                            </div>
                        </form>
                    </li>
                    <Link to="/mainhome"><li><a href= "/#" class="nav-link"> Home </a></li></Link>
                    <Link to="/aboutus"><li><a href= "/#" class="nav-link">ABOUT US</a></li></Link>
                    <span class="dropdown">
                        <button class="dropbtn">CONTACT US</button>
                        <span class="dropdown-content">
                            <a href= "/#">kranthikumar@gmail.com</a> 
                            <a href= "/#">8978086371</a>
                        </span> 
                    </span>
                    <Link to="/login"> <li style={this.state.loggedUserName === "Login" ? { display: 'none' } : {}}><a  href= "/#" class="nav-link" name="loginlnk"  > {this.state.loggedUserName} <i class='fa fa-user'></i></a> </li> </Link>  
                    <Link to={this.state.loggedUserName === "Login" ? "/login" :"/logout"} > <li><a  href= "/#" class="nav-link"  > {this.state.loggedUserName === "Login" ? "Login" :"Logout"} </a></li></Link>  
                    <Link to='/signup'> <li  style={this.state.loggedUserName === "Login" ? {} : { display: 'none' }}><a href= "/#" className="nav-link" >  {this.state.loggedUserName === "Login" ? "Sign Up" : ''}</a></li></Link>  
            </ul>
        
        </div>     
        </div>
    )
    }
}
