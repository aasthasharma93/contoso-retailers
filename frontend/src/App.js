import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {AuthNavbar,UnAuthNavbar} from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Details from './components/Details'
import { connect } from 'react-redux';
class App extends Component {
  render() {
    if(this.props.loggedIn === true){
    return (
      
       <BrowserRouter>
            <div className="App">
            
              <AuthNavbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/register" component={Register}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
    }else{
      return (
      
        <BrowserRouter>
             <div className="App">
             
               <UnAuthNavbar/>
                 <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/details" component={Details}/>
                     <Route path="/login" component={Login}/>
                     <Route path="/register" component={Register}/>
                   </Switch>
              </div>
        </BrowserRouter>
       
     );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    loggedIn: state.loggedIn,
  };
};
export default connect(mapStateToProps)(App);
