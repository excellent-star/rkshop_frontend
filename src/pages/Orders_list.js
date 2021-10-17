import React, { Component } from 'react'

 class Orders_list extends Component {
    render() {
        return (
            <React.Fragment className="orders_list_page">



{/* <!-- Breadcrumbs --> */}
  
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            <li className="home"> <a title="Go to Home Page" href="index.html">Home</a><span>&raquo;</span></li>
            <li><strong>Orders List</strong></li>
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
              <h2>Orders List</h2>
            </div>
            <div className="orders-list table-responsive"> 
              {/* <!--orders list table--> */}
              <table className="table table-bordered cart_summary table-striped">
                <thead>
                  <tr> 
                    {/* <!--titles for td--> */}
                    <th>Order Number</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#12345</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-02-13</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$79.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#67895</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-03-25</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$99.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#54321</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-04-10</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$89.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#12345</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-02-13</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$79.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#67895</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-03-25</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$99.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#54321</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-04-10</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$89.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#12345</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-02-13</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$79.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#67895</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-03-25</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$99.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#54321</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-04-10</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$89.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#12345</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-02-13</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$79.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#67895</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-03-25</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$99.00</span></td>
                  </tr>
                  <tr> 
                    {/* <!--order number--> */}
                    <td data-title="Order Number"><a href="order_details.html" className="order-number">#54321</a></td>
                    {/* <!--order date--> */}
                    <td data-title="Order Date">2017-04-10</td>
                    {/* <!--order status--> */}
                    <td data-title="Order Status">Confirmed by Shopkart</td>
                    {/* <!--quanity--> */}
                    <td data-title="Total"><span className="order-total">$89.00</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              <div class="service-wrapper">
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

export default Orders_list
