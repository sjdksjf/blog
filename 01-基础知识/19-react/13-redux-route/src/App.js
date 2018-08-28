import React,{ Component } from 'react';
import Todolist from './pages/todolist';
import {
  //HashRouter  as Router,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//引入css
import './App.css';


class About extends Component{
	render(){
      return(
        <div>
	       <Switch>	
	         <Route exact path= "/about" render={()=>(<h2>About..</h2>)} />
      
         </Switch> 
        </div>
       )
   } 
}

class Center extends Component{
  render(){
      return(
        <div>
         <Switch> 
           <Route exact path= "/center" render={()=>(<h2>Please center</h2>)} />
      
         </Switch> 
        </div>
       )
   } 
}

class App extends Component{
   constructor(props){
     super(props);   
     this.state ={
      isLogin: false
     }
   }
  render(){
    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        window.localStorage.getItem('userInfo') ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login'
          }}/>
        )
      )}
      />
    )

    //return 只能返回一个
    return(
     <Router>	
       <div className="App"> 
         <ul>
	        <li><Link to="/todolist">Todolist</Link></li>
	        <li><Link to="/about">About</Link></li>
          <li><Link to="/center">About</Link></li>
          <li><Link to="/b">b...</Link></li>
         </ul> 
         <Route exact path="/todolist" component={Todolist} />
         <ProtectedRoute path="/about" component={About} />
         <Route path="/b" component={()=>{render={<h2>commter</h2>}}} />       
       </div> 
     </Router>        
    )
  }
  


}

export default  App;