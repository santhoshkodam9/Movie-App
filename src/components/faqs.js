import { Link } from "react-router-dom"
import '../styles/faqs.css';
const Faqs = (props) => {
    return ( <> <br/><br/>
              <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="sidebar"><br/><br/><br/><br/><br/><br/><br/><br/>
                          <Link to='/viewprofile'><a href='/#'><i id= "icons"class="fa fa-user"aria-hidden="true"></i> View Profile</a></Link>
                          <Link to='/homeuser'><a href='/#'><i id= "icons"class="fa fa-fw fa-home"></i> Home</a></Link>
                          <Link to="/bookmovie"><a href='/#'><i id = "icons" class="fas fa-ticket"></i> Book Movie</a></Link>
                          <Link to='/bookinghistory'><a href='/#'> <i id= "icons"class="fa fa-history"></i>  Booking History</a></Link>
                          <Link to="/faqs"><a href='/#'><i class="fa fa-fw fa-envelope" style= { { color : "black" }} ></i> FAQ'S</a></Link>
                        </div>  
                    </div>
                </div>
                <div id="faqs" class="container">
                  <h2 style= { {  marginLeft : 160, color : "rgb(82, 146, 189)" }}>FREQUENTLY ASKED QUESTIONS (faqs)</h2>
                </div>
                <div class="container py-3" >
                  <div class="row">
                    <div class="col-10 mx-auto">
                      <div class="accordion" id="faqExample">
                        <div class="card" style= { { backgroundColor : "rgb(185, 180, 180)" }} >
                          <div class="card-header p-2" id="headingOne">
                            <h5 class="mb-0">
                              <button  style= { {  color : "rgb(121, 10, 10)" }} class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Q. Item lost at the venue Point?
                              </button>
                            </h5>
                          </div>
                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                            <div class="card-body">
                              <b>Answer:</b> Nothing to worry. We check and let u know 
                              It would be quickest if you'd check at the venues 'Lost and Found' first. Alternatively, you may hit us up here with the following details:<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Your booking ID<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Time and location of the article being lost.<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Details and descriptions of the article lost.<br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Additional details that would help to locate the lost item like, make, model, color, item description, etc.<br/><br/>
                              Email us the details and let us see if it's been located with the venue. 
                              We doesn't guarntee u that we will replace that article.We will try our level best
                            </div>
                          </div>
                        </div>

                        <div class="card" style= { { backgroundColor : "rgb(185, 180, 180)" }} >
                          <div class="card-header p-2" id="headingTwo">
                            <h5 class="mb-0">
                              <button style= { { color : "rgb(121, 10, 10)" }}  class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Q.  Can I carry any eatables along with me at the cinema?
                              </button>
                            </h5>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                            <div class="card-body">
                              <b>Answer:</b> We would advise our customers not to carry any edibles inside the cinema hall as the cinemas does not allow.                        
                            </div>
                          </div>
                        </div>
                          
                        <div class="card" style= { {  backgroundColor : "rgb(185, 180, 180)" }} >
                          <div class="card-header p-2" id="headingThree">
                            <h5 class="mb-0">
                              <button style= { {  color : "rgb(121, 10, 10)" }} class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Q. Did not get my tickets at the cinema?
                              </button>
                            </h5>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                            <div class="card-body">
                              <b>Answer:</b> I was denied entry at the movie stating 'my tickets are invalid'? 
                                Your website believes in providing a hassle-free experience.
                            </div>
                          </div>
                        </div>
                
                          <div class="card" style= { {  backgroundColor : "rgb(185, 180, 180)" }} >
                            <div class="card-header p-2" id="headingThree">
                              <h5 class="mb-0">
                                <button style= { {  color : "rgb(121, 10, 10)" }} class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                  Q. Why am I being asked for my Mobile number?
                                </button>
                              </h5>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                              <div class="card-body">
                                <b>Answer:</b> Well, the security of your transaction is the foremost reason. The purpose is to help you with the booking confirmation, which will be directly sent on your registered contact details via SMS/WhatsApp/Email. It additionally help you resend the confirmation in case you've misplaced it.                        </div>
                              </div>
                            </div>
                            <div class="card" style= { {  backgroundColor : "rgb(185, 180, 180)" }} >
                              <div class="card-header p-2" id="headingThree">
                                <h5 class="mb-0">
                                  <button style= { {  color : "rgb(121, 10, 10)" }} class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                    Q. How does Email Preference work? How do I select my email preference? 
                                  </button>
                                </h5>
                              </div>
                              <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                                <div class="card-body">
                                  <b>Answer:</b> It's quite easy. Choose your frequently used mail and provide that email there. any of google, yahoo, etc.,
                                </div>
                              </div>
                            </div>
                            <div class="card" style= { {  backgroundColor : "rgb(185, 180, 180)" }} >
                              <div class="card-header p-2" id="headingThree">
                                <h5 class="mb-0">
                                  <button style= { { color : "rgb(121, 10, 10)" }} class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                    Q. How do I save my booking history?
                                  </button>
                                </h5>
                              </div>
                              <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                                <div class="card-body">
                                  <b>Answer:</b> This is absolutely effortless. Post a successful transaction, the booking details will automatically reflect under the 'Booking History' section on the app/website, once you log in via the same contact details which were used for the booking.
                                </div>
                              </div>
                            </div>
                        </div> <br/><br/><br/>
        </div> 
    </div> 
  </div> 
              </div>
        </>
    )
  }
export default Faqs

