
import { Component } from "react";
import { Link } from "react-router-dom";
import addMovieService from "../services/add-movie-service";
import '../styles/add-movie.css';

export default class AddMovie extends Component
{
    constructor(props)
    {
        super(props);
        this.state={movieId:0,movieName:'',noOfTickets:0,theatreId:0,picture:'', selectedFile :{}, movies:[], selectedMovie:{}, posterSelected:false,editSelected : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.addMovie=this.addMovie.bind(this);
        this.modifyMovie=this.modifyMovie.bind(this);
        this.deleteMovie=this.deleteMovie.bind(this);
        this.selectMovie=this.selectMovie.bind(this);
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
            alert(response.data);
        });
    }

    modifyMovie()
    {
        console.log("the sate is as below:")
        console.log(this.state)
        const x = new FormData();
        x.append('movieId',this.state.movieId);
        x.append('movieName',this.state.movieName);
        x.append('noOfTickets',this.state.noOfTickets);
        x.append('theatreId',this.state.theatreId);
        if(this.selectedFile !== undefined){
            x.append('image',this.selectedFile, this.selectedFile.name);
        }else{
            // x.append('image',null);
        }
        addMovieService.modifymovie(x).then((response)=>{
            alert(response.data);
        });
    }

    deleteMovie(){
        addMovieService.deleteMovie(this.state.movieId).then((response)=>{
            alert(response.data);
        });
    }

    selectMovie(m)
    {
        console.log("the sate is as below:" + m.movieName);

    }

    buttonClick= (m) => {
        this.setState(state => ({
        editSelected : true,
        posterSelected : true,
        movieId :m.movieId,
        movieName : m.movieName,
        noOfTickets : m.noOfTickets,
        theatreId : m.theatreId,
        picture : m.image
    }));
        console.log("selected movie " + JSON.stringify(m))

      }
    render()
    {
    return <div>
        <div class="container-fluid">
    <div class="row">
        <div class="col-sm-4">
        <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link to="/homeadmin"> <a href='/#' ><i class="fa fa-fw fa-home"></i> Home</a></Link>
        <Link to="/manageusers"><a href='/#'><i class="fa fa-fw fa-user"></i> Manage Users</a></Link>
        <Link to="/addmovie"><a href='/#'><i class="fa fa-film"></i> Add Movies</a></Link>
        <Link to="/theatre"><a href='/#'><i class="fa fa-building" ></i> Add Theatres</a></Link>
   </div>  
   </div>
   <div class="col-sm-4">
        <form >
          
          <label>Movie Id:</label>   <input type="number" placeholder="Enter Movie Id"  name="movieId" id="" formControlName="movieId" class="form-control"  value={this.state.editSelected === true ? this.state.movieId : null} onChange={this.changeHandler} />

         
          <label>Movie Name:</label>   <input type="text"  name="movieName" id="movieName" placeholder="Enter Movie Name"  formControlName="movieName" class="form-control" value={this.state.editSelected === true ? this.state.movieName : null}  onChange={this.changeHandler} />

         
          <label>No Of Tickets:</label>   <input type="text" name="noOfTickets" id="enterNoTickets" placeholder="Enter No of Tickets"  formControlName="noOfTickets" class="form-control" value={this.state.editSelected === true ? this.state.noOfTickets: null}  onChange={this.changeHandler} />

         
          <label>Theatre Id:</label>  <input type="number" name="theatreId" id="" placeholder="Enter Theatre Id"  formControlName="theatreId" class="form-control" value={this.state.editSelected === true ? this.state.theatreId: null}  onChange={this.changeHandler}/>

        

          <label>Picture: </label>   <input type="file" name="picture" id="" formControlName="picture" class="form-control" onChange={this.changeHandler}/>  
          <img width="50" height="50" alt="poster" src= {this.state.posterSelected === false ? this.state.picture :'data:image/png;base64,' + this.state.picture} />
            <br/>
            <input type="button" value="Add" class="btn btn-success" onClick={this.addMovie}/>&nbsp;    
            <input type="button" value="Modify" class="btn btn-warning" onClick={this.modifyMovie} />&nbsp;
            <input type="button" value="Delete" class="btn btn-danger" onClick={this.deleteMovie} />&nbsp;<br/><br/>

            <div class="alert alert-primary alert-dismissible" >
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Info!</strong> Movie Details are Successfully Updated !!!.
            </div>
            
        </form> <br/>
          </div>
          <div class="col-sm-4" ></div>    
        </div>
        <div class="row">
    <div class="col-sm-2" ></div>  
    <div class="col-sm-8" >
      <table class="table table-bordered-collapse table-striped table-hover ">
        <thead>
            <th>ID</th><th>Movie Name</th><th>No of Tickets</th> <th>Theatre</th> <th>Theatre Name</th> <th>Poster</th><th></th>
        </thead>
        <tbody>
        {
            this.state.movies.map((m)=>
            <tr>
                <td>{m.movieId}</td>
                <td>{m.movieName}</td>
                <td>{m.noOfTickets}</td>
                <td>{m.theatreId}</td>   
                <td>{m.theatreName}</td>

                <td><img width="100" alt=""  src={ 'data:image/png;base64,' + m.image} /></td>
                {/* <td><input type="button" value="Edit" class="btn btn-info" onClick={this.buttonClick.bind(m)} style= { { color: "black" }} /></td>&nbsp; */}
                <td><input type="button" value="Edit" class="btn btn-info" onClick={() => this.buttonClick(m)} style= { { color: "black" }} /></td>&nbsp;

                {/* onClick={this.selectMovie(m)} onClick={() => this.add(product)} */}
            </tr>
            )
        }
          </tbody>    
    </table>
    </div> 
    </div>
        </div>
        </div>
    }
}