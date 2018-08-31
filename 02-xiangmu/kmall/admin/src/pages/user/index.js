import { connect } from 'react-redux';
import React,{ Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import moment from 'moment';


import { actionCreator } from './store';

import Layout from 'common/layout';


class User extends Component {
   //挂载时只执行一次
   componentDidMount(){
      this.props.getUserAction();
   }
  render() {
     
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            //render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: 'isAdmin',
            dataIndex: 'isAdmin',
            key: 'isAdmin',
            render: isAdmin=>(isAdmin ? '是':'否')
          }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: '电话',
            key: 'phone',
            dataIndex: 'phone',
          }, {
            title: '注册时间',
            key: 'createdAt',
            dataIndex: 'createdAt',
          }];
         //map 方法把 得到的数据（对象）转化为数组
          const data = this.props.list.map((user)=>{
            return {
              key:user.get('_id'),
              name:user.get('username'),
              isAdmin:user.get('isAdmin'),
              email:user.get('email'),
              phone:user.get('phone'),
              createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
            }
          }).toJS();
        
    return (
         <div>
            <Layout>
               <Table 
               columns={columns} 
               dataSource={data} 
               pagination ={
                  {
                    current: this.props.current,
                    defaultCurrent:this.props.current,
                    pageSize:this.props.pageSize,
                    total:this.props.total
                  }
               } 
               onChange = {(Pagination)=>{
                 this.props.getUserAction(Pagination.current)
               }}
               loading = {
                 {
                 spinning: this.props.isFetching,
                 tip:"正在请求数据"
                 } 
              }
               />  
               
            </Layout>
        </div> 
    );
  }
}

const mapStateToProps = (state)=>{
   return{
      isFetching:state.get('user').get('isFetching'),
      current:state.get('user').get('current'),
      pageSize:state.get('user').get('pageSize'),
      total:state.get('user').get('total'),
      list:state.get('user').get('list')
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
       getUserAction:(values)=>{
          const action = actionCreator.userGetInitDataAction(values);
          dispatch(action); 
       }  
      
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(User);

