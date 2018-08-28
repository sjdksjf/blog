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
           <Route path= "/about/rou" render = {(route)=>{<h3>About rou..</h3>}} />
           <Route path="/about/:id" render = {(match)=>{<h3>{ this.props.match.param.id }</h3>}} /> 
         </Switch> 
        </div>
       )
   } 
}

class App extends Component{

  render(){
    //return 只能返回一个
    return(
     <Router>	
       <div className="App"> 
         <ul>
	        <li><Link to="/todolist">Todolist</Link></li>
	        <li><Link to="/about">About</Link></li> 
          <li><Link to="/about/rou">About</Link></li>
          <li><Link to="/about/123">About</Link></li>
         </ul> 
         <Route exact path="/todolist" component={Todolist} />
         <Route path="/about" component={About} />       
       </div> 
     </Router>        
    )
  }
  


}

export default  App;