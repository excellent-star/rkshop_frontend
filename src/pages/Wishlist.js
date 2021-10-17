import React, { Component } from 'react'

 class Wishlist extends Component {
    render() {
        return (
            <React.Fragment  className="wishlist_page">





{/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>Wishlist</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Breadcrumbs End -->  */}
  {/* <!-- Main Container --> */}
  <section className="main-container col2-right-layout">
    <div className="main container">
      <div className="row">
        <div className="col-main col-sm-9 col-xs-12">
          <div className="my-account">
            <div className="page-title">
              <h2>My Wishlist</h2>
            </div>
            <div className="wishlist-item table-responsive">
              <table className="col-md-12">
                <thead>
                  <tr>
                    <th className="th-delate">Remove</th>
                    <th className="th-product">Images</th>
                    <th className="th-details">Product Name</th>
                    <th className="th-price">Unit Price</th>
                    <th className="th-total th-add-to-cart">Add to Cart </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="th-delate"><a href="#">X</a></td>
                    <td className="th-product"><a href="#"><img src="assets/images/products/product-fashion-3.jpg" alt="cart"/></a></td>
                    <td className="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                    <td className="th-price">$125.00</td>
                    <th className="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td className="th-delate"><a href="#">X</a></td>
                    <td className="th-product"><a href="#"><img src="assets/images/products/product-fashion-13.jpg" alt="cart"/></a></td>
                    <td className="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                    <td className="th-price">$99.00</td>
                    <th className="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td className="th-delate"><a href="#">X</a></td>
                    <td className="th-product"><a href="#"><img src="assets/images/products/product-fashion-2.jpg" alt="cart"/></a></td>
                    <td className="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                    <td className="th-price">$179.89</td>
                    <th className="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                  <tr>
                    <td className="th-delate"><a href="#">X</a></td>
                    <td className="th-product"><a href="#"><img src="assets/images/products/product-fashion-1.jpg" alt="cart"/></a></td>
                    <td className="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                    <td className="th-price">$199.00</td>
                    <th className="td-add-to-cart"><a href="#"> Add to Cart</a></th>
                  </tr>
                </tbody>
              </table>
              <a href="checkout.html" className="all-cart">Add all to cart</a> </div>
          </div>
        </div>
        <aside className="right sidebar col-sm-3 col-xs-12">
          <div className="sidebar-account block">
            <div className="sidebar-bar-title">
              <h3>My Account</h3>
            </div>
            <div className="block-content">
              <ul>
                <li><a>Account Dashboard</a></li>
                <li><a href="#">Account Information</a></li>
                <li><a href="#">Address Book</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Billing Agreements</a></li>
                <li><a href="#">Recurring Profiles</a></li>
                <li><a href="#">My Product Reviews</a></li>
                <li><a href="#">My Tags</a></li>
                <li className="current"><a href="#">My Wishlist</a></li>
                <li><a href="#">My Downloadable</a></li>
                <li className="last"><a href="#">Newsletter Subscriptions</a></li>
              </ul>
            </div>
          </div>
          <div className="compare block">
            <div className="sidebar-bar-title">
              <h3>Compare Products (2)</h3>
            </div>
            <div className="block-content">
              <ol id="compare-items">
                <li className="item"> <a href="#" title="Remove This Item" className="remove-cart"><i className="icon-close"></i></a> <a href="#" className="product-name">Vestibulum porta tristique porttitor.</a> </li>
                <li className="item"> <a href="#" title="Remove This Item" className="remove-cart"><i className="icon-close"></i></a> <a href="#" className="product-name">Lorem ipsum dolor sit amet</a> </li>
              </ol>
              <div className="ajax-checkout">
                <button type="submit" title="Submit" className="button button-compare"> <span> Compare</span></button>
                <button type="submit" title="Submit" className="button button-clear"> <span> Clear All</span></button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
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

export default Wishlist
