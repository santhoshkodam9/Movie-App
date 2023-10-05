import { Component } from "react";
import '../styles/view-profile.css';
import manageUsersService from "../services/manage-users-service";
import { Link } from "react-router-dom";

export default class ViewProfile extends Component
{

    constructor(props)
    {
        super(props);
        this.state={ theatre :{ theatreId:0,theatreName:''},userId:0, username:'', email:'' , gender:'' , phone:'', password:'', role:'',editSelected : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.modifyUserDetails=this.modifyUserDetails.bind(this);
    }
    componentDidMount()
    {
        var userDetails1 = sessionStorage.getItem("user");
        if(userDetails1){
         var userDetails = JSON.parse(userDetails1);
         this.setState({
            userId : userDetails.userId,
            username : userDetails.username,
            email : userDetails.email,
            gender : userDetails.gender,
            phone : userDetails.phone,
            password : userDetails.password,
            role : userDetails.role
        });
        }

    }

    changeHandler(event)
    {
        this.setState(prevState=>{
            return {
                [event.target.name] : event.target.value
            }
        })
        console.log(this.state);

    }

    modifyUserDetails(){
        const usrObj = {
            userId: this.state.userId,
            username : this.state.username,
            email : this.state.email,
            phone : this.state.phone,
            gender : this.state.gender,
            password : this.state.password,
            role : this.state.role
        }
        manageUsersService.modifyUser(usrObj).then((response)=>{
            console.log(response.data);
            sessionStorage.setItem("user",JSON.stringify(response.data));
            this.setState(prevState=>{
                return {
                  editSelected : false,
                }
              })
        });
    }
    buttonClick= (u) => {
    this.setState(prevState=>{
        // const { theatre } = prevState;
        return {
          editSelected : true,
        }
      })
    }

    render()
    {
        return ( <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Link to='/viewprofile'><a href='/#'><i id= "icons"class="fa fa-user"aria-hidden="true"></i> View Profile</a></Link>
                            <Link to='/homeuser'><a href='/#'><i id= "icons"class="fa fa-fw fa-home"></i> Home</a></Link>
                            <Link to="/bookmovie"><a href='/#'><i id = "icons" class="fas fa-ticket"></i> Book Movie</a></Link>
                            <Link to='/bookinghistory'><a href='/#'> <i id= "icons"class="fa fa-history"></i>  Booking History</a></Link>
                            <Link to="/faqs"><a href='/#'><i class="fa fa-fw fa-envelope" style= { { color : "black" }}></i> FAQ'S</a></Link>
                        </div>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                    </div>
                    <div class="col-md-7" >
                        <div class="col-lg-4 col-md-6 col-sm-6 mt-80">
                            <div class="card  d-flex align-items-center justify-content-center " style={{ backgroundColor: "#f5f5f53b" }}>
                                <div class="w-100"><img src={"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"} alt="" class="rounded-circle" /></div>
                                <div class="text-center ">
                                    <p class="name"> {this.state.username} </p>
                                    <p class="job"> {this.state.email} </p>
                                    <p class="dis pb-4"> {this.state.gender} <br/> {this.state.phone} <br/> 
                                    <input type="button" style= { { backgroundColor: "rgb(91, 164, 209)", color : "black"}} class="form-control " value="Edit" onClick={() => this.buttonClick(this.state)} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               { 
                 this.state.editSelected  && 
                 <div class="row">
                    <div class="col-md-4">
                    </div>
                
                    <div class="col-sm-5" >
                    <form >
                        <label>User Id</label>
                        <input type="text" name="userId" id="" class="form-control" formControlName="userId" value={this.state.editSelected === true ? this.state.userId: null} onChange={this.changeHandler} />
                        <label>User Name</label>
                        <input type="text" name="username" id="" class="form-control" formControlName="username" value={this.state.editSelected === true ? this.state.username: null} onChange={this.changeHandler}  />
                        <label>Email Id</label>
                        <input type="text" name="email" id="" class="form-control" formControlName="email" value={this.state.editSelected === true ? this.state.email: null} onChange={this.changeHandler}  />
                        <label>Phone No</label>
                        <input type="text" name="phone" id="" class="form-control" formControlName="phone" value={this.state.editSelected === true ? this.state.phone: null} onChange={this.changeHandler}  />
                        <label>Gender</label>
                        <input type="text" name="gender" id="" class="form-control" formControlName="gender" value={this.state.editSelected === true ? this.state.gender: null} onChange={this.changeHandler}  /><br/>
                        <input type="button" value="Update" class="btn btn-success"  data-toggle="modal" data-target="#myModal" onClick={this.modifyUserDetails} />
                    </form><br/>
             
                    <div class="alert alert-success alert-dismissible" >
                        <button type="button" class="close" data-dismiss="alert"  >&times;</button>
                        Your Details are  <strong>Successfully Updated</strong>.....!!! Click <a href="/#">here</a> go back to Home page.
                    </div>
                    </div>

                    <div class="col-md-3">
                    </div>
                </div>
                }
            </div>
       </> )
    }
}