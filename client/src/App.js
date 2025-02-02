import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import './App.css';
import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import PostMessages from './components/BlogPost';

import Products from './components/pages/Products';

import SignUp from './components/auth/Register';
import SignIn from './components/auth/Login';

import Recipes from './Recipes';
import AllRecipes from './AllRecipes';

import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import UsingAjax from './components/AjaxApi';
// import BlogPost from './components/BlogPost';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}


class App extends Component {
  
render(){
  return (
   <>  
   <Provider store={store}>
    <Router>   
      <Navbar/>

        <Route  exact path='/'  component={Home} />
        {/* <Route path='/services' component={Services} /> */}
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/recipe' component={Recipes} />
        <Route path='/allrecipes/:id' component={AllRecipes}/> 
        <Route path='/usingajax' component={UsingAjax}/> 

        {/* <Route exact path='/' component={PostMessages} /> */}


        {/* <Route path='/recipe' component={Menu} /> */}
      <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </Provider>
   </>
  );
  }
}

export default App;