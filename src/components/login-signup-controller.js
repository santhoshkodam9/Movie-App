import {Component} from "react";
 import Login from "./Login";
import Logout from "./logout";
export default class LoginSignupController extends Component {
    constructor(props) {
      super(props);
    //   this.handleLoginClick = this.handleLoginClick.bind(this);
    //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    // handleLoginClick() {
    //   this.setState({isLoggedIn: true});
    // }
  
    // handleLogoutClick() {
    //   this.setState({isLoggedIn: false});
    // }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        // button = <LogoutButton onClick={this.handleLogoutClick} />;
        button = <Logout/>;  
      } else {  
        button = <Login/>;

      }
  
      return (
        <div>
          {/* <Greeting isLoggedIn={isLoggedIn} /> */}
           {button}
        </div>
      );
    }
  }
  