import './App.css';
import React from "react"
import LoginSignupController from './components/login-signup-controller';
import TopNavbar from './components/TopNavbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Logout from './components/logout';
import SignUp from './components/sign-up';
import HomeUser from './components/home-user';
import HomeAdmin from './components/home-admin';
import AddMovie from './components/add-movie';
import Theatre from './components/theatre';
import ManageUsers from './components/manage-users';
import Faqs from './components/faqs';
import Footer from './components/footer';
import BookMovie from './components/book-movie';
import Payment from './components/payment';
import Invoice from './components/invoice';
import BookingHistory from './components/booking-history';
import ViewProfile from './components/view-profile';
import MainHome from './components/main-home';
import SearchMovies from './components/search-movies';
import AboutUs from './components/about-us';

const App = () => {


  return (
    <>
  <div id='bimg' >
    <div >
      <BrowserRouter>
      <TopNavbar/>
      <Routes>
        {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/login" element={<LoginSignupController />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homeuser" element={<HomeUser/>}/>
        <Route path="/homeadmin" element={<HomeAdmin/>}/>
        <Route path="/addmovie" element={<AddMovie/>}/>
        <Route path="/theatre" element={<Theatre/>}/>
        <Route path="/manageusers" element={<ManageUsers/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/bookmovie" element={<BookMovie/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/bookinghistory" element={<BookingHistory/>}/>
        <Route path="/viewprofile" element={<ViewProfile/>}/>
        <Route path="/mainhome" element={<MainHome/>}/>
        <Route path="/searchmovie" element={<SearchMovies/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/" element={<MainHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>

    <div class="row">
      <div class="col-md-12">
        {/* <Login /> */}
        <Footer/>
      </div>
    </div>
  </div>
  </>
  )
}

export default App
