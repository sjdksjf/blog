import React,{ Component } from 'react';
import {
  //HashRouter  as Router,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Login from 'pages/login/';
import Home from 'pages/home/';
import User from 'pages/User';
import Category from 'pages/category';
import Product from 'pages/product';
import Errorpage from 'common/error-page'; 

import { getUserName } from 'util';
//引入css
import './App.css';


class App extends Component{
  render(){
   
    const ProtectedRouter = ({component:Component,...rest})=>(
      <Route 
        {...rest}
        render = {props=>(
          getUserName()
          ? <Component {...props} />
          : <Redirect to="/login" />
        )}
      />
    )

    const LoginRouter =({component:Component,...rest})=>{
      if(getUserName()){
        return <Redirect to="/" />
      }else{
        return <Route {...rest} component={Component} />
      }
    }
  
    return(
      <Router>
        <div className="App">
        <Switch>
          <ProtectedRouter exact path="/" component={ Home } />
          <ProtectedRouter path="/user" component={ User } /> 
          <ProtectedRouter path="/category" component={ Category } /> 
          <ProtectedRouter path="/product" component={ Product } />      
          <LoginRouter path="/login" component={ Login } />
          <Route component = { Errorpage } />
        </Switch>
        </div>    
      </Router> 
    )
  }
}
export default  App;