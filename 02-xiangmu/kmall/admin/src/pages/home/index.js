import { connect } from 'react-redux';
import React,{ Component } from 'react';
import { Card } from 'antd';

import Layout from 'common/layout';


class Home extends Component {
   constructor(props){
       super(props)
   }
  render() {
    return (
         <div>
            <Layout>
               <Card title="用户总数" bordered={false} style={{ width: 300 }}>
      			      <p>{this.props.usersNumber}</p>
      			   </Card>
      			   <Card title="商品总数" bordered={false} style={{ width: 300 }}>
      			      <p>{this.props.goodsNumber}</p>
      			   </Card>
      			   <Card title="人数" bordered={false} style={{ width: 300 }}>
      			      <p>{this.props.produNumber}</p>
      			   </Card>  
            </Layout>
        </div> 
    );
  }
}

const mapStateToProps = (state)=>{
   return{
      usersNumber:state.get('home').get('usersNumber'),
      goodsNumber:state.get('home').get('goodsNumber'),
      produNumber:state.get('home').get('produNumber')
   }
}
/*
const mapDispatchToProps = (dispatch) =>{
  return{
       getLoginAction:(values)=>{
          const action = actionCreator.getInitDataAction(values);
          dispatch(action); 
       }  
      
  }

}
*/
export default connect(mapStateToProps,null)(Home);

