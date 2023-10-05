import React, { useEffect } from 'react';
const Logout = (props) => {
  useEffect(() => {
    console.log("Mounting...");
    sessionStorage.removeItem("user");
  });
    return ( <> <br/><br/>
      <p style={{ textAlign: 'center', color: 'white', fontStyle: 'normal' }}> You have successfully logged out.</p>
      <p style={{ textAlign: 'center', color: 'white' ,fontStyle: 'normal'}}>Please <a href='/login'> click </a>here for Login .</p>
      <div style={{ textAlign: 'center' }}>
        <img src="https://cdn.dribbble.com/users/870130/screenshots/2295446/check-in.gif" width="15%"  alt = "Logoutimage" />
      </div><div/></> 
    )
  }
export default Logout

