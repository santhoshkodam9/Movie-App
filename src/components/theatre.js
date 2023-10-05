import { Component } from "react";
import '../styles/theatre.css';
import theatreService from "../services/theatre-service";
import { Link } from "react-router-dom";
export default class Theatre extends Component
{

    constructor(props)
    {
        super(props);
        this.state={ theatre :{ theatreId:0,theatreName:''}, theatres:[],editSelected : false};
        this.changeHandler=this.changeHandler.bind(this);
        this.addTheatre=this.addTheatre.bind(this);
        this.modifyTheatre=this.modifyTheatre.bind(this);
        this.deleteTheatre=this.deleteTheatre.bind(this);
    }
    componentDidMount()
    {
        theatreService.getAllTheatre().then((response)=>{            
            this.setState({theatres:response.data});
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
            const { theatre } = prevState;
            return {
              theatre: {
                ...theatre,
                [event.target.name] : event.target.value
              }
            }
        })
        console.log(this.state);

    }

    addTheatre()
    { 
        console.log("the sate is as below:")
        console.log(this.state)

        theatreService.addTheatre(this.state.theatre).then((response)=>{
            console.log(response.data);
        });
    }

    modifyTheatre(){
        const thObj = {
            theatreId : this.state.theatre.theatreId,
            theatreName : this.state.theatre.theatreName,
        }
        theatreService.modifyTheatre(thObj).then((response)=>{
            console.log(response.data);
        });
    }

    deleteTheatre(){
        theatreService.deleteTheatre(this.state.theatre.theatreId).then((response)=>{
            alert(response.data);
        });
    }
    buttonClick= (t) => {
    this.setState(prevState=>{
        const { theatre } = prevState;
        return {
          editSelected : true,
          theatre: {
            ...theatre,
            theatreId : t.theatreId,
            theatreName : t.theatreName
          }
        }
      })
    }
    // below & above method buttonClick same & but above will not clear previous state while adding new state values
    // buttonClick= (t) => {
    //     this.setState(state => ({
    //         const { site } = prevState,
    //     editSelected : true,
    //     // theatre :{
    //     //     theatreId : t.theatreId,
    //     //     theatreName : t.theatreName
    //     // } 
    // }));
    //     console.log("selected movie " + JSON.stringify(t));
    // }

    render()
    {
        return (
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
                    <div class="col-md-4">
                        <form >
                            <label>Id:</label> <input type="number" name="theatreId" id="" placeholder="Enter Theatre Id" formControlName="theatreId" class="form-control" value={this.state.editSelected === true ? this.state.theatre.theatreId : null} onChange={this.changeHandler} />
            

                            <label>Theatre Name: </label><input type="text" name="theatreName" id="theatreName" placeholder="Enter Theatre Name" formControlName="theatreName" class="form-control" value={this.state.editSelected === true ? this.state.theatre.theatreName : null} onChange={this.changeHandler} /> <br/>

                            <input type="button" value="Add" class="btn btn-success"  onClick={this.addTheatre} />&nbsp;
                            <input  type="button" value="Modify" class="btn btn-warning" onClick={this.modifyTheatre} />&nbsp;
                            <input type="button" value="Delete" class="btn btn-danger" onClick={this.deleteTheatre} />&nbsp; <br/><br/>

                            <div class="alert alert-primary alert-dismissible" >
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Info!</strong> Theatres Details are Successfully Updated !!!.
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4" ></div> 
                </div>
                
                <div class="row">
                    <div class="col-sm-2" ></div>  
                    <div class="col-sm-8" >
                        <table class="table table-bordered-collapse table-striped table-hover ">
                            <thead>
                                <th>Theatre ID</th><th>Theatre Name</th><th></th>
                            </thead>
                            <tbody>
                                {
                                    this.state.theatres.map((t)=>
                                    <tr>
                                        <td>{t.theatreId}</td>   
                                        <td>{t.theatreName}</td>
                                        <td><input type="button" value="Edit" class="btn btn-info" onClick={() => this.buttonClick(t)} style= { { color: "black" }} /></td>&nbsp;
                                    </tr>
                                     )
                                }
                            </tbody>    
                        </table>
                    </div> 
                </div>
           </div>
        )
    }
}