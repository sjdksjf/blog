import React,{ Component } from 'react';
import { Select } from 'antd';

import { request } from 'util';
import { GET_CATEGORIES } from 'api';



const Option = Select.Option;


class CategorySelect extends Component {
     constructor(props){
         super(props);
         this.state = {
         	levelOneCategories:[],
         	levelOneCategoryId:'',
         	levelTwoCategories:[],
         	levelTwoCategoryId:'',
          needLoadLevelTwo:false,
          isChanged:false
         }

      	this.handleLevelOneChange =this.handleLevelOneChange.bind(this);
      	this.handleLevelTwoChange =this.handleLevelTwoChange.bind(this);
     } 
     componentDidMount(){
     	  this.loadLevelOneCategory()
     }
     
  
     static getDerivedStateFromProps(props, state){
           console.log('props',props)
           console.log('state',state)
           
           const levelOneCategoryIdChanged = props.parentCategoryId !==state.levelOneCategoryId;
           const levelTwoCategoryIdChanged = props.categoryId !==state.levelTwoCategoryId;
     
           //     
           if(state.levelOneCategoryId && !props.parentCategoryId && !props.categoryId){
              return null
           }
          // 分类Id不存在 不更新数据
           if(!levelOneCategoryIdChanged && !levelTwoCategoryIdChanged){
              return null 
           }

           if(state.isChanged){
              return null
           }
          
           if(props.parentCategoryId == 0){
              return {
                 levelOneCategoryId :props.parentCategoryId,
                 levelTwoCategoryId :'',
                 isChanged :true
              }
           }else{
             return {
                 levelOneCategoryId :props.parentCategoryId,
                 levelTwoCategoryId :props.categoryId,
                 needLoadLevelTwo :true,
                 isChanged :true
             }
           }
        
          return null 
     }

     componentDidUpdate(){
         if(this.state.needLoadLevelTwo){
             this.loadLevelTwoCategory();
             this.setState({
                 needLoadLevelTwo : false
             }) 
         }
     }
    
     loadLevelOneCategory(){
          request({
              method:'get',
              url:GET_CATEGORIES,
              data:{
                 pid:0
              }
          })
          .then((result)=>{
             if(result.code == 0){
                 this.setState({
                    levelOneCategories:result.data
                 })
             }
          })
     }
   
     handleLevelOneChange(value){
          this.setState({
              levelOneCategoryId:value,
              levelTwoCategories:[],
              levelTwoCategoryId:''
          },()=>{
            this.loadLevelTwoCategory();
            this.onValueChange()
          })
     }
     handleLevelTwoChange(value){
       this.setState({
              levelTwoCategoryId:value
          },()=>{

            this.onValueChange()
          })
     }
    loadLevelTwoCategory(){
          request({
              method:'get',
              url:GET_CATEGORIES,
              data:{
                 pid:this.state.levelOneCategoryId
              }
          })
          .then((result)=>{
             if(result.code == 0){
                 this.setState({
                    levelTwoCategories:result.data
                 })
             }
          })
     }
   onValueChange(){
    const {levelOneCategoryId,levelTwoCategoryId} =this.state;   
        if(levelTwoCategoryId){
           this.props.getCategoryId(levelOneCategoryId,levelTwoCategoryId) 
        }else{
           this.props.getCategoryId(null,levelOneCategoryId) 
        } 

   }

	
	render(){
		const {levelOneCategories,levelOneCategoryId,levelTwoCategories,levelTwoCategoryId} =this.state;
		const levelOneOptions = levelOneCategories.map(category => <Option key={category._id} value={category._id} >{category.name}</Option>);
    const levelTwoOptions = levelTwoCategories.map(category => <Option key={category._id} value={category._id} >{category.name}</Option>);
 
		return (
            <div>
              <Select 
                   style={{ width: 300,marginRight:10 }} 
                   onChange={this.handleLevelOneChange}
                   defaultValue={levelOneCategoryId}
                   value={levelOneCategoryId} 
                   >
			              {levelOneOptions}
			        </Select>
              {
                levelTwoOptions.length 
                ? <Select 
                  defaultValue={levelTwoCategoryId}
                  value={levelTwoCategoryId} 
                  style={{ width: 300 }} 
                  onChange={this.handleLevelTwoChange}
                  >
                    {levelTwoOptions}
                  </Select> 
                : null
              }
			   
          </div>
		)
	}
}



export default CategorySelect;