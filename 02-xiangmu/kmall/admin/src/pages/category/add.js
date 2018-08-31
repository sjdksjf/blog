import React,{ Component } from 'react';
import { Form, Input, Select, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';


import { actionCreator } from './store';

import Layout from 'common/layout';


const Option = Select.Option;
const FormItem = Form.Item;

class NormalCategoryForm extends Component {
	constructor(props){
       super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
     
   }
    componentDidMount(){
    	this.props.getLevelOneCategories();
    }


  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleAdd(values);
      }
    });
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
						<Breadcrumb.Item>添加分类</Breadcrumb.Item>
					</Breadcrumb>
					<Form>
				        <FormItem
				          {...formItemLayout}
				          label="分类名称"
				        >
				          {getFieldDecorator('name', {
				            rules: [
				            {
				              required: true, message: '请输入分类名称',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="分类名称"
				        >
				          {getFieldDecorator('pid', {
				            rules: [
				            {
				              required: true, message: '请输选择父级分类',
				            }],
				          })(
						    <Select initialValue="0" style={{ width: 300 }}>
						      <Option value="0">根分类</Option>
						      {
						      	this.props.levelOneCategories.map((category)=>{
						      		return <Option key={category.get('_id')} value={category.get('_id')}>根分类/{category.get('name')}</Option>
						      	})
						      }
						    </Select>
				          )}
				        </FormItem>				        
				        <FormItem {...tailFormItemLayout}>
				        	<Button 
				          		type="primary"
				          		onClick={this.handleSubmit}
				          		loading={this.props.isAddFetching}
				          	>
				          	提交
				        	</Button>
				        </FormItem>				        					
					</Form>
				</div>
			)
	}
}

const CategoryAdd = Form.create()(NormalCategoryForm);
const mapStateToProps = (state)=>{
   return{
      isAddFetching:state.get('category').get('isAddFetching'),
      levelOneCategories:state.get('category').get('levelOneCategories')
   }
   
}

const mapDispatchToProps = (dispatch) =>{
  return{
       handleAdd:(values)=>{
          const action = actionCreator.getAddAction(values);
          dispatch(action); 
       },  
       getLevelOneCategories:()=>{
       	 const action = actionCreator.getLevelOneCategoriesAction();
       	 dispatch(action);
       }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryAdd);

