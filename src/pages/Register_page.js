import React, { Component } from 'react'

 class Register_page extends Component {
    render() {
        return (
            <React.Fragment className="register_page">



{/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>Register</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  
  {/* <!-- Main Container --> */}
  <section className="main-container col1-layout">
    <div className="main container">
      <div className="page-content">
        <div className="account-login">
          <div className="col-md-3 col-sm-2"></div>
          <div className="col-md-6 col-sm-8">
            <div className="single-input p-bottom50 clearfix">
              <form action="../../external.html?link=http://htmlmystore.justthemevalley.com/shopkart/my-account.html" method="post">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="check-title">
                      <h4>New Customer</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>First Name:</label>
                    <div className="input-text">
                      <input type="text" name="name" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Last Name:</label>
                    <div className="input-text">
                      <input type="text" name="name" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <label>Address:</label>
                    <div className="input-text">
                      <input type="text" name="address" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <label>City/Town:</label>
                    <div className="input-text">
                      <input type="text" name="city" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Email:</label>
                    <div className="input-text">
                      <input type="text" name="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Phone:</label>
                    <div className="input-text">
                      <input type="text" name="phone" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="billing-checkbox">
                      <input type="checkbox" value="forever" id="rememberme" name="rememberme"/>
                      Sign up for our newsletter! </div>
                    <div className="submit-text">
                      <button className="button"><i className="fa fa-user"></i>&nbsp; <span>Register</span></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Main Container End -->  */}
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

export default Register_page
