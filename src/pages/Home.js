import React, { Component } from 'react'



 class Home extends Component {
  render() {
    return (
      <React.Fragment className="cms-index-index cms-home-page">




{/* <!--[if lt IE 8]>
<p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->  */}

{/* <!-- mobile menu --> */}
<div id="mobile-menu">
  <ul>
    <li><a href="index.html" className="home1">Home Pages</a> </li>
    <li><a href="#">Pages</a>
      <ul>
        <li><a href="#">Shop Pages </a>
          <ul>
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
        </li>
        <li><a href="#">Static Pages </a>
          <ul>
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
        </li>
        <li><a href="#"> Blog Pages </a>
          <ul>
            <li><a href="blog_right_sidebar.html">Blog – Right sidebar </a></li>
            <li><a href="blog_left_sidebar.html">Blog – Left sidebar </a></li>
            <li><a href="blog_full_width.html">Blog - Full width</a></li>
            <li><a href="blog_single_post.html">Single post </a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="blog.html">Blog</a>
      <ul>
        <li><a href="blog_right_sidebar.html"> Blog – Right Sidebar </a></li>
        <li><a href="blog_left_sidebar.html"> Blog – Left Sidebar </a></li>
        <li><a href="blog_full_width.html"> Blog – Full-Width </a></li>
        <li><a href="blog_single_post.html"> Single post </a></li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Fashion</a>
      <ul>
        <li><a href="#" className="">Accessories</a>
          <ul>
            <li><a href="shop_grid.html">Cocktail</a></li>
            <li><a href="shop_grid.html">Day</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Sundresses</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul>
            <li><a href="shop_grid.html">Accessories</a></li>
            <li><a href="shop_grid.html">Hats and Gloves</a></li>
            <li><a href="shop_grid.html">Lifestyle</a></li>
            <li><a href="shop_grid.html">Bras</a></li>
          </ul>
        </li>
        <li><a href="#">Shoes</a>
          <ul>
            <li><a href="shop_grid.html">Flat Shoes</a></li>
            <li><a href="shop_grid.html">Flat Sandals</a></li>
            <li><a href="shop_grid.html">Boots</a></li>
            <li><a href="shop_grid.html">Heels</a></li>
          </ul>
        </li>
        <li><a href="#">Jwellery</a>
          <ul>
            <li><a href="shop_grid.html">Bracelets</a></li>
            <li><a href="shop_grid.html">Necklaces &amp; Pendent</a></li>
            <li><a href="shop_grid.html">Pendants</a></li>
            <li><a href="shop_grid.html">Pins &amp; Brooches</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul>
            <li><a href="shop_grid.html">Casual Dresses</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Designer</a></li>
            <li><a href="shop_grid.html">Party</a></li>
          </ul>
        </li>
        <li><a href="#">Swimwear</a>
          <ul>
            <li><a href="shop_grid.html">Swimsuits</a></li>
            <li><a href="shop_grid.html">Beach Clothing</a></li>
            <li><a href="shop_grid.html">Clothing</a></li>
            <li><a href="shop_grid.html">Bikinis</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Women</a>
      <ul>
        <li><a href="#" className="">Clothing</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Coats &amp; Jackets</a></li>
            <li><a href="shop_grid.html">Raincoats</a></li>
            <li><a href="shop_grid.html">Blazers</a></li>
            <li><a href="shop_grid.html">Jackets</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Casual Dresses</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Designer</a></li>
            <li><a href="shop_grid.html">Party</a></li>
          </ul>
        </li>
        <li><a href="#" className="">Shoes</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Sport Shoes</a></li>
            <li><a href="shop_grid.html">Casual Shoes</a></li>
            <li><a href="shop_grid.html">Leather Shoes</a></li>
            <li><a href="shop_grid.html">canvas shoes</a></li>
          </ul>
        </li>
        <li><a href="#">Jackets</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Coats</a></li>
            <li><a href="shop_grid.html">Formal Jackets</a></li>
            <li><a href="shop_grid.html">Leather Jackets</a></li>
            <li><a href="shop_grid.html">Blazers</a></li>
          </ul>
        </li>
        <li><a href="#">Accesories</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Backpacks</a></li>
            <li><a href="shop_grid.html">Wallets</a></li>
            <li><a href="shop_grid.html">Laptops Bags</a></li>
            <li><a href="shop_grid.html">Belts</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Men</a>
      <ul>
        <li><a href="shop_grid.html">Mobiles</a>
          <ul>
            <li><a href="shop_grid.html">iPhone</a></li>
            <li><a href="shop_grid.html">Samsung</a></li>
            <li><a href="shop_grid.html">Nokia</a></li>
            <li><a href="shop_grid.html">Sony</a></li>
          </ul>
        </li>
        <li><a href="shop_grid.html" className="">Music &amp; Audio</a>
          <ul>
            <li><a href="shop_grid.html">Audio</a></li>
            <li><a href="shop_grid.html">Cameras</a></li>
            <li><a href="shop_grid.html">Appling</a></li>
            <li><a href="shop_grid.html">Car Music</a></li>
          </ul>
        </li>
        <li><a href="shop_grid.html">Accessories</a>
          <ul>
            <li><a href="shop_grid.html">Home &amp; Office</a></li>
            <li><a href="shop_grid.html">TV &amp; Home Theater</a></li>
            <li><a href="shop_grid.html">Phones &amp; Radio</a></li>
            <li><a href="shop_grid.html">All Electronics</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
{/* <!-- end mobile menu --> */}
<div id="page"> 
  
  {/* <!-- Header --> */}
  
  {/* <!-- end header --> */}
  
  
  
  {/* <!-- Slideshow  --> */}
  <div className="main-slideshow">
    <div id="rev_slider_116_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="layer-animations" style={{margin:"0px auto",backgroundColor:"transparent",padding:"0px",marginTop:"0px",marginBottom:"0px"}}> 
    {/* style="margin:0px auto;background-color:transparent;padding:0px;margin-top:0px;margin-bottom:0px;" */}
      {/* <!-- START REVOLUTION SLIDER 5.0.7 auto mode --> */}
      <div id="rev_slider_116_1" className="rev_slider fullwidthabanner" style={{display:"none"}} data-version="5.0.7">
      {/* style="display:none;" */}
        <ul>
          <li data-index="Electronics" data-transition="parallaxhorizontal" data-slotamount="default"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-thumb="images/slider/t-slider-bg2.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Electronics" data-description=""> 
            {/* <!-- MAIN IMAGE -->  */}
            <img src="assets/images/slider/slider-bg2.jpg"  alt="html Template"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/> 
            {/* <!-- LAYER NR. 1 -->  */}
            <i className="tp-caption layer1 tp-resizeme" 
									id="slide1-layer1" 
									data-x="center" data-hoffset="" 
									data-y="300" data-voffset="-150" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" 
									data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="1000" 
									data-splitin="chars" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 
									style={{ fontSize:"24px", letterSpacing:"1px", textTransform:"uppercase", fontStyle:"normal", color:"#f8f8f8" }}>Free shipping on Fashion</i> 
                  {/* style="font-size:24px; letter-spacing:1px; text-transform:uppercase; font-style:normal; color:#f8f8f8;" */}
            {/* <!-- LAYER NR. 2 --> */}
            <div className="tp-caption layer2 tp-resizeme" 
									id="slide1-layer2" 
									data-x="center" data-hoffset="" 
									data-y="330" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;tO:0% 50%;"
									data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
									data-start="2000" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 
									style={{fontSize:"55px",letterSpacing:"1px", textTransform:"uppercase"}}>Hot Summer Collection</div>
                  {/* style="font-size:55px;letter-spacing:1px; text-transform:uppercase;" */}
            {/* <!-- LAYER NR. 3 -->  */}
            <i className="tp-caption layer3 tp-resizeme" 
									id="slide1-layer3" 
									data-x="center" data-hoffset="" 
									data-y="420" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3000" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"20px", letterSpacing:"1px",padding:"5px 20px", textTransform:"uppercase", fontStyle:"normal", fontWeight:"500", color:"#fff"}}>Every style & how to wear them</i> 
                  {/* style="font-size:20px; letter-spacing:1px;padding:5px 20px; text-transform:uppercase; font-style:normal; font-weight:500; color:#fff;" */}
            {/* <!-- LAYER NR. 4 -->  */}
            <a href="#" className="tp-caption layer4 tp-resizeme rs-parallaxlevel-9" 
									id="slide1-layer4" 
									data-x="center" data-hoffset="" 
									data-y="500" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3300" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"15px", fontWeight:"600", padding:"10px 25px", textTransform:"uppercase"}}>Shop Now</a> </li>
                  {/* style="font-size:15px; font-weight:600; padding:10px 25px; text-transform:uppercase;" */}
          <li data-index="Fashion" data-transition="parallaxhorizontal" data-slotamount="default"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-thumb="images/slider/t-slider-bg1.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Fashion" data-description=""> 
            {/* <!-- MAIN IMAGE -->  */}
            <img src="assets/images/slider/slider-bg1.jpg"  alt="html Template"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/> 
            {/* <!-- LAYER NR. 1 -->  */}
            <i className="tp-caption layer1 tp-resizeme" 
									id="slide3-layer1" 
									 data-x="100" data-hoffset="" 
									 data-y="250" data-voffset="-70" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;tO:0% 50%;" 
									 data-transform_in="x:-50px;rY:-90deg;opacity:0;s:2000;e:Back.easeOut;" 
									 data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
									data-start="2000" 
									data-splitin="lines" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 
									style={{fontSize:"24px", letterSpacing:"1px",  textTransform:"uppercase", color:"#f8f8f8", fontStyle:"normal"}}>Special offer sale up to 50% off</i> 
                  {/* style="font-size:24px; letter-spacing:1px;  text-transform:uppercase; color:#f8f8f8; font-style:normal;" */}
            {/* <!-- LAYER NR. 2 --> */}
            <div className="tp-caption layer2 tp-resizeme" 
									id="slide3-layer2" 
									data-x="0" data-hoffset="" 
									data-y="280" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;tO:0% 50%;"
									data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" 
									data-start="2000" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 
									style={{fontSize:"55px",letterSpacing:"1px", textTransform:"uppercase", color:"#fff"}}>Fresh new collection</div>
                  {/* style="font-size:55px;letter-spacing:1px; text-transform:uppercase; color:#fff;" */}
            {/* <!-- LAYER NR. 3 -->  */}
            <i className="tp-caption layer7 tp-resizeme" 
									id="slide3-layer3" 
									data-x="100" data-hoffset="" 
									data-y="360" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3000" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"20px", letterSpacing:"1px",padding:"5px 20px", fontStyle:"normal", fontWeight:"600",  textTransform:"uppercase", color:"#f5f5f5"}}>Uncover the summer 2017 on 15th August</i> 
                  {/* style="font-size:20px; letter-spacing:1px;padding:5px 20px; font-style:normal; font-weight:600;  text-transform:uppercase; color:#f5f5f5;" */}
            {/* <!-- LAYER NR. 4 -->  */}
            <a href="#" className="tp-caption layer4 tp-resizeme rs-parallaxlevel-9" 
									id="slide3-layer4" 
									data-x="250" data-hoffset="" 
									data-y="410" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3300" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"15px", fontWeight:"500", padding:"10px 25px", textTransform:"uppercase"}}>Special offer</a> </li>
                  {/* style="font-size:15px; font-weight:500; padding:10px 25px; text-transform:uppercase;" */}
          <li data-index="Men" data-transition="parallaxhorizontal" data-slotamount="default"  data-easein="default" data-easeout="default" data-masterspeed="default"  data-thumb="images/slider/t-slider-bg4.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Men" data-description=""> 
            {/* <!-- MAIN IMAGE -->  */}
            <img src="assets/images/slider/slider-bg4.jpg"  alt="html Template"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
            <div className="tp-caption layer2 tp-resizeme" 
									id="slide6-layer2" 
									data-x="0" data-hoffset="" 
									data-y="270" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;" 
									 data-transform_in="x:{-50,50};y:{-5,50};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
									 data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
									data-start="3490" 
									data-splitin="chars" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 									style={{fontSize:"50px",letterSpacing:0, color:"#ff3366", textTransform:"uppercase"}}>Fashion Discovery</div>
                  {/* style="font-size:50px;letter-spacing:0; color:#ff3366; text-transform:uppercase;" */}
            {/* <!-- LAYER NR. 3 --> */}
            <div className="tp-caption layer7 tp-resizeme" 
									id="slide6-layer3" 
									 data-x="0" data-hoffset="" 
									 data-y="340" data-voffset="-70" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									 data-transform_in="x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" 
									 data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
									 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="2000" 
									data-splitin="chars" 
									data-splitout="none" 
									data-responsive_offset="on" 
									data-elementdelay="0.05" 
									style={{fontSize:"24px", letterSpacing:"2px", textTransform:"uppercase", color:"#333" }}>New Fall Clothes for Women</div>
                  {/* style="font-size:24px; letter-spacing:2px; text-transform:uppercase; color:#333;" */}
            {/* <!-- LAYER NR. 4 -->  */}
            <a href="#" className="tp-caption layer9 tp-resizeme rs-parallaxlevel-9" 
									id="slide6-layer4" 
									data-x="0" data-hoffset="" 
									data-y="400" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3300" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"15px", fontWeight:600, padding:"10px 25px", textTransform:"uppercase"}}>Click Here</a> 

{/* style="font-size:15px; font-weight:600; padding:10px 25px; text-transform:uppercase;" */}
            
            {/* <!-- LAYER NR. 5 -->  */}
            <a href="#" className="tp-caption layer4 tp-resizeme rs-parallaxlevel-9" 
									id="slide6-layer5" 
									data-x="160" data-hoffset="" 
									data-y="400" data-voffset="" 
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle="o:1;"
									data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
									data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" 
									data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
									data-start="3600" 
									data-splitin="none" 
									data-splitout="none" 
									data-responsive_offset="on" 
									style={{fontSize:"15px", fontWeight:600, padding:"10px 25px", textTransform:"uppercase"}}>View Colletion</a> </li>
                  {/* style="font-size:15px; font-weight:600; padding:10px 25px; text-transform:uppercase;" */}
        </ul>
      </div>
    </div>
  </div>
  
  {/* <!-- BANNER-AREA-START --> */}
  <section className="banner-area">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div className="banner-block"> <a href="#"> <img src="assets/images/banner-collection.jpg" alt="banner collection"/> </a>
            <div className="text-des-container pad-zero">
              <div className="text-des">
                <h2>spring collection 2017</h2>
                <p>A Spring Preview Surprise 45% off All products.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <div className="banner-block"> <a href="#"> <img src="assets/images/banner-sunglasses.jpg" alt="banner sunglasses"/> </a>
                <div className="text-des-container">
                  <div className="text-des">
                    <h2>Aviator Sunglasses</h2>
                    <p>Fall fashion 35% off sunglass hut!</p>
                  </div>
                </div>
              </div>
              <div className="banner-block"> <a href="#"> <img src="assets/images/banner-jeans.jpg" alt="banner jeans"/> </a>
                <div className="text-des-container pad-zero">
                  <div className="text-des">
                    <h2>Classic Skinny</h2>
                    <p>The New Styles Jeans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <div className="banner-block"> <a href="#"> <img src="assets/images/banner-kids.jpg" alt="banner kids"/> </a>
                <div className="text-des-container">
                  <div className="text-des">
                    <h2>FASHION KIDSWEAR</h2>
                    <p>For the littlest people</p>
                  </div>
                </div>
              </div>
              <div className="banner-block"> <a href="#"> <img src="assets/images/banner-women.jpg" alt="banner women"/> </a>
                <div className="text-des-container">
                  <div className="text-des">
                    <h2>New Releases</h2>
                    <p>Modern footwear designs for women!</p>
                  </div>
                </div>
              </div>
              <div className="banner-block"> <a href="#"> <img src="assets/images/banner-beauty.jpg" alt="banner beauty"/> </a>
                <div className="text-des-container">
                  <div className="text-des">
                    <h2>Luxie Beauty</h2>
                    <p>The Latest looks at your face</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-lg-4 col-md-4">
          <div className="banner-block"> <a href="#"> <img src="assets/images/banner-arrival.jpg" alt="banner arrival"/> </a>
            <div className="text-des-container">
              <div className="text-des">
                <h2>New Arrival</h2>
                <p>Sale upto 50% off on selected items</p>
              </div>
            </div>
          </div>
          <div className="banner-block"> <a href="#"> <img src="assets/images/banner-watch.jpg" alt="banner watch"/> </a>
            <div className="text-des-container">
              <div className="text-des">
                <h2>Mens Watch</h2>
                <p>Super Design with Best Price</p>
              </div>
            </div>
          </div>
          <div className="banner-block"> <a href="#"> <img src="assets/images/banner-look.jpg" alt="banner look"/> </a>
            <div className="text-des-container">
              <div className="text-des">
                <h2>Romantic Spring Look</h2>
                <p>See it, like it, shop it!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- BANNER-AREA-END -->  */}
  
  {/* <!-- All products--> */}
  
  <div className="container">
    <div className="home-tab">
      <div className="tab-title text-center">
        <h2>Top Trending</h2>
      </div>
      <div className="title-divider"><span></span></div>
      <p className="sub-title text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul className="nav home-nav-tabs home-product-tabs">
        <li className="active"><a href="#all" data-toggle="tab" aria-expanded="false">All</a></li>
        <li><a href="#women" data-toggle="tab" aria-expanded="false">Women</a></li>
        <li><a href="#men" data-toggle="tab" aria-expanded="false">Men</a></li>
        <li><a href="#kids" data-toggle="tab" aria-expanded="false">Kids</a></li>
        <li><a href="#accessories" data-toggle="tab" aria-expanded="false">Accessories</a></li>
        <li><a href="#lookbook" data-toggle="tab" aria-expanded="false">Lookbook</a></li>
      </ul>
      <div id="productTabContent" className="tab-content">
        <div className="tab-pane active in" id="all">
          <div className="featured-pro">
            <div className="slider-items-products">
              <div id="all-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-new-label new-left">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-1.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-2.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-3.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-5.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-6.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="icon-sale-label sale-left">Sale</div>
                      <div className="icon-new-label new-right">New</div>
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-7.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-8.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-new-label new-left">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-9.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-10.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-11.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-12.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="women">
          <div className="top-sellers-pro">
            <div className="slider-items-products">
              <div id="women-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4 ">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-13.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-14.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-15.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-16.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-17.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-18.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-19.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-20.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-21.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-22.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-23.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-24.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="men">
          <div className="top-sellers-pro">
            <div className="slider-items-products">
              <div id="men-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4 ">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-25.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-26.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-27.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-28.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-29.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-30.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-31.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-32.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="kids">
          <div className="top-sellers-pro">
            <div className="slider-items-products">
              <div id="kids-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4 ">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-33.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-34.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-35.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-2.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-3.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-5.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-6.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="accessories">
          <div className="top-sellers-pro">
            <div className="slider-items-products">
              <div id="accessories-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4 ">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-33.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-35.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-9.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-29.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-2.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-27.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-25.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-7.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-23.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-6.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="lookbook">
          <div className="top-sellers-pro">
            <div className="slider-items-products">
              <div id="lookbook-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col4 ">
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="icon-sale-label sale-left">Sale</div>
                        <div className="icon-new-label new-right">New</div>
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-15.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-3.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search"></i> </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                          <div className="item-content">
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-17.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-4.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-11.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-5.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        <div className="pr-img-area"> <a title="Product title here" href="single_product.html">
                          <figure> <img className="first-img" src="assets/images/products/product-fashion-21.jpg" alt="HTML template"/> <img className="hover-img" src="assets/images/products/product-fashion-6.jpg" alt="HTML template"/></figure>
                          </a> </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="inner-box">
    <div className="container">
      <div className="row"> 
        {/* <!-- Banner --> */}
        <div className="col-md-3 top-banner hidden-sm">
          <div className="jtv-banner3">
            <div className="jtv-banner3-inner"><a href="#"><img src="assets/images/sub1.jpg" alt="HTML template"/></a>
              <div className="hover_content">
                <div className="hover_data">
                  <div className="title"> Beauty Spring </div>
                  <div className="desc-text">Season On Sale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Best Sale --> */}
        <div className="col-sm-12 col-md-9 jtv-best-sale">
          <div className="jtv-best-sale-list">
            <div className="wpb_wrapper">
              <div className="best-title text-left">
                <h2>New Arrival</h2>
              </div>
              <p className="sub-title text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="slider-items-products">
              <div id="jtv-best-sale-slider" className="product-flexslider">
                <div className="slider-items">
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-19.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-14.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-35.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-25.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-15.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-17.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-19.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-8.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-2.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-3.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-3.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-4.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="daily-deal-section daily-deal-parallax">
    <div className="container">
      <div className="row"> 
        
        {/* <!-- daily deal section--> */}
        <div className="col-md-12">
          <div className="daily-deal">
            <h3 className="deal-title">Deals of the Week</h3>
            <div className="title-divider"><span></span></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa eget ante tincidunt vestibulum. Aenean vel metus magna. Mauris nec. </p>
            <div className="box-timer">
              <div className="time" data-countdown="countdown" data-date="09-30-2021-10-20-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="inner-box featured-products">
    <div className="container">
      <div className="row"> 
        
        {/* <!-- Best Sale --> */}
        <div className="col-sm-12 col-md-9 jtv-best-sale">
          <div className="jtv-best-sale-list">
            <div className="wpb_wrapper">
              <div className="best-title text-right">
                <h2>Featured Products</h2>
              </div>
              <p className="sub-title text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="slider-items-products">
              <div id="featured-products-slider" className="product-flexslider">
                <div className="slider-items">
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-23.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-11.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-19.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-17.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-14.jpg" /> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-26.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-12.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-27.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="products-grid">
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-35.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-32.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-30.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box"> <span className="regular-price"> <span className="price">$99.99</span> </span> </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="item-inner">
                        <div className="item-img"> <a className="product-image" title="Retis lapen casen" href="product_detail.html"> <img alt="HTML template" src="assets/images/products/product-fashion-22.jpg"/> </a> </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Product title here" href="single_product.html">Product title here </a> </div>
                            <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                            <div className="item-price">
                              <div className="price-box">
                                <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $399.00 </span> </p>
                                <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $499.00 </span> </p>
                              </div>
                            </div>
                            <div className="pro-action">
                              <button type="button" className="add-to-cart"> <i className="fa fa-shopping-basket"></i><span> Add to Cart</span></button>
                            </div>
                            <div className="pr-button-hover">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart-o"></i> </a> </div>
                              <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-link"></i> </a> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banner --> */}
        <div className="col-md-3 top-banner hidden-sm">
          <div className="jtv-banner3">
            <div className="jtv-banner3-inner"><a href="#"><img src="assets/images/sub1a.jpg" alt="HTML template"/></a>
              <div className="hover_content">
                <div className="hover_data">
                  <div className="title"> Mens Fashion </div>
                  <div className="desc-text">New Collection 17 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* <!-- our clients Slider --> */}
  
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-xs-12">
        <div className="our-clients">
          <div className="slider-items-products">
            <div id="our-clients-slider" className="product-flexslider hidden-buttons">
              <div className="slider-items slider-width-col6">
                <div className="item"><a href="#"><img src="assets/images/brand2.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand3.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand1.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand4.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand5.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand6.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand7.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand8.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand9.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand10.png" alt="Image"/></a> </div>
                <div className="item"><a href="#"><img src="assets/images/brand11.png" alt="Image"/></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Bottom section --> */}
  <div className="bottom-section">
    <div className="container">
      <div className="row"> 
        {/* <!-- Blog --> */}
        <div className="col-sm-12 col-md-12 col-xs-12 news">
          <div id="latest-news">
            <div className="page-header text-center">
              <h2>From The Blog</h2>
            </div>
            <div className="title-divider"><span></span></div>
            <p className="sub-title text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="slider-items-products">
              <div id="latest-news-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col6"> 
                  
                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="blog_single_post.html"> <img className="primary-img" src="assets/images/blog-img1.jpg" alt="HTML template"/></a> <span className="moretag"></span> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="blog_single_post.html">Sed do eiusmod sit amet</a></h2>
                        <span className="jtv-entry-meta"><span className="date">28 January, 2017</span> <i className="fa fa-heart-o"></i> 149 likes <span className="blog-comments"><i className="fa fa-comments-o"></i> 80 comments</span></span>
                        <p>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
                        <div className="blog-action"> <a className="read-more" href="blog_single_post.html">read more <i className="fa fa-angle-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Item --> */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="blog_single_post.html"><img className="primary-img" src="assets/images/blog-img2.jpg" alt="HTML template"/></a> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="blog_single_post.html">Lorem ipsum dolor sit amet</a></h2>
                        <span className="jtv-entry-meta"><span className="date">14 February, 2017</span> <i className="fa fa-heart-o"></i> 50 likes <span className="blog-comments"><i className="fa fa-comments-o"></i> 99 comments</span></span>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis. Dolor sit amet, Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                        <div className="blog-action"> <a className="read-more" href="blog_single_post.html">read more <i className="fa fa-angle-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="blog_single_post.html"><img className="primary-img" src="assets/images/blog-img3.jpg" alt="HTML template"/></a> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="blog_single_post.html">Integer scelerisque diam vitae</a></h2>
                        <span className="jtv-entry-meta"><span className="date">5 March, 2017</span> <i className="fa fa-heart-o"></i> 29 likes <span className="blog-comments"><i className="fa fa-comments-o"></i> 44 comments</span></span>
                        <p>Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis.  Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                        <div className="blog-action"> <a className="read-more" href="blog_single_post.html">read more <i className="fa fa-angle-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Item -->  */}
                  
                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="blog_single_post.html"> <img className="primary-img" src="assets/images/blog-img1.jpg" alt="HTML template"/></a> <span className="moretag"></span> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="blog_single_post.html">Sed do eiusmod sit amet</a></h2>
                        <span className="jtv-entry-meta"><span className="date">15 April, 2017</span> <i className="pe-7s-like"></i> 5 likes <span className="blog-comments"><i className="pe-7s-comment"></i> 20 comments</span></span>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam venenatis.  Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
                        <div className="blog-action"> <a className="read-more" href="blog_single_post.html">read more <i className="fa fa-angle-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Item -->  */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-newsletter">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <form id="newsletter-validate-detail" method="post" action="#">
            <h3>Join Our Newsletter</h3>
            <div className="title-divider"><span></span></div>
            <p className="sub-title text-center">Get 25% off</p>
            <div className="newsletter-inner">
              <input className="newsletter-email" name='Email' placeholder='Enter Your Email'/>
              <button className="button subscribe" type="submit" title="Subscribe">Subscribe</button>
            </div>
          </form>
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
                <h3>100% secure payments</h3>
                <p>Credit/ Debit Card/ Banking </p>
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
  
  {/* <!-- Static Banner --> */}
  <div className="banner-static">
    <div className="container">
      <div className="row"> 
        {/* <!-- Customers Box --> */}
        <div className="col-sm-6 col-xs-12">
          <div className="testimonials">
            <div className="page-header">
              <h2>What Our Customers Say</h2>
            </div>
            <div className="slider-items-products">
              <div id="testimonials-slider" className="product-flexslider hidden-buttons home-testimonials">
                <div className="slider-items slider-width-col4 ">
                  <div className="holder">
                    <blockquote>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip volutpat.
                      Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, 
                      neque.</blockquote>
                    <div className="thumb"> <img src="assets/images/testimonials-img3.jpg" alt="testimonials img"/> </div>
                    <div className="holder-info"> <strong className="name">John Doe</strong> <strong className="designation">CEO, Company</strong></div>
                  </div>
                  <div className="holder">
                    <blockquote> Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit.Lorem ipsum dolor sit ame consetur adipisicing elit.Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate, consetur adipisicing elit. 
                      Lorem ipsum dolor sit ame consetur adipisicing elit.  Suspendisse diam ipsum, ultricies.</blockquote>
                    <div className="thumb"> <img src="assets/images/testimonials-img1.jpg" alt="testimonials img"/> </div>
                    <div className="holder-info"> <strong className="name">Vince Roy</strong> <strong className="designation">CEO, Newspaper</strong> </div>
                  </div>
                  <div className="holder">
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                      minim. Donec sit amet eros.
                      Cras feugiat luctus nulla vitae posuere. Suspendisse potenti. quis rhoncus libero orci quis ex. Donec molestie convallis dictum. </blockquote>
                    <div className="thumb"> <img src="assets/images/testimonials-img2.jpg" alt="testimonials img"/> </div>
                    <div className="holder-info"><strong className="name">John Doe</strong> <strong className="designation">CEO, ABC Softwear</strong></div>
                  </div>
                  <div className="holder">
                    <blockquote>Aliquam erat volutpat. Sed do eiusmod tempor incididunt Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget. Donec sit amet eros.
                      Nulla non ornare nisi, sed condimentum lorem. Morbi sed vehicula magna. Donec vitae ultricies velit, sit amet sollicitudin ligula.</blockquote>
                    <div className="thumb"> <img src="assets/images/testimonials-img4.jpg" alt="testimonials img"/> </div>
                    <div className="holder-info"> <strong className="name">Vince Roy</strong> <strong className="designation">CEO, XYZ Softwear</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-sms-12">
          <div className="banner-box banner-box2"> <a href="#"><img src="assets/images/banner_staic2.png" alt="HTML template"/></a>
            <div className="box-hover">
              <div className="banner-title">New Fashion</div>
              <div className="line"></div>
              <span>Save up to 55% off</span> </div>
          </div>
        </div>
        <div className="col-sm-3 col-sms-12">
          <div className="banner-box banner-box1"> <a href="#"><img src="assets/images/banner_staic1.png" alt="HTML template"/></a>
            <div className="box-hover">
              <div className="banner-title">Women Style</div>
              <div className="line"></div>
              <span>Save up to 45% off</span> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* <!-- Footer --> */}


   
  


  <a href="#" id="back-to-top" title="Back to top"><i className="fa fa-angle-up"></i></a> 
  
  {/* <!-- End Footer -->  */}
</div>


        


        
      </React.Fragment>
    )
  }
}

export default Home

