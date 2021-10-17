import React, { Component } from 'react'

 class Account_page extends Component {
    render() {
        return (
            <React.Fragment className="myaccount_page">



{/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>My Account</strong></li>
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
          <div className="box-authentication">
            <h4>Login</h4>
            <p className="before-login-text">Welcome back! Sign in to your account</p>
            <label for="emmail_login">Email address<span className="required">*</span></label>
            <input id="emmail_login" type="text" className="form-control"/>
            <label for="password_login">Password<span className="required">*</span></label>
            <input id="password_login" type="password" className="form-control"/>
            <p className="forgot-pass"><a href="#">Lost your password?</a></p>
            <button className="button"><i className="icon-lock icons"></i>&nbsp; <span>Login</span></button>
            <label className="inline" for="rememberme">
              <input type="checkbox" value="forever" id="rememberme" name="rememberme"/>
              Remember me </label>
          </div>
          <div className="box-authentication">
            <h4>Register</h4>
            <p>Create your very own account</p>
            <label for="emmail_register">Email address<span className="required">*</span></label>
            <input id="emmail_register" type="text" className="form-control"/>
            <button className="button"><i className="icon-user icons"></i>&nbsp; <span>Register</span></button>
            <div className="register-benefits">
              <h5>Sign up today and you will be able to :</h5>
              <ul>
                <li>Speed your way through checkout</li>
                <li>Track your orders easily</li>
                <li>Keep a record of all your purchases</li>
              </ul>
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

export default Account_page
