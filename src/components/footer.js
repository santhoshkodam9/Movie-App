import '../styles/footer.css';

const Footer = (props) => {

    return ( <> <br/><br/>
 
		<footer class="footer-distributed">
            <div class="row">
				<div class="col-md-2">

				</div>
               <div class="col-md-4">
				<div class="footer-right">

					<a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/"><i class="fa fa-github"></i></a>
	
				</div>
			   </div>
			   <div class="col-md-6">
				<div class="footer-left">

					<p class="footer-links">
						<a class="link-1" href="/mainhome">Home</a>
			
						<a href="/aboutus">About</a>
	
						<a href="/faqs">Faq</a>
						</p>
	
				</div>
			</div>
			</div> <br/>
	
			<p  style= { { marginLeft: 600, color : "grey" }} >Movie Ticket Booking &copy; 2021</p>


		</footer>
   </> 
    )
  }
export default Footer

