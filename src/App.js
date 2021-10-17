import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About_us from './pages/About_us';
import Wishlist from './pages/Wishlist'
import Account_page from './pages/Account_page'
import Checkout from './pages/Checkout'
import Orders_list from './pages/Orders_list'
import Register_page from './pages/Register_page'
import Shopping_cart from './pages/Shopping_cart';



function App() {
  return (    
    




          <React.Fragment>


           


                    <Router>

                    <Header/>

                          <Switch>


                                  <Route exact path='/' component={Home}/>
                                  <Route  path='/about_us' component={About_us}/>
                                  <Route  path='/wishlist' component={Wishlist}/>
                                  <Route  path='/account_page' component={Account_page}/>
                                  <Route  path='/checkout' component={Checkout}/>
                                  <Route  path='/orders_list' component={Orders_list}/>
                                  <Route  path='/register_page' component={Register_page}/>
                                  <Route  path='/shopping_cart' component={Shopping_cart}/>

                            
                          </Switch>

                    <Footer/>


                    </Router>


           


          

          </React.Fragment>

          
  );
}

export default App;
