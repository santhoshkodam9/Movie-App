import '../styles/carousel.css';
const Carousel = (props) => {

    return ( <> 
    <body>

<div id="demo" class="carousel slide" data-ride="carousel" >
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://c4.wallpaperflare.com/wallpaper/775/18/564/movie-baahubali-2-the-conclusion-elephant-wallpaper-preview.jpg" alt="Los Angeles" width="1100" height="500" />
      <div class="carousel-caption">
        <h3>Bahubali 2</h3>
        <p>Pan India Movie!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="https://dgzmedia.com/wp-content/uploads/2018/08/96-Movie.jpg" alt="Chicago" width="1100" height="500" />
      <div class="carousel-caption">
        <h3>96</h3>
        <p>Feel Good Love Story!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="https://moviegalleri.net/wp-content/uploads/2019/12/Hero-Yash-KGF-Chapter-2-First-Look-Poster-HD.jpg" alt="New York" width="1100" height="500" />
      <div class="carousel-caption">
        <h3>K.G.F</h3>
        <p>Most Awaited Biggie!</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

  
</div>

</body>
   </> 
    )
  }
export default Carousel

