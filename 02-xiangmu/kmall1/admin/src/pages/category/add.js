import React,{ Component } from 'react';
import {  Route } from 'react-router-dom';
import { Form, Input,Icon, Select, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';

import Layout from 'common/layout';


const Option = Select.Option;
const FormItem = Form.Item;

class NormalCategoryForm extends Component {
	constructor(props){
       super(props);
     
   }

	render(){
               const { getFieldDecorator } = this.props.form;

			   const formItemLayout = {
					      labelCol: {
					        xs: { span: 24 },
					        sm: { span: 8 },
					      },
					      wrapperCol: {
					        xs: { span: 24 },
					        sm: { span: 16 },
					      },
					    };
			    const tailFormItemLayout = {
					      wrapperCol: {
					        xs: {
					          span: 24,
					          offset: 0,
					        },
					        sm: {
					          span: 16,
					          offset: 8,
					        },
					      },
					    };
		return(
               <div>
                       <Breadcrumb>
						    <Breadcrumb.Item>分类管理</Breadcrumb.Item>
						    <Breadcrumb.Item>增加分类</Breadcrumb.Item>						    
						</Breadcrumb>
                        <Form >
					        <FormItem
					          {...formItemLayout}
					          label="分类名称"
					        >
					          {getFieldDecorator('email', {
					            rules: [{
					              required: true, message: '请添加分类名称!',
					            }],
					          })(
					            <Input />
					          )}
					        </FormItem>
                            <FormItem
					          {...formItemLayout}
					          label="选择分类级别"
					        >
					          {getFieldDecorator('email', {
					            rules: [{
					              required: true, message: '请选择分类级别!',
					            }],
					          })
					          (
					          <Select initialValue="0" style={{ width: 120 }} >
							      <Option value="0">根分类</Option>
							      <Option value="1">一级分类</Option>
							      
							  </Select>
					          )}
					        </FormItem>

					        <FormItem {...tailFormItemLayout}>
					          <Button type="primary" >提交</Button>
					        </FormItem>
                        </Form>
                 </div>
			)
	}
}

const CategoryAdd = Form.create()(NormalCategoryForm);
const mapStateToProps = (state)=>{
   return{
      isFetching:state.get('login').get('isFetching'),
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
export default connect(mapStateToProps,null)(CategoryAdd);

