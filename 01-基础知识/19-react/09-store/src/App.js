import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { Input,Button,Row,Col,List } from 'antd';
//引入方法
import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js';



//引入css
import './App.css';



class App extends Component{
    componentDidMount(){

        this.props.getdata(); 
   }



 
  render(){
    //return 只能返回一个
    return(
      <div className="App">
          <Row>
            <Col span={18} ><Input 
             value= {this.props.value}
             onChange = {this.props.handleChenge}
            /> </Col>
            <Col span={6} ><Button 
            type="primary"
            onClick = {this.props.handleAdd}
            >增加</Button></Col>
          </Row>
          <List
            style={{ marginTop: 10 }}
            bordered
            dataSource={
               this.props.list
            }
            renderItem={(item,index) => (<List.Item onClick ={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
          />                
      </div>        
    )
  }
  
}
const mapStateToProps = (state)=>{
   return{
      value:state.value,
      list:state.list
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      handleChenge:(e)=>{
        const action = chageValueAction(e.target.value);
        dispatch(action);
      },

      handleAdd:()=>{
        const action = addItemAction();
        dispatch(action);  
      },

      handleDelete:(index)=>{
        const action = deleteItemAction(index);
        dispatch(action); 
      },
      getdata:()=>{
        const action = getInitDataAction();
        dispatch(action); 
      }

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);