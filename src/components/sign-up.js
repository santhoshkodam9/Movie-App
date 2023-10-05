
import { Component } from "react";
import '../styles/Login.css';
import '../styles/sign-up.css';
import loginService from "../services/login-service";

export default class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state={username:'',email:'',phone:'',gender:'',password:'', otp:'' , disabled:true, otpsent: false ,signUpSuccess: true};
        this.changeHandler=this.changeHandler.bind(this);
        this.signUp=this.signUp.bind(this);
        this.fnGenerateOtp=this.fnGenerateOtp.bind(this);
        this.fnValidateOtp=this.fnValidateOtp.bind(this);
    }

    changeHandler(event)
    {
        if(event.target.name!=='picture')
            this.setState({[event.target.name]:event.target.value});

        console.log(this.state);
    }
    
    signUp()
    {
        console.log("the sate is as below:")
        console.log(this.state)
        loginService.signup(this.state).then((response)=>{
          console.log(response.data);
          if(response.status === 200){
            this.setState({signUpSuccess: true});
          }
      });
    }

    fnGenerateOtp()
    {
        //this.message = "OTP Sent Successfully"
        loginService.getOtp(this.state.email).then((response)=>{
          console.log(response.data);
          var otp=response.data.toString();
          localStorage.setItem("otp",otp);
          this.setState({otpsent: true});
        });
    }

    fnValidateOtp()
    {
      var otp=localStorage.getItem("otp");
      console.log("The Generated OTP is "+  otp );
      console.log("Your inputed OTP is "+  this.state.otp );
      if(this.state.otp === otp){
        this.setState({disabled: false});
        console.log("Matched " + this.state.otp );
      }else{
        this.setState({disabled: true});
        console.log("Not Matched " + this.state.otp);
      }
    }


    render()
    {
    return( <div>
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
                        <div id="bg1" style= { { borderRadius: 2 }} >
                            <form >
                                 <br/>
            <h3 style= { { textAlign: "center" }} >Create Your Account</h3> 
          
          {  !this.state.signUpSuccess &&
             <div>
             <div class="form-group">
              <label for="username" class="col-form-label">User Name: </label>
              <input type="text"  name="username" id="username" placeholder="Enter Your Name"class="form-control" formControlName="username" onChange={this.changeHandler} />
            </div> 

            <div class="form-group">
              <label for="email" class="form-label">Email Id</label>
              <input type="text" name="email" id="email" class="form-control" placeholder="Enter Your Email Address" formControlName="email" onChange={this.changeHandler} />
            </div> 

            
            <div class="mb-3">
              <label for="phone" class="form-label">Phone No</label>
              <input type="number"  name="phone" class="form-control" placeholder="Enter Phone number" id="phone" formControlName="phone" onChange={this.changeHandler}  />
            </div> 

            
            <div class="mb-3 form-radio">
              <label class="form-label" >Gender</label> &nbsp;
              <input type="radio" name="gender" value="male" class="form-radio-input" id="exampleCheck1"  formControlName="gender" onChange={this.changeHandler} />
              <label class="form-radio-label" for="exampleCheck1">Male</label>&nbsp;
              <input type="radio" name="gender"  value="female" class="form-radio-input" id="exampleCheck1"  formControlName="gender" onChange={this.changeHandler} />
              <label class="form-radio-label" for="exampleCheck1">Female</label>
            </div> 

            <div class="form-group">
              <label for="password" class="col-form-label">Create Password: </label>
              <input type="password"  name="password" id="password" placeholder="Password" class="form-control" formControlName="password" onChange={this.changeHandler}  />
            </div> 

            <div class="form-group">
              <label for="cpassword" class="col-form-label">Re-Enter Password: </label>
              <input type="password"  name="cpassword" id="cpassword" placeholder="Confirm Password" class="form-control" formControlName="cpassword" />
            </div> 

            <input type="button" value="Generate Otp"  class="btn btn-success" onClick={this.fnGenerateOtp} />
            {
               this.state.otpsent &&
              <label style={{color: "yellow" }}>&nbsp; OTP sent Successfully</label>
            }
           <br/><br/>
           <label> Enter Otp:</label> 
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <input type="text" name="otp" placeholder=" Enter OTP" id="otp" formControlName="otp"  onKeyUp={this.fnValidateOtp}  onChange={this.changeHandler}/>
            <br/>
 
            <input type="button" class="btn btn-primary btn-block" value="Submit" style= { { marginTop: 10 }}   onClick={this.signUp} disabled={this.state.disabled} /><br/>
            </div>
          } 
            { 
               this.state.signUpSuccess &&
             <div>
             <div style= { { color: "Yellow" , textAlign: "center" }} id= "signupsuccess" >
             <img src="https://cdn.dribbble.com/users/870130/screenshots/2295446/check-in.gif" width="50%"  alt = "Logoutimage" /> <br/>
             Your Account is Successfully Created. <br/> <label style= { { color: "white" }}> Click <a href="/login">  here </a> to Login.</label> <br/>
             </div> 
             </div>
            } 
            <br/>
        </form>
        </div>
      
    </div>

   
  </body><br/><br/><br/><br/>
    </div>
    <div class="col-md-0">

    </div>
  </div>
        </div>

)
}
}