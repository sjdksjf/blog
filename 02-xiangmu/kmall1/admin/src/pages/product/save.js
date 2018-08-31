import React,{ Component } from 'react';
import { Form, Input, Select, Button, Breadcrumb,InputNumber } from 'antd';
import { connect } from 'react-redux';


import { actionCreator } from './store';
import  CategorySelecti  from './category-select.js';


import { UPLOAD_PRODUCT_IMAGE,UPLOAD_COMMODITY_DETAILS } from 'api';

import CommonUploadImg from 'common/upload-img';
import CommonUploadSelect from 'common/product-details';

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
      
    this.props.handleAdd(err,values);
    
    });
  }
   
	render(){
               const { getFieldDecorator } = this.props.form;

			   const formItemLayout = {
					      labelCol: {
					        xs: { span: 24 },
					        sm: { span: 2 },
					      },
					      wrapperCol: {
					        xs: { span: 24 },
					        sm: { span: 18 },
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
						<Breadcrumb.Item>商品管理</Breadcrumb.Item>
						<Breadcrumb.Item>商品分类</Breadcrumb.Item>
					</Breadcrumb>
					<Form style ={{ marginTop:35 }}>
				        <FormItem
				          {...formItemLayout}
				          label="商品名称"
				        >
				          {getFieldDecorator('name', {
				            rules: [
				            {
				              required: true, message: '请输入商品名称',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>
				         <FormItem
				          {...formItemLayout}
				          label="商品描述"
				        >
				          {getFieldDecorator('describe', {
				            rules: [
				            {
				              required: true, message: '请输入商品描述',
				            }],
				          })(
				            <Input />
				          )}
				        </FormItem>

				        <FormItem
				          {...formItemLayout}
				          label="商品分类"
				          required = {true}	
				          validateStatus = {this.props.categoryIdValidateStatus}
				          help = {this.props.categoryIdHelp} 		    
				        >
				         <CategorySelecti 
                           getCategoryId = {(parentCategoryId,categoryId)=>{
                              this.props.handCategory(parentCategoryId,categoryId)
                           }}
				         />
				          
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="商品价格"
				        >
				          {getFieldDecorator('price', {
				            rules: [
				            {
				              required: true, message: '请输入商品名称',
				            }],
				          })(
				            <InputNumber style={{ width: 300 }}/>
				          )}
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品库存"
				        >
				          {getFieldDecorator('stock', {
				            rules: [
				            {
				              required: true, message: '请输入商品名称',
				            }],
				          })(
				            <InputNumber style={{ width: 300 }}/>
				          )}
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品图片"
				        >
				          <CommonUploadImg
                              action = {UPLOAD_PRODUCT_IMAGE}
                              max ={3}
                              getFileList ={(fileList)=>{
                                  this.props.handleImages(fileList)
                              }}
				          />
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品详情"
				        >
				         <CommonUploadSelect 
                            url = {UPLOAD_COMMODITY_DETAILS}
                            getRichEditorValue ={(value)=>{
                                this.props.handleDetail(value)
                            }}
				          />
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
      categoryIdValidateStatus:state.get('product').get('categoryIdValidateStatus'),
      categoryIdHelp:state.get('product').get('categoryIdHelp')
   }
   
}

const mapDispatchToProps = (dispatch) =>{
  return{
       handleAdd:(err,values)=>{
          const action = actionCreator.getAddAction(err,values);
          dispatch(action); 
       }, 
       handCategory:(parentCategoryId,categoryId)=>{
       	  const action = actionCreator.getSetCategoryAction(parentCategoryId,categoryId);
          dispatch(action); 
       },
       handleImages:(fileList)=>{
          const action = actionCreator.getSetImagesAction(fileList);
          dispatch(action); 
       },
       handleDetail:(value)=>{
          const action = actionCreator.getSetDetailAction(value);
          dispatch(action); 
       },


       getLevelOneCategories:()=>{
       	 const action = actionCreator.getLevelOneCategoriesAction();
       	 dispatch(action);
       }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryAdd);

