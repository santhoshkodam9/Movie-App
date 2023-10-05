import { Component } from "react";
import '../styles/Login.css';
import loginService from "../services/login-service";
// import { Navigate } from "react-router-dom"
export default class Login extends Component
{

    constructor(props)
    {
        super(props);
        this.state={username:'',password:'' , invalidCreds : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.login=this.login.bind(this);
        
    }

    changeHandler(event)
    {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state);
    }
    login()
    { 
        var role = "user";
        console.log("the sate is as below:")
        console.log(this.state)
        loginService.login(this.state.username, this.state.password, role).then((response)=>{
            console.log(response.data);
            if(response.data !== ''){
                sessionStorage.setItem("user",JSON.stringify(response.data));
                this.setState({invalidCreds: false});
                if(response.data.role === "user"){
                    window.location.href="http://localhost:3000/homeuser";
                }else{
                    window.location.href="http://localhost:3000/homeadmin";
                }
            }else{
                this.setState({invalidCreds: true});
            }
        }).catch(err => { console.log( "Invalid Credentials " + err); 
            this.setState({invalidCreds: true});
        });
    }
    render()
    {
        return (
            <div class="container-fluid">
                <div class="row"> 
                    <div class="col-md-8" style= { { color: 'darkgrey'}} > <br/><br/><br/><br/><br/><br/>
                        <h3  style= { { fontStyle : "italic" , fontWeight : "bold", textAlign :"center", fontFamily: "cursive"}} >“ The whole life is just like watching a film."</h3>  
                        <h3 style={ { fontStyle : "italic" , fontWeight : "bold", marginLeft : 800, fontFamily: "cursive"}} >..Terry</h3>   <br/>
                        <h3 style= { { fontStyle : "italic" , fontWeight : "bold", textAlign :"center", fontFamily: "cursive"}} >“ Cinema can fill your empty spaces in life and loneliness"</h3>  
                        <h3 style= { { fontStyle : "italic" , fontWeight : "bold",  marginLeft : 800, fontFamily: "cursive"}} >..Pedro</h3>   <br/>
                    </div>
                    <div class="col-md-4">
                        <body>
                        <div class="box-shadow"> 
                            <div id="bg1">
                                <form >
                                    <br/>
                                    <h3   style= { { textAlign: 'center'}} >Login</h3> 
                
                                    <div class="form-group">
                                        <label for="username" class="col-form-label">User Name: </label>
                                        <input type="text"  name="username" id="username" class="form-control" placeholder="Enter UserName" formControlName="username" onChange={this.changeHandler} />
                                    </div> 
                
                                     <div class="form-group">
                                        <label for="password" class="col-form-label">Enter Password: </label>
                                        <input type="password"  name="password" id="password" class="form-control" placeholder="Enter Password" formControlName="password"  onChange={this.changeHandler}/>

                                    </div> 
      
                                    <input type="button" class="btn btn-success btn-block" value="Submit" onClick={this.login} /><br/>
                                   {  
                                    this.state.invalidCreds &&
                                    <p style= { { textAlign: 'center', color : "red" }}>Invalid Credentials !!!</p> 
                                   }
                                    <p  style= { { textAlign: 'center'}} >If New User ? Please,<a href="/signup"> click here </a> to register.</p>

                                </form> <br/>
                            </div> 
                        </div>
                        </body>
                    </div>
                </div>
            </div>
    
    )
  }
}