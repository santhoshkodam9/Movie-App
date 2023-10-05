
import { Component } from "react";
import { Link } from "react-router-dom";
import bookMovieService from "../services/book-movie-service";
import addMovieService from "../services/add-movie-service";
import payBookService from "../services/payBook-service";


import '../styles/book-movie.css';

var book ={}
export default class BookMovie extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state={movieId:0,movieName:'',theatreId:0, theatreName:'',picture:'',showName:"", bookDate:"", category:"", enteredNoTickets:0, selectedFile :{}, movies:[], selectedMovie:{}, bookSelected:false,editSelected : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.bookMovie=this.bookMovie.bind(this);
        // this.modifyMovie=this.modifyMovie.bind(this);
        
    }

    readFileDataAsBase64(e) {
        const file = e.target.files[0];
    
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                resolve(event.target.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
    }
    componentDidMount()
    {
        addMovieService.getAllMovie().then((response)=>{            
            this.setState({movies:response.data});
        },(error)=>{
            console.log(error)
        });
    }

    changeHandler(event)
    {
        if(event.target.name!=='picture'){
            this.setState(
                { 
                    [event.target.name]:event.target.value
                } 
            );
        }
        else
        {   
            this.readFileDataAsBase64(event).then((data)=>{
                this.setState({picture:data, posterSelected : false,});
                this.selectedFile=event.target.files[0];
                
            })
        }
        console.log(this.state);
    }

    addMovie()
    {
        console.log("the sate is as below:")
        console.log(this.state)
        const x = new FormData();
        x.append('movieId',this.state.movieId);
        x.append('movieName',this.state.movieName);
        x.append('noOfTickets',this.state.noOfTickets);
        x.append('theatreId',this.state.theatreId);
        x.append('image',this.selectedFile, this.selectedFile.name);
        addMovieService.addmovie(x).then((response)=>{
            //alert(response.data);
        });
    }
    bookMovie(){

        book.theatreId=this.state.theatreId;
        book.movieId=this.state.movieId;
        book.tickets =  this.state.enteredNoTickets;
        book.seatType = this.state.category;
        var bookDate = this.state.bookDate;
        var showName = this.state.showName;
        localStorage.setItem("bookDate", bookDate);
        localStorage.setItem("showName", showName);

        addMovieService.getMovieById(this.state.movieId).then((response)=>{            
            // this.setState({movies:response.data});
            console.log(response);
            var movieById=response.data; 
                                                                                                //  alert("Booked Movie Id "+ JSON.stringify(this.movieById)); 
            var availableTickets = movieById.noOfTickets;
            this.DisplayTickets = availableTickets;
                                                                                                // alert(" display available tickets  " + this.DisplayTickets);
            var enteredTickets = this.state.enteredNoTickets;
            if(enteredTickets === 0){
               alert(" Entered tickets should not be 0 & less than that");
              //this.router.navigate(['/noTickets']);
              return
            }  
            if(enteredTickets <= availableTickets ){
                availableTickets = availableTickets - enteredTickets;
                                                                                                  // alert("available tickets after booking" +availableTickets);
                movieById.noOfTickets=availableTickets;
                                                                                                  //alert("no of tickets updated to db " + this.movieById.noOfTickets);
                                                                                                  //alert("Modify movie object " + JSON.stringify(this.movieById));
               addMovieService.modifyMovieticket(movieById).then((response)=>{
                 console.log(response.data)
                });
                //alert("navigate to payment book page");
              }else{
                alert("Tickets are not Available");
              }
              localStorage.setItem("movieName", movieById.movieName );
              localStorage.setItem("theatreName", movieById.theatreName );                                                                                 //  alert(JSON.stringify(" book object to local storage " + this.book))
              localStorage.setItem("confirmBook", JSON.stringify(book));
               console.log(book);

               bookMovieService.bookTicket(book).then((response)=>{
                console.log(response.data);
               });
               payBookService.bookTicket(book);  
               window.location.href="http://localhost:3000/payment";
        },(error)=>{
            console.log(error)
        });
    
      }

    deleteMovie(){
        addMovieService.deleteMovie(this.state.movieId).then((response)=>{
            // alert(response.data);
        });
    }

    selectMovie(m)
    {
        console.log("the sate is as below:" + m.movieName);

    }

    bookClick= (m) => {
        this.setState(state => ({
        bookSelected : true,
        movieId :m.movieId,
        movieName : m.movieName,
        theatreId : m.theatreId,
        theatreName : m.theatreName,
        noOfTickets : m.noOfTickets,
        picture : m.image

    }));
    localStorage.setItem("bookimage",m.image);                                           

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    if(sessionStorage.getItem('user')==null)
    {
      console.log("NOt logged in.");
      return;
    }
    var str=sessionStorage.getItem('user');
    if(str!=null){
      var user=JSON.parse(str);
      var customer_id=user.userId;
         book.bookDate=new Date();
         book.customerId=customer_id;

        addMovieService.getMovieById(this.state.movieId).then((response)=>{  
        console.log(response.data);
        var movieById=response.data; 
        // localStorage.setItem("bookimage",this.state.picture);                                           
        var availableTickets = movieById.noOfTickets;
        this.setState(state => ({
            noOfTickets : availableTickets,
        }));                                                                                 // alert(" display tickets  " + this.DisplayTickets);
      });
                                                                                       
       localStorage.setItem("confirmBook", JSON.stringify(book));
       console.log(book);

        }
        console.log("selected movie " + JSON.stringify(m))

    }
    render()
    {
    return <div>
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
        <div class="col-sm-4" ></div>    
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-1" >
            </div>
            <div class="col-md-6">
                <h4  style= { { color: "antiquewhite" }} >Featured Movies</h4> <br/>
                {
                this.state.movies.map((m)=>
                <div class="card" style= { { width: 385, color: "aliceblue", backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75))"}} >
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img width="130" alt="Movie Poster"  src={ 'data:image/png;base64,' + m.image} />
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h5 class="card-title">{ m.movieName}</h5>
                                <p class="card-text"> TheatreId: { m.theatreId}  </p>
                                <p class="card-text"> TheatreName: { m.theatreName }  </p>
                                <input type="button" value="Book Now" class="btn btn-primary stretched-link" onClick={() => this.bookClick(m)} />
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
        {  
          this.state.bookSelected  && 

            <div class="col-md-4" style= { { backgroundColor: "black" }}   > <br/><br/>
                <form class="container-flex" >
                    <label>Movie Id:</label>  <input type="text" name="movieId" id="movieId" class="form-control"  value={ this.state.movieId }  formControlName="movieId" />
                    <label>Movie Name: </label>  <input type="text" name="movieName" id="movieName" class="form-control" value={ this.state.movieName }  formControlName="movieName" />
                    <label>Theatre Name:</label>  <input type="text" name="theatreName" id="theatreName" class="form-control" value={ this.state.theatreName }  formControlName="theatreName" />
                    <label>Show Date:</label> <br/>
                    <select name="bookDate" id="bookdate" formControlName="bookDate" class="form-control"  style= { { backgroundColor: "whitesmoke", color: "black" }} onChange={this.changeHandler}  >
                        <option value="Choose Role..">Choose Date..</option>
                        <option value="10-08-2021">10-08-2021</option>
                        <option value="11-08-2021">11-08-2021</option>
                        <option value="12-08-2021">12-08-2021</option>
                    </select>
                    <br/>
           
                    <div class="mb-3 form-radio">
                        <label class="form-label" >Show Name</label> &nbsp; <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="showName" formControlName="showName" value="Morning Show (11:00AM)" onChange={this.changeHandler} /> &nbsp;
                        <label class="form-radio-label" for="exampleCheck1">Morning Show  &nbsp; (11:00AM)</label>&nbsp; <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="showName" formControlName="showName" value="Matinee Show (02:00PM)"  onChange={this.changeHandler} /> &nbsp;
                        <label class="form-radio-label" for="exampleCheck1">Matinee Show &nbsp;(02:00PM)</label>&nbsp;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="showName" formControlName="showName" value="First Show (06:00PM)" onChange={this.changeHandler} /> &nbsp;
                        <label class="form-radio-label" for="exampleCheck1">First Show &nbsp;(06:00PM)</label>&nbsp;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="showName" formControlName="showName" value="Second Show (09:00PM)" onChange={this.changeHandler} /> &nbsp;
                        <label class="form-radio-label" for="exampleCheck1">Second Show &nbsp;(09:00PM)</label>&nbsp;
                    </div> 
                    <br/>
           
                    <label> Seat Types:</label> <input type="text" name="category" id="category" formControlName="category" placeholder="Select Seat type..." list="categories" class="form-control" onChange={this.changeHandler} />
                        <datalist id="categories">
                            <option value="Silver">silver  Rs.150/-</option>
                            <option value="Gold">gold  Rs.300/-</option>
                            <option value="Premium">premium  Rs.500/-</option>
                        </datalist> 
                        <br/>

                    <i> Available Tickets: </i> <i> {this.state.noOfTickets} </i><br/><br/>
                    <label>Enter No Of Tickets:</label> <input type="text" name="enteredNoTickets" id="enteredNoTickets" placeholder="Enter Number Tickets" class="form-control" formControlName="tickets" onChange={this.changeHandler} /> 
                    <br/>

                    <input type="button" value="BookTicket" class="btn btn-success"  onClick={this.bookMovie}/>&nbsp;
                    <button type="reset" value="Cancel" class="btn btn-danger" > Cancel </button>     
          </form> <br/>
      </div>
      
    }
            <div class="col-md-1" style= { { marginTop: 80 }} >
                 <img width="130" alt="Movie Poster"  src={ 'data:image/png;base64,' + this.state.picture} />
            </div>
        </div>
    </div>  

        </div>
    </div>
    }
}