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
       this.state = {
       	   productId : this.props.match.params.productId
       }
   }
    componentDidMount(){
    	if(this.state.productId){
    		this.props.getEditProduct(this.state.productId);
    	}
    }



   
	render(){
              const {
                EditName,
		        EditIntro,
		        EditPrice,
		        EditNum,
		        parentCategoryId,
		        categoryId,
		        images,
			    detail,
              } = this.props;
             let fileList = [];
             if(images){
             	fileList = images.split(',').map((img,index)=>({
                    uid: index,
                    status:'done',
                    url:img,
             	}))
             }


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
				            initialValue :this.props.EditName
				          })(
				            <Input 
				            disabled ={true}
				            />
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
				            initialValue :this.props.EditIntro
				          })(
				            <Input 
                             disabled ={true}
				            />
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
				           parentCategoryId = {parentCategoryId}
				           categoryId = {categoryId}
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
				              required: true, message: '请输入商品价格',
				            }],
				            initialValue :this.props.EditPrice
				          })(
				            <InputNumber 
				            style={{ width: 300 }}
				            min = {0}
				            formatter={value => `${value}元`}
      						parser={value => value.replace('%', '')}
                            disabled={true}
				            />
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
				            initialValue :this.props.EditNum
				          })(
				            <InputNumber 
				            style={{ width: 300 }}
                            min = {0}
				            formatter={value => `${value}件`}
      						parser={value => value.replace('%', '')}
                            disabled={true}
				            />
				          )}
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品图片"
				        >
				          <CommonUploadImg
                              action = {UPLOAD_PRODUCT_IMAGE}
                              max ={3}
                              fileList = {fileList}
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

				       		        					
					</Form>
				</div>
			)
	}
}

const CategoryDetail = Form.create()(NormalCategoryForm);
const mapStateToProps = (state)=>{
   return{
      categoryIdValidateStatus:state.get('product').get('categoryIdValidateStatus'),
      categoryIdHelp:state.get('product').get('categoryIdHelp'),
      EditName:state.get('product').get('EditName'),
      EditIntro:state.get('product').get('EditIntro'),
      EditPrice:state.get('product').get('EditPrice'),
      EditNum:state.get('product').get('EditNum'),
      parentCategoryId:state.get('product').get('parentCategoryId'),
      categoryId:state.get('product').get('categoryId')
   }
   
}

const mapDispatchToProps = (dispatch) =>{
  return{
      
       getEditProduct:(productId)=>{
          const action = actionCreator.getEditProductAction(productId);
          dispatch(action); 
       }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryDetail);

