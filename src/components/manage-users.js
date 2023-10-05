import { Component } from "react";
import '../styles/manage-users.css';
import manageUsersService from "../services/manage-users-service";
import { Link } from "react-router-dom";
export default class ManageUsers extends Component
{

    constructor(props)
    {
        super(props);
        this.state={ user :{ userId:0,username:'',password:'',role:'',gender:'',email:'',phone:''}, users:[],editSelected : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.addUser=this.addUser.bind(this);
        this.modifyUser=this.modifyUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }
    componentDidMount()
    {
        manageUsersService.getAllUsers().then((response)=>{            
            this.setState({users:response.data});
        },(error)=>{
            console.log(error)
        });
    }

    changeHandler(event)
    {
        // this.setState( state => ({
        //     theatre:{[event.target.name] : event.target.value}
        // }));
        // below & above setting state is same below will not clear previus state values
        this.setState(prevState=>{
            const { user } = prevState;
            return {
              user: {
                ...user,
                [event.target.name] : event.target.value
              }
            }
        })
        console.log(this.state);
    }

    addUser()
    { 
        console.log("the sate is as below:")
        console.log(this.state)

        manageUsersService.addUser(this.state.user).then((response)=>{
            console.log(response.data);
        });
    }

    modifyUser(){
        const usrObj = {
            userId : this.state.user.userId,
            username : this.state.user.username,
            password : this.state.user.password,
            role : this.state.user.role,
            gender : this.state.user.gender,
            email : this.state.user.email,
            phone : this.state.user.phone,
        }
        manageUsersService.modifyUser(usrObj).then((response)=>{
            console.log(response.data);
        });
    }

    deleteUser(){
        manageUsersService.deleteUser(this.state.user.username).then((response)=>{
            alert(response.data);
        });
    }
    buttonClick= (u) => {
    this.setState(prevState=>{
        const { user } = prevState;
        return {
          editSelected : true,
          user: {
            ...user,
            userId : u.userId,
            username : u.username,
            password : u.password,
            role : u.role,
            gender : u.gender,
            email : u.email,
            phone : u.phone,
          }
        }
      })
    }
    // below & above method buttonClick same & but above will not clear previous state while adding new state values
    // buttonClick= (u) => {
    //     this.setState(state => ({
    //     editSelected : true,
    //      user :{
    //         userId : u.userId,
    //         username : u.username,
    //         password : u.password,
    //         role : u.role,
    //         gender : u.gender,
    //         email : u.email,
    //         phone : u.phone,
    //     } 
    // }));
    // }
    render()
    {
        return ( <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Link to="/homeadmin"><a href='/#' ><i class="fa fa-fw fa-home"></i> Home</a></Link>
                            <Link to="/manageusers"><a href='/#'><i class="fa fa-fw fa-user"></i>Manage Users</a></Link>
                            <Link to="/addmovie"><a href='/#'><i class="fa fa-film"></i> Add Movies</a></Link>
                            <Link to="/theatre"><a href='/#'><i class="fa fa-building"></i> Add Theatres</a></Link>
                        </div>  
                    </div>
                    <div class="col-sm-4">
                        <form>
                            <label>User Id:</label>   <input type="number" name="userId" id="userId" placeholder="Enter UserId" formControlName="userId" class="form-control" value={this.state.editSelected === true ? this.state.user.userId : null} onChange={this.changeHandler} />
           
                            <label>User Name:</label>   <input type="text" name="username" id="username" placeholder="Enter UserName" formControlName="username" class="form-control" value={this.state.editSelected === true ? this.state.user.username : null} onChange={this.changeHandler}  />

                            <label>Password:</label>   <input type="password" name="password" id="password" placeholder="Password" formControlName="password" class="form-control" value={this.state.editSelected === true ? this.state.user.password : null} onChange={this.changeHandler}   />

                            <label for="role" >Role:</label>  
                            <select name="role" id="role" formControlName="role" class="form-control" style= { { backgroundColor: "grey", color : "black"}} value={this.state.editSelected === true ? this.state.user.role : null} onChange={this.changeHandler}  >
                                <option value="">Choose Role..</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select> 
                            <br/>

                            <label class="form-label"  >Gender</label> &nbsp;
                            <input type="radio" name="gender" value="male" class="form-radio-input" id="exampleCheck1"  formControlName="gender"  />
                            <label class="form-radio-label" for="exampleCheck1">&nbsp;  Male</label>&nbsp;
                            <input type="radio" name="gender"  value="female" class="form-radio-input" id="exampleCheck1"  formControlName="gender"   />
                            <label class="form-radio-label" for="exampleCheck1"> &nbsp; Female</label> <br/>

                            <label for="email" class="form-label">Email Id</label>
                            <input type="text" id="email" name="email" class="form-control" placeholder="Enter Your Email Address" formControlName="email" value={this.state.editSelected === true ? this.state.user.email : null} onChange={this.changeHandler}  />

                            <label for="phone" class="form-label">Phone No</label>
                            <input type="number" class="form-control" name="phone" placeholder="Enter Phone number" id="phone" formControlName="phone" value={this.state.editSelected === true ? this.state.user.phone : null} onChange={this.changeHandler}  />
                            <br/>
                            
                            <div class="alert alert-primary alert-dismissible" >
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Info!</strong> Details are Successfully Updated !!!.
                            </div> <br/>

                            <input type="button" value="Add" class="btn btn-success" onClick={this.addUser} />&nbsp;
                            <input type="button" value="Modify" class="btn btn-warning" onClick={this.modifyUser}/>&nbsp;
                            <input type="button" value="Delete" class="btn btn-danger" onClick={this.deleteUser} />&nbsp;
              
                        </form> <br/>
                    </div>
                    <div class="col-sm-4" ></div>   
                </div>
                
                <div class="row">
                    <div class="col-sm-2" ></div>  
                    <div class="col-sm-8" >
                        <table class="table table-bordered-collapse table-striped table-hover ">
                            <thead>
                            <th>User Id</th><th>User Name</th><th>Gender</th><th>Email</th> <th>Phone</th><th>Role</th><th></th>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((u)=>
                                    <tr>
                                        <td>{u.userId}</td>   
                                        <td>{u.username}</td>
                                        <td>{u.gender}</td>
                                        <td>{u.email}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.role}</td>
                                        <td><input type="button" value="Edit" class="btn btn-info" onClick={() => this.buttonClick(u)} style= { { color: "black" }} /></td>&nbsp;
                                    </tr>
                                     )
                                }
                            </tbody>    
                        </table>
                    </div> 
                </div>
           </div> 
           </>
        )
    }
}