import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/payment.css';
//var price = 0;
export default class Payment extends Component {
  
  constructor(props)
  {
      super(props);
      this.state={payment:0 };
      this.confirmPayment=this.confirmPayment.bind(this);

  }
  confirmPayment= () => {
    window.location.href="http://localhost:3000/invoice";
  };
  componentDidMount()
  {
    var str=localStorage.getItem('confirmBook');
    if(str!=null){
      var book=JSON.parse(str);
      if(book.seatType==="Silver"){
          var calprice= book.tickets * 150;
      }else if(book.seatType==="Gold"){
            calprice= book.tickets * 300;
      }else{
           calprice= book.tickets * 500;
      }
      this.setState({ payment : calprice});
      localStorage.setItem("payAmount",JSON.stringify(calprice));                                                                                                 
      // this.bookId = ++this.bookId;                
    }
   
  }
  render()
    {
    return ( <> 
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
    <div class="container-fluid">
      <h2 style= { { textAlign : 'center' ,color: "rgb(46, 180, 46)" }}  >Payment</h2>
   {/* <!-----------------------------------------Payment Interface Code------------------------------------> */}
    

      <div class="container">
      {/* <!-- <hr> --> */}
        <h4 style= { { textAlign : 'center' ,color: "rgb(46, 180, 46)" }} >Amount to be paid Rs. {this.state.payment} </h4> 
        <div class="row">
          <aside class="col-sm-3">
          </aside>

          <aside class="col-sm-6">
            <article class="card">
              <div class="card-body p-5">
                <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#nav-tab-card"><i class="fa fa-credit-card"></i> Credit Card</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                      
                    <img src={"https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png"} alt="pic" style= { { width : 50 , height: 30 }} /></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#nav-tab-bank"><i class="fa fa-university"></i>  Bank Transfer</a>
                  </li>
                </ul>
  
                <div class="tab-content">
                   <div class="tab-pane fade show active" id="nav-tab-card">
                      <form className='form'>
                        <div class="form-group">
                          <label for="username" style= { { color : 'black' }} >Full name (on the card)</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" name="username" placeholder="Enter Full Name" required="" style= { { backgroundColor : 'white' }}  />
                          </div> 
                        </div> 
  
                        <div class="form-group">
                          <label for="cardNumber" style= { { color : 'black' }}  >Card number</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fa fa-credit-card"></i></span>
                            </div>
                            <input type="text" class="form-control" name="cardNumber" placeholder="Enter Card Number" style= { { backgroundColor : 'white' }}  />
                          </div> 
                        </div> 
  
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-group">
                              <label><span class="hidden-xs" style= { { color : 'black' }} >Expiration</span> </label>
                              <div class="input-group">
                                <input type="number" class="form-control" placeholder="MM" name="" />
                                <input type="number" class="form-control" placeholder="YY" name="" />
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card" style= { { color : 'black' }} >CVV <i class="fa fa-question-circle"></i></label>
                                <input type="number" class="form-control" required="" />
                            </div> 
                          </div>
                        </div> 
                        <button class="subscribe btn btn-primary btn-block" type="button"  onClick={this.confirmPayment} > Confirm  </button>
                      </form>
                    </div> 
  
                    <div class="tab-pane fade" id="nav-tab-paypal">
                      <p>UPI is easiest way to pay online</p>
                      <p>
                        <input type="radio" name="UPI" id="" /> &nbsp; 
                        <img src={"https://india.speakersinstitute.com.au/storyshowing/images/paytm-logo.png"} height="30px" width="50px"  alt="pic" /> <br/> 

                        <input type="radio" name="UPI" id="" /> &nbsp; 
                        <a href='/#'><img src={"https://techstory.in/wp-content/uploads/2018/07/PhonePe.png"} height="30px" width="50px" alt="pic"  /></a> <br/>

                        <input type="radio" name="UPI" id="" /> &nbsp; 
                        <a href='/#'><img src={"https://www.pinclipart.com/picdir/middle/572-5726895_pay-png-clipart-google-pay-transparent-png.png"} height="30px" width="50px" alt="pic"  /></a> <br/>
                      </p>
   
                      <input type="text" name="" id="" placeholder="example@upi"  style= { { backgroundColor : 'white' }}  /><br/><br/>
                      <input type="button" value="Pay" class="btn btn-primary" style= { { width : 100  }}  onClick={this.confirmPayment} />
                    </div>

                    <div class="tab-pane fade" id="nav-tab-bank">
                      <p>Bank accaunt details</p>
                      <dl class="param">
                        <dt>BANK NAME: </dt>
                        <input type="text" class="form-control" name="username" placeholder="Enter Bank Name" required="" style= { { backgroundColor : 'white' }}  />
                      </dl>
                      <dl class="param">
                        <dt>Account number: </dt>
                        <input type="text" class="form-control" name="username" placeholder="Enter Account Name" required=""  style= { { backgroundColor : 'white' }} />
                      </dl>
                      <dl class="param">
                        <dt>IFSC Code: </dt>
                        <input type="text" class="form-control" name="username" placeholder="Enter IFSC Code" required="" style= { { backgroundColor : 'white' }}  />
                      </dl>
                      <button class="subscribe btn btn-primary btn-block" type="button"  onClick={this.confirmPayment} > Confirm &amp; Pay  </button>
                    </div> 
                </div> 
              </div> 
            </article> 
          </aside> 
          <aside class="col-sm-3">
          </aside> 
        </div>
      </div> <br/><br/>
    </div>
  </div>
</> 
)
    }
}
