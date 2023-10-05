import { Component } from "react";
import '../styles/theatre.css';
import theatreService from "../services/theatre-service";
import addMovieService from "../services/add-movie-service";
import { Link } from "react-router-dom";


export default class SearchMovies extends Component
{

    constructor(props)
    {
        super(props);
        this.state={ theatres:[] , movies:[] , bookSelected: false};
        this.fnSearchBook=this.fnSearchBook.bind(this);
        this.closeBtn=this.closeBtn.bind(this);

        this.changeHandler=this.changeHandler.bind(this);

    }
    changeHandler(event)
    {
        this.setState(
            { 
                [event.target.name]:event.target.value,

            },
            localStorage.setItem("search",event.target.value)
        );
        console.log(this.state.search);
        this.fetchSearchResults();
    }
    componentDidMount()
    {  
      this.fetchSearchResults() ;
    }
    fetchSearchResults(){
        theatreService.getAllTheatre().then((response)=>{            
            this.setState({theatres:response.data});
            if(JSON.stringify(this.state.theatres).includes(localStorage.getItem("search"))){
                addMovieService.getMovieByTheatreName(localStorage.getItem("search")).then((response)=>{  
                    console.log(response.data);
                    this.setState({movies:response.data});
                    console.log(this.state.movies); 
                })
            }else{
                addMovieService.getMovieByName(localStorage.getItem("search")).then((response)=>{  
                    console.log(response.data);
                    this.setState({movies:response.data});
                    console.log(this.state.movies); 
                })
            }
        },(error)=>{
            console.log(error)
        });   
    }
    closeBtn(){
        this.setState({bookSelected:  false});
    }

   fnSearchBook(){
    if(localStorage.getItem("user")==null){
        this.setState({bookSelected:  true});
    }else{
        window.location.href="http://localhost:3000/booking";
        }
    }
    render()
    {
        return (
            <div >
                <div>
                    <form>
                        <div class="input-group" style= { { width: 350, position: "absolute", top: 58, left: 415}} >
                                <input type="text" class="form-control" placeholder="Search" name="search" style= { { width: 300 , backgroundColor:"whitesmoke"}} onChange={this.changeHandler} />
                                <div class="input-group-btn"> 
                                   <button class="btn btn-info" type="submit" >
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                    </form>
                </div>
                <div class="row">
                    <div class="container">
                        <table class="table table-bordered-collapse table-striped table-hover">
                            <thead style= { {  color : "whitesmoke" }} >
                                <th>ID</th><th>Movie Name</th> <th>Theatre ID</th> <th>Theatre Name</th> <th>Poster</th><th></th>
                            </thead>
                            <tbody style= { {  color : "aliceblue" }} >
                            {
                            this.state.movies.map((m)=>     
                                <tr>
                                    <td>{m.movieId}</td>
                                    <td>{m.movieName}</td>
                                    <td>{m.theatreId}</td>
                                    <td>{m.theatreName}</td>
                                    <td><img width="100" src={"data:image/png;base64,"+ m.image} alt="" /></td>
                                    <td><input type="button" value="Book" class="btn btn-info" onClick={this.fnSearchBook}  /></td> <br/>
                                </tr> 
                            )}  
                            </tbody>  
                        </table>
                        {
                                this.state.movies.length === 0  &&  
                                <div class="alert alert-danger alert-dismissible"  style= { {  textAlign : "center" }}>
                                <strong> No Matching Results Found ! </strong>
                            </div>                         
                             }   
                    { 
                       this.state.bookSelected &&                         
                        <div class="alert alert-danger alert-dismissible" >
                            <button type="button" class="close" data-dismiss="alert" onClick={this.closeBtn}>&times;</button>
                            <strong>Info!</strong> Please !!! Login into Website to Book the Ticket.... <Link to='/login'><a href="/#"> click </a> </Link> here for Login.
                        </div>
                    }    
                
                    </div>
                </div>
               </div> 
        )
    }
}