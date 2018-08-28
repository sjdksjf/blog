import React,{ Component } from 'react';
import Todolist from './pages/todolist';
//引入css
import './App.css';



class App extends Component{

  render(){
    //return 只能返回一个
    return(
      <div className="App">
          <Todolist/>           
      </div>        
    )
  }
  


}

export default  App;