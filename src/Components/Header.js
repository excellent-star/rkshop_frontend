import React, { Component } from 'react'
import  {Link} from 'react-router-dom'

 class Header extends Component {
    render() {
        return (
            <React.Fragment>


<header>
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-xs-12"> 
              {/* <!-- Default Welcome Message --> */}
              <div className="welcome-msg hidden-xs hidden-sm">Default welcome msg! </div>
              {/* <!-- Language &amp; Currency wrapper --> */}
              <div className="language-currency-wrapper">
                <div className="inner-cl">
                  <div className="block block-language form-language">
                    <div className="lg-cur"><span><img src="assets/images/flag-default.jpg" alt="French"/><span className="lg-fr">French</span><i className="fa fa-angle-down"></i></span></div>
                    <ul>
                      <li><a className="selected" href="#"><img src="assets/images/flag-english.jpg" alt="english"/><span>English</span></a></li>
                      <li><a href="#"><img src="assets/images/flag-default.jpg" alt="French"/><span>French</span></a></li>
                      <li><a href="#"><img src="assets/images/flag-german.jpg" alt="German"/><span>German</span></a></li>
                      <li><a href="#"><img src="assets/images/flag-brazil.jpg" alt="Brazil"/><span>Brazil</span></a></li>
                      <li><a href="#"><img src="assets/images/flag-chile.jpg" alt="Chile"/><span>Chile</span></a></li>
                      <li><a href="#"><img src="assets/images/flag-spain.jpg" alt="Spain"/><span>Spain</span></a></li>
                    </ul>
                  </div>
                  <div className="block block-currency">
                    <div className="item-cur"><span>USD</span><i className="fa fa-angle-down"></i></div>
                    <ul>
                      <li><a href="#"><span className="cur_icon">€</span>EUR</a></li>
                      <li><a href="#"><span className="cur_icon">¥</span>JPY</a></li>
                      <li><a className="selected" href="#"><span className="cur_icon">$</span>USD</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <!-- top links --> */}
            <div className="headerlinkmenu col-md-8 col-sm-8 col-xs-12"> <span className="phone  hidden-xs hidden-sm">Call Us: +123.456.789</span>
              <ul className="links">
                <li className="hidden-xs"><a title="Help Center" href="#"><span>Buy Theme</span></a></li>

                {/* <li><a title="Credit Cards" href="wishlist.html"><span>Wishlist</span></a></li> */}
                <li><Link title="Credit Cards" to="/wishlist"><span>Wishlist</span></Link></li>

                {/* <li><a title="Store Locator" href="checkout.html"><span>Checkout</span></a></li> */}

                

                <li><Link title="Store Locator" to="/checkout"><span>Checkout</span></Link></li>
                <li>
                  <div className="dropdown"><a className="current-open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span>My Account</span> <i className="fa fa-angle-down"></i></a>
                    <ul className="dropdown-menu" role="menu">
                      {/* <li><a href="account_page.html">Account</a></li> */}
                      <li><Link to="account_page">Account</Link></li>
                      {/* <li><a href="wishlist.html">Wishlist</a></li> */}
                      <li><Link to="/wishlist">Wishlist</Link></li>
                      {/* <li><a href="orders_list.html">Order Tracking</a></li> */}
                      <li><Link to="/orders_list">Order Tracking</Link></li>
                      {/* <li><a href="about_us.html">About us</a></li> */}
                      <li><Link to="about_us">About us</Link></li>
                      <li className="divider"></li>
                      {/* <li><a href="account_page.html">Log In</a></li> */}
                      <li><Link to="/account_page">Log In</Link></li>
                      {/* <li><a href="register_page.html">Register</a></li> */}
                      <li><Link to="/register_page">Register</Link></li>
                    </ul>
                  </div>
                </li>
                {/* <li><a title="Order Status" href="account_page.html"><span>Login</span></a></li> */}

                <li><Link title="Order Status" to="account_page"><span>Login</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header inner --> */}
      <div className="header-inner">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-12 jtv-logo-block">
              <div className="mm-toggle-wrap">
                <div className="mm-toggle"><i className="fa fa-align-justify"></i> </div>
                <span className="mm-label hidden">Categories</span> </div>
              
              {/* <!-- Header Logo --> */}
              <div className="logo"><Link title="e-commerce" to="/"><img alt="Shopkart" title="Shopkart" src="assets/images/logo.png"/></Link> </div>
            </div>
            <div className="col-sm-5 col-md-6 col-xs-12 shipping-block">
              <div className="col-md-6 col-xs-12 col-sm-6 money hidden-sm">
                <div className="shipping-inner"> <i className="fa fa-dollar"></i>
                  <div className="content">
                    <h3>Money Guarantee</h3>
                    <span>30 Day money back guarantee.</span> </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-12 call">
                <div className="shipping-inner"> <i className="fa fa-phone"></i>
                  <div className="content">
                    <h3>Call us  +(123) 456-7896</h3>
                    <span>Monday to Saturday 8am to 6pm.</span> </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3 jtv-top-search"> 
              
              {/* <!-- Search --> */}
              
              <div className="top-search">
                <div id="search">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for product..." name="search" />
                      <button className="btn-search" type="button"><i className="fa fa-search"></i></button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* <!-- End Search -->  */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav>
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-1 mega-container">
          <div className="navleft-container">
            <div className="mega-menu-title hidden-xs">
              <h3><span className="hidden-sm">All Categories</span></h3>
            </div>
            
            {/* <!-- Shop by category --> */}
            <div className="mega-menu-category">
              <ul className="nav">
                <li className="nosub"><a href="/">Home pages </a></li>
                <li><a href="#">Pages</a>
                  <div className="wrap-popup">
                    <div className="popup">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <ul className="nav">
                            <li><a href="shop_grid.html"><span>Grid View Category Page</span></a></li>
                            <li><a href="shop_grid_full_width.html"><span>Grid View Full Width</span></a></li>
                            <li><a href="shop_list.html"><span>List View Category Page</span></a></li>
                            <li><a href="single_product.html"><span>Full Width Product Page</span> </a></li>
                            <li><a href="single_product_sidebar.html"><span>Product Page With Sidebar</span> </a></li>
                            <li><a href="single_product_magnify_zoom.html"><span>Product Page Magnify Zoom</span> </a></li>
                            <li><a href="shopping_cart.html"><span>Shopping Cart</span></a></li>
                            <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                            <li><a href="compare.html"><span>Compare Products</span></a></li>
                            <li><a href="checkout.html"><span>Checkout</span></a></li>
                            <li><a href="sitemap.html"><span>Sitemap</span></a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 has-sep">
                          <ul className="nav">
                            <li><a href="about_us.html"><span>About Us</span></a></li>
                            <li><a href="contact_us.html"><span>Contact Us</span></a></li>
                            <li><a href="orders_list.html"><span>Orders List</span></a></li>
                            <li><a href="order_details.html"><span>Order Details</span></a></li>
                            <li><a href="404error.html"><span>404 Error</span> </a></li>
                            <li><a href="faq.html"><span>FAQ Page</span></a></li>
                            <li><a href="manufacturers.html"><span>Manufacturers</span></a></li>
                            <li><a href="quick_view.html"><span>Quick View</span></a></li>
                            <li><a href="dashboard.html"><span>Account Dashboard</span></a></li>
                            <li><a href="shortcodes.html"><span>Shortcodes</span> </a></li>
                            <li><a href="typography.html"><span>Typography</span></a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 has-sep hidden-sm">
                          <div className="custom-menu-right">
                            <div className="box-banner menu-banner">
                              <div className="add-right"><a href="#"><img src="assets/images/menu-banner-img1.jpg" alt="responsive"/></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#">Fashion</a>
                  <div className="wrap-popup">
                    <div className="popup">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <h3>Women</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html">Evening Tops</a></li>
                            <li><a href="shop_grid.html">Long Sleeved</a></li>
                            <li><a href="shop_grid.html">Short Sleeved</a></li>
                            <li><a href="shop_grid.html">Sleeveless</a></li>
                          </ul>
                          <br/>
                          <h3>Men</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html">Casual Dresses</a></li>
                            <li><a href="shop_grid.html">Party Dresses</a></li>
                            <li><a href="shop_grid.html">Midi Dresses</a></li>
                            <li><a href="shop_grid.html">Strapless Dresses</a></li>
                            <li><a href="shop_grid.html">Day Dresses</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 has-sep">
                          <h3>Kids</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html">Jewellery</a></li>
                            <li><a href="shop_grid.html">Sunglasses</a></li>
                            <li><a href="shop_grid.html">Tanks</a></li>
                            <li><a href="shop_grid.html">Tunics</a></li>
                          </ul>
                          <br/>
                          <h3>Accessories</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html">Bags and Purces</a></li>
                            <li><a href="shop_grid.html">Belts</a></li>
                            <li><a href="shop_grid.html">Scarves</a></li>
                            <li><a href="shop_grid.html">Gloves</a></li>
                            <li><a href="shop_grid.html">Hair Accessories</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 has-sep hidden-sm">
                          <div className="custom-menu-right">
                            <div className="box-banner media">
                              <div className="add-desc">
                                <h3>Computer <br/>
                                  Services </h3>
                                <div className="price-sale">2016</div>
                                <a href="#">Shop Now</a> </div>
                              <div className="add-right"><a href="#"><img src="assets/images/menu-banner-img2.jpg" alt="fashion"/></a></div>
                            </div>
                            <div className="box-banner media">
                              <div className="add-desc">
                                <h3>Save up to</h3>
                                <div className="price-sale">75 <sup>%</sup><sub>off</sub></div>
                                <a href="#">Shopping Now</a> </div>
                              <div className="add-right"><a href="#"><img src="assets/images/menu-banner-img3.jpg" alt=" html store"/></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#">Womens </a>
                  <div className="wrap-popup">
                    <div className="popup">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <h3>Clothing</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html">Tops & Tees</a></li>
                            <li><a href="shop_grid.html">Beach Clothing</a></li>
                            <li><a href="shop_grid.html">Handbags</a></li>
                            <li><a href="shop_grid.html">Western Wear</a></li>
                            <li><a href="shop_grid.html">Blouses</a></li>
                            <li><a href="shop_grid.html">Evening tops</a></li>
                            <li><a href="shop_grid.html">Flat Sandals</a></li>
                            <li><a href="shop_grid.html">Winter</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 has-sep">
                          <h3>Accessories</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html"><span>Jewellery</span></a></li>
                            <li><a href="shop_grid.html"><span>Tops &amp; Tunics</span></a></li>
                            <li><a href="shop_grid.html"><span>Shrugs &amp; Jackets</span> </a></li>
                            <li><a href="shop_grid.html"><span>Apparel</span> </a></li>
                            <li><a href="shop_grid.html"><span>Shoes</span></a></li>
                            <li><a href="shop_grid.html"><span>Swimwear</span></a></li>
                            <li><a href="shop_grid.html"><span>Nighties Camisoles</span></a></li>
                            <li><a href="shop_grid.html"><span>Lingerie Sets</span></a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 has-sep hidden-sm">
                          <div className="custom-menu-right">
                            <div className="box-banner menu-banner">
                              <div className="add-right"><a href="#"><img src="assets/images/menu-banner-img4.jpg" alt="responsive"/></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="shop_grid.html">Mens</a>
                  <div className="wrap-popup column3">
                    <div className="popup">
                      <div className="row">
                        <div className="col-sm-6">
                          <h3>Clothing</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html"> Shirts Formal </a></li>
                            <li><a href="shop_grid.html"> Blazers Suiting </a></li>
                            <li><a href="shop_grid.html"> Tshirts New Casual </a></li>
                            <li><a href="shop_grid.html"> Shirts Suits </a></li>
                          </ul>
                        </div>
                        <div className="col-sm-6 has-sep">
                          <h3>Accessories</h3>
                          <ul className="nav">
                            <li><a href="shop_grid.html"> Track Pants </a></li>
                            <li><a href="shop_grid.html"> Sports Shorts</a></li>
                            <li><a href="shop_grid.html"> Sweatshirts </a></li>
                            <li><a href="shop_grid.html"> Track Suits </a></li>
                          </ul>
                        </div>
                        <div className="col-sm-12"> <a className="ads1" href="#"><img className="img-responsive" src="assets/images/menu-banner-img5.jpg" alt="bootstrap"/></a> </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="shop_grid.html">Children</a>
                  <div className="wrap-popup column1">
                    <div className="popup">
                      <ul className="nav">
                        <li><a href="shop_grid.html"><span>School Bags</span></a></li>
                        <li><a href="shop_grid.html"><span>Health Baby</span></a></li>
                        <li><a href="shop_grid.html"><span>Gift Sets Baby</span></a></li>
                        <li><a href="shop_grid.html"><span>Diapers &amp; WipesUpto</span></a></li>
                        <li><a href="shop_grid.html"><span>Cradles Baby</span></a></li>
                        <li><a href="shop_grid.html"><span>Accessories</span></a></li>
                        <li><a href="shop_grid.html"><span>Rockers Baby Care</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nosub"><a href="#">Accessories</a></li>
                <li><a href="blog.html">Blog</a>
                  <div className="wrap-popup column1">
                    <div className="popup">
                      <ul className="nav">
                        <li><a href="blog_right_sidebar.html"> Blog – Right Sidebar </a></li>
                        <li><a href="blog_left_sidebar.html"> Blog – Left Sidebar </a></li>
                        <li><a href="blog_full_width.html"> Blog – Full-Width </a></li>
                        <li><a href="blog_single_post.html"> Single post </a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nosub"><a href="contact_us.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-10 col-sm-11">
          <div className="mtmegamenu">
            <ul className="hidden-xs">
              <li className="mt-root demo_custom_link_cms">
                <div className="mt-root-item"><Link to="/">
                  <div className="title title_font"><span className="title-text">Home</span></div>
                  </Link></div>
              </li>
              <li className="mt-root">
                <div className="mt-root-item"><a href="#">
                  <div className="title title_font"><span className="title-text">Categories</span></div>
                  </a></div>
                <ul className="menu-items col-xs-12">
                  <li className="menu-item depth-1 menucol-1-3 ">
                    <div className="title title_font"> <a href="#">Fashion</a></div>
                    <ul className="submenu">
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Women</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Men</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Kids</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Clothings</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Shoes</a></div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item depth-1 menucol-1-3 ">
                    <div className="title title_font"> <a href="#">Electronics </a></div>
                    <ul className="submenu">
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Mobiles</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Computers</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Headphones</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Laptops</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Appliances</a></div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item depth-1 menucol-1-3 ">
                    <div className="title title_font"> <a href="#">Beauty & Health</a></div>
                    <ul className="submenu">
                      <li className="menu-item depth-2 category ">
                        <div className="title"> <a href="shop_grid.html">Face Care</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Skin Care</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Minerals</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Body Care</a></div>
                      </li>
                      <li className="menu-item">
                        <div className="title"> <a href="shop_grid.html">Cosmetic</a></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mt-root">
                <div className="mt-root-item"><a href="shop_grid.html">
                  <div className="title title_font"><span className="title-text">New Arrivals</span> </div>
                  </a></div>
              </li>
              <li className="mt-root">
                <div className="mt-root-item"><a href="about_us.html">
                  <div className="title title_font"><span className="title-text">Lookbook</span></div>
                  </a></div>
              </li>
              <li className="mt-root demo_custom_link_cms">
                <div className="mt-root-item"><a href="blog.html">
                  <div className="title title_font"><span className="title-text">Blog</span></div>
                  </a></div>
                <ul className="menu-items col-md-3 col-sm-4 col-xs-12" style={{ top:"28px",left:"402.531px"}} >
                {/* style="top: 28px; left: 402.531px;" */}
                  <li className="menu-item depth-1">
                    <div className="title"> <a href="blog_right_sidebar.html"> Blog – Right Sidebar </a></div>
                  </li>
                  <li className="menu-item depth-1">
                    <div className="title"> <a href="blog_left_sidebar.html"> Blog – Left Sidebar </a></div>
                  </li>
                  <li className="menu-item depth-1">
                    <div className="title"> <a href="blog_full_width.html"> Blog – Full-Width </a></div>
                  </li>
                  <li className="menu-item depth-1">
                    <div className="title"> <a href="single_post.html"> Single post </a></div>
                  </li>
                </ul>
              </li>
              <li className="mt-root">
                <div className="mt-root-item">
                  <div className="title title_font"><span className="title-text">Best Seller</span></div>
                </div>
                <ul className="menu-items col-xs-12">
                  <li className="menu-item depth-1 product menucol-1-3 withimage">
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="pr-img-area"> <Link title="Product title here" to="/single_product">
                            <figure> <img className="first-img" src="assets/images/products/product-fashion-5.jpg" alt="html theme"/> <img className="hover-img" src="assets/images/products/product-fashion-6.jpg" alt="html Template"/></figure>
                            </Link> </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <Link to="/wishlist"> <i className="fa fa-heart"></i> </Link> </div>
                              <div className="mt-button add_to_compare"> <Link to="/compare"> <i className="fa fa-signal"></i> </Link> </div>
                              <div className="mt-button quick-view"> <Link to="/quick_view"> <i className="fa fa-search"></i> </Link> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <Link title="Product title here" to="/single_product">Product title here </Link> </div>
                            <div className="item-content">
                              <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                              <div className="item-price">
                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                              </div>
                              <div className="pro-action">
                                <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item depth-1 product menucol-1-3 withimage">
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                            <figure> <img className="first-img" src="assets/images/products/product-fashion-1.jpg" alt="html Template"/> <img className="hover-img" src="assets/images/products/product-fashion-2.jpg" alt="html Template"/></figure>
                            </a> </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-signal"></i> </a> </div>
                              <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="item-content">
                              <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                              <div className="item-price">
                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                              </div>
                              <div className="pro-action">
                                <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item depth-1 product menucol-1-3 withimage">
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                            <figure> <img className="first-img" src="assets/images/products/product-fashion-3.jpg" alt="html Template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="html Template"/></figure>
                            </a> </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-signal"></i> </a> </div>
                              <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="item-content">
                              <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                              <div className="item-price">
                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                              </div>
                              <div className="pro-action">
                                <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- top cart --> */}
            <div className="top-cart-contain">
              <div className="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="#">
                  <div className="cart-icon"><i className="fa fa-shopping-cart"></i></div>
                  <div className="shoppingcart-inner hidden-xs"><span className="cart-title">Cart</span> <span className="cart-total">4 Items</span></div>
                  </a></div>
                <div>
                  <div className="top-cart-content">
                    <div className="block-subtitle hidden">Recently added items</div>
                    <ul id="cart-sidebar" className="mini-products-list">
                      <li className="item odd"> <Link to="/shopping_cart" title="Product title here" className="product-image"><img src="assets/images/products/product-fashion-7.jpg" alt="html Template" width="65"/></Link>
                        <div className="product-details"> <a href="#" title="Remove This Item" className="remove-cart"><i className="pe-7s-trash"></i></a>
                          <p className="product-name"><Link to="/shopping_cart">Lorem ipsum dolor sit amet Consectetur</Link> </p>
                          <strong>1</strong> x <span className="price">$20.00</span> </div>
                      </li>
                      <li className="item even"> <Link to="/shopping_cart" title="Product title here" className="product-image"><img src="assets/images/products/product-fashion-11.jpg" alt="html Template" width="65"/></Link>
                        <div className="product-details"> <a href="#" title="Remove This Item" className="remove-cart"><i className="pe-7s-trash"></i></a>
                          <p className="product-name"><Link to="/shopping_cart">Consectetur utes anet adipisicing elit</Link> </p>
                          <strong>1</strong> x <span className="price">$230.00</span> </div>
                      </li>
                      <li className="item last odd"> <Link to="/shopping_cart" title="Product title here" className="product-image"><img src="assets/images/products/product-fashion-10.jpg" alt="html Template" width="65"/></Link>
                        <div className="product-details"> <a href="#" title="Remove This Item" className="remove-cart"><i className="pe-7s-trash"></i></a>
                          <p className="product-name"><Link to="/shopping_cart">Sed do eiusmod tempor incidist</Link> </p>
                          <strong>2</strong> x <span className="price">$420.00</span> </div>
                      </li>
                    </ul>
                    <div className="top-subtotal">Subtotal: <span className="price">$520.00</span></div>
                    <div className="actions">
                      <Link className="btn-checkout" type="button" to="/checkout"><i className="fa fa-check"></i><span>Checkout</span></Link>
                      <Link className="view-cart" type="button" to="/shopping_cart"><i className="fa fa-shopping-cart"></i><span>View Cart</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
                
            </React.Fragment>
        )
    }
}

export default Header
