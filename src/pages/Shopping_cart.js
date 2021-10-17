import React, { Component } from 'react'

 class Shopping_cart extends Component {
    render() {
        return (
            <React.Fragment  className="shopping_cart_page">


{/* <!-- Main Container --> */}
  <section className="main-container col1-layout">
    <div className="main container">
      <div className="col-main">
        <div className="cart">
          
          <div className="page-content page-order"><div className="page-title">
            <h2>Shopping Cart</h2>
          </div>
            
            
            <div className="order-detail-content">
              <div className="table-responsive">
                <table className="table table-bordered cart_summary">
                  <thead>
                    <tr>
                      <th className="cart_product">Product</th>
                      <th>Description</th>
                      <th>Avail.</th>
                      <th>Unit price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th  className="action"><i className="fa fa-trash-o"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cart_product"><a href="#"><img src="assets/images/products/product-fashion-1.jpg" alt="Product"/></a></td>
                      <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                        <small><a href="#">Color : Red</a></small>
                        <small><a href="#">Size : M</a></small></td>
                      <td className="availability in-stock"><span className="label">In stock</span></td>
                      <td className="price"><span>$49.88</span></td>
                      <td className="qty"><input className="form-control input-sm" type="text" value="1"/></td>
                      <td className="price"><span>$49.88</span></td>
                      <td className="action"><a href="#"><i className="icon-close"></i></a></td>
                    </tr>
                    <tr>
                      <td className="cart_product"><a href="#"><img src="assets/images/products/product-fashion-2.jpg" alt="Product"/></a></td>
                      <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                        <small><a href="#">Color : Green</a></small>
                        <small><a href="#">Size : XL</a></small></td>
                      <td className="availability out-of-stock"><span className="label">No stock</span></td>
                      <td className="price"><span>$00.00</span></td>
                      <td className="qty"><input className="form-control input-sm" type="text" value="0"/></td>
                      <td className="price"><span>00.00</span></td>
                      <td className="action"><a href="#"><i className="icon-close"></i></a></td>
                    </tr>
                    <tr>
                      <td className="cart_product"><a href="#"><img src="assets/images/products/product-fashion-3.jpg" alt="Product"/></a></td>
                      <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                        <small><a href="#">Color : Blue</a></small>
                        <small><a href="#">Size : S</a></small></td>
                      <td className="availability in-stock"><span className="label">In stock</span></td>
                      <td className="price"><span>$99.00</span></td>
                      <td className="qty"><input className="form-control input-sm" type="text" value="2"/></td>
                      <td className="price"><span>$188.00</span></td>
                      <td className="action"><a href="#"><i className="icon-close"></i></a></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" rowspan="2"></td>
                      <td colspan="3">Total products (tax incl.)</td>
                      <td colspan="2">$237.88 </td>
                    </tr>
                    <tr>
                      <td colspan="3"><strong>Total</strong></td>
                      <td colspan="2"><strong>$237.88 </strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="cart_navigation"> <a className="continue-btn" href="#"><i className="fa fa-arrow-left"> </i>&nbsp; Continue shopping</a> <a className="checkout-btn" href="#"><i className="fa fa-check"></i> Proceed to checkout</a> </div>
            </div>
          </div>
        </div>
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

export default Shopping_cart
