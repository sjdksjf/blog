import React,{ Component } from 'react';
import axios from 'axios';

import { Input,Button,Row,Col,List } from 'antd';
import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionTypes.js';

import store  from './store/index.js';

import AppUI from './AppUI.js';

//引入css
import './App.css';



class App extends Component{
   constructor(props){
     
      super(props);
    
      this.state = store.getState();
      
      store.subscribe(()=>{
        this.setState(store.getState())
      })
     
      this.handAdd  =  this.handAdd.bind(this);
      this.handChange = this.handChange.bind(this);
      this.handDelete = this.handDelete.bind(this);
 }
 
 componentDidMount(){
     /*
      axios
      .get('http://127.0.0.1:3000')
      .then((data)=>{
        const action = loadInitDataAction(data.data);

        store.dispatch(action)
      })
      .catch((e)=>{
         console.log(e);
      })
     */
     const action = getInitDataAction();
     store.dispatch(action)

 }

 handChange(e){
   const action = chageValueAction(e.target.value) 
   store.dispatch(action);

 }

 handAdd(){
   const action = addItemAction();
   store.dispatch(action);
 }
 
 handDelete(index){
   const action = deleteItemAction();
   store.dispatch(action);
 } 


  render(){
    //return 只能返回一个
      <AppUI
            value = {this.state.value}
            list = {this.state.list}
            handleChange = {this.handleChange}
            handleAdd = {this.handleAdd}
            handleDelete = {this.handleDelete}

      />
  }
}
export default App;