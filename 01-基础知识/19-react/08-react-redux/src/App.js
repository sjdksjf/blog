import React,{ Component } from 'react';
import axios from 'axios';

import { Input,Button,Row,Col,List } from 'antd';
import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionTypes.js';

import store  from './store/index.js';

import AppUI from './AppUI.js';

//引入css
import './App.css';


class App extends Component {
   constructor(props){
     console.log('App constructor...')
    {/*调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
     super(props)的目的：在constructor中可以使用this.props*/}
    	super(props);
    	this.state = {
            value:'',
        		list:['11','bb']
    	}
    	  this.handDelete = this.handDelete.bind(this);
        this.handChange = this.handChange.bind(this);
        this.handadd = this.handadd.bind(this);
    }
  
  static getDerivedStateFromProps(nextProps, prevState){
     console.log('App..',nextProps, prevState)
     if(nextProps.value == 1){
        return(111) 
     }else{
       return(['bb,cc'])
     }
  }

  shouldComponentUpdate(nextProps, nextState){
    return  true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('App1..',prevProps, prevState) 
  }

  componentDidUpdate(prevProps, prevState,snapshot){
    console.log('App1..',prevProps, prevState,snapshot)
  }

  componentDidMount(){
    axios
    .get('http://127.0.0.1:3000/api/getData')
    .then((data)=>{
      console.log(data)
    })
    .catch((e)=>{
      console.log("err",e)
    })
  }
  

   handadd(){
    //console.log(this.ul)
   	this.setState((preState)=>(
   		{
          list:[...preState.list,preState.value],
          value:''       
       })
   	)
      
   }    
   handChange(e){
       //console.log(this.input)
       //const  value = e.target.value
       const  value = this.input.value
       this.setState((preState)=>({
            value
       }))
  
   }
   handDelete(index){
       
       this.setState((preState)=>{
         const list = [...preState.list];
         list.splice(index,1);
         return {
            list
           }
       })  
   }    
 

  render() {
    return (
       <div className="App">
          <Row>
            <Col span={18} ><Input 
              value = {this.props.value}
              onChange = {this.props.handChange}
            /> </Col>
            <Col span={6} ><Button 
            type="primary"
             onClick = {this.props.handAdd}
            >增加</Button></Col>
          </Row>
          <List
            style={{ marginTop: 10 }}
            bordered
            dataSource= {this.props.list}
           renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
          />                
      </div> 
    

    );
  }
}

export default App;
