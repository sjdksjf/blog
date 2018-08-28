
import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';


    //return 只能返回一个
const AppUI = (props)=>{
   return(
      <div className="App">
          <Row>
            <Col span={18} ><Input 
              value = {props.value}
              onChange = {props.handChange}
            /> </Col>
            <Col span={6} ><Button 
            type="primary"
             onClick = {props.handAdd}
            >增加</Button></Col>
          </Row>
          <List
            style={{ marginTop: 10 }}
            bordered
            dataSource= {props.list}
           renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>)}
          />                
      </div>        
    )
  }

export default AppUI;