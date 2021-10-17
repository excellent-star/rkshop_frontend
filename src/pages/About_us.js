import React, { Component } from 'react'

 class About_us extends Component {
    render() {
        return (
            <React.Fragment   className="about_us_page">






{/* <!-- Breadcrumbs --> */}

  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>About Us</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  {/* <!-- Breadcrumbs End -->  */}
  
  {/* <!-- Main Container --> */}
  
  <div className="main container">
 
     <div className="about-page">
        <div className="col-xs-12 col-sm-6"> 
          
          <h1>Welcome to <span className="text_color">Shopkart</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.<br/>
            <br/>
            Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis, <a href="#">egestas lobortis velit tempor</a> vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.</p>
          <ul>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Suspendisse potenti. Morbi mollis tellus ac sapien.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Cras id dui. Nam ipsum risus, rutrum vitae, vestibulum eu.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Phasellus accumsan cursus velit. Pellentesque egestas.</a></li>
            <li><i className="fa fa-arrow-right"></i>&nbsp; <a href="#">Lorem Ipsum generators on the Internet tend to repeat predefined.</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="single-img-add sidebar-add-slider">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
              
              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner" role="listbox">
                <div className="item active"> <img src="assets/images/about_us_slide1.jpg" alt="slide1"/> </div>
                <div className="item"> <img src="assets/images/about_us_slide2.jpg" alt="slide2"/> </div>
                <div className="item"> <img src="assets/images/about_us_slide3.jpg" alt="slide3"/> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
  {/* <!-- Section: services --> */}
  <section id="service" className="text-center"> 
    
   
    
    <div className="container">
     
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i className="icon-diamond icons"></i> </div>
              <div className="service-desc">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInLeft" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i className="icon-settings icons"></i> </div>
              <div className="service-desc">
                <h4>Programming</h4>
                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i className="icon-camera icons"></i> </div>
              <div className="service-desc">
                <h4>Photography</h4>
                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInRight" data-wow-delay="0.2s">
            <div className="service-box">
              <div className="service-icon"> <i className="icon-magnifier-add icons"></i> </div>
              <div className="service-desc">
                <h4>SEO</h4>
                <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- /Section: services -->  */}
  <div className="our-team"> 

    
   
      
    <div className="container"> <div className="page-header">
        <h2>Our Team</h2>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.2s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="assets/images/team-img01.jpg" alt="HTML template" className="img-responsive" /></div>
                <h5>Joana Doe</h5>
                <p className="subtitle">Art-director</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.5s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="assets/images/team-img02.jpg" alt="HTML template" className="img-responsive" /></div>
                <h5>Josefine</h5>
                <p className="subtitle">Team Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="0.8s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="assets/images/team-img03.jpg" alt="HTML template" className="img-responsive" /></div>
                <h5>Paulo Moreira</h5>
                <p className="subtitle">Senior Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="wow bounceInUp" data-wow-delay="1s">
            <div className="team">
              <div className="inner">
                <div className="avatar"><img src="assets/images/team-img04.jpg" alt="HTML template" className="img-responsive" /></div>
                <h5>Tom Joana</h5>
                <p className="subtitle">Digital Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
   {/* <!-- service section --> */}
  <div className="jtv-service-area">
    <div className="container">
      <div className="row">
        <div className="col col-md-3 col-sm-6 col-xs-12">
          <div className="block-wrapper ship">
            <div className="text-des">
              <div className="icon-wrapper"><i className="fa fa-paper-plane"></i></div>
              <div className="service-wrapper">
                <h3>World-Wide Shipping</h3>
                <p>On order over $99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 col-xs-12 ">
          <div className="block-wrapper return">
            <div className="text-des">
              <div className="icon-wrapper"><i className="fa fa-rotate-right"></i></div>
              <div className="service-wrapper">
                <h3>30 Days Return</h3>
                <p>Moneyback guarantee </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 col-xs-12">
          <div className="block-wrapper support">
            <div className="text-des">
              <div className="icon-wrapper"><i className="fa fa-umbrella"></i></div>
              <div className="service-wrapper">
                <h3>Support 24/7</h3>
                <p>Call us: ( +123 ) 456 789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-3 col-sm-6 col-xs-12">
          <div className="block-wrapper user">
            <div className="text-des">
              <div className="icon-wrapper"><i className="fa fa-tags"></i></div>
              <div className="service-wrapper">
                <h3>Member Discount</h3>
                <p>25% on order over $199</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




                
            </React.Fragment>
        )
    }
}

export default About_us
