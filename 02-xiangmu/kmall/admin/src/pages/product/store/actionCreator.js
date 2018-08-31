import * as types from './actionTypes.js';

import { CATEGORY,GET_CATEGORIES,ADD_PRODUCT } from 'api';
import { request,setUserName } from 'util';
import { message } from 'antd';



export const getSetCategoryAction = (parentCategoryId,categoryId)=>({
    type:types.CATEGORY_CLASSIFY,
    payload:{
    	parentCategoryId,
    	categoryId

    }
})
export const getSetImagesAction = (fileList)=>{
	return {
		type:types.CATEGORY_IMAGES,
		payload:fileList
	}
}
export const getSetDetailAction = (value)=>{
	return {
		type:types.CATEGORY_DETAIL,
		payload:value
	}
}



const loadInitDataAction = ()=>{
	return {
		type:types.CATEGORY_ISFECTH,
	}
}

const getAddDoneAction = ()=>{
	return {
		type:types.CONMM_ISFECTH,
	}
}
const setLevelOneCategories = (payload)=>{
    return {
    	type:types.SET_LEVEL_ONE_CATEGORIES,
    	payload
    }
}

const getSetPageAction = (payload)=>{
   return {
   	 type:types.SET_PAGE,
   	 payload
   }
}
const getPageRequstAction = ()=>{
   return {
   	 type:types.PAGE_REQUEST,
   }
}


const getPageDoneAction = ()=>{
   return {
   	 type:types.PAGE_DONE,
   }
}


export const getCategoryAction = (values)=>{
	return {
		type:types.USER_DONE,
		payload:values
	}
}
const setCategoryError = ()=>({
	type:types.SET_CATEGORY_ERROR
})


export const getAddAction = (err,values)=>{
	return (dispatch,getState)=>{
       const state = getState().get('product');
       const categoryId = state.get('categoryId');
       if(!categoryId){
       	 dispatch(setCategoryError())
       	 return
       }
	   request({
	   	  url: ADD_PRODUCT,
	   	  method: 'post',
	   	  data: {
	   	  	  ...values,
	   	  	  category:categoryId, 
    		  images:state.get('images'),
    		  detail:state.get('detail')	
	   	  }
	   })
	   .then(result=>{
	   	   console.log(result);
	   	   dispatch(getAddDoneAction())	
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试');
	   		dispatch(getAddDoneAction());
	   });
	}
}


export const getLevelOneCategoriesAction = ()=>{

  return (dispatch)=>{
	   request({
	   	  url: GET_CATEGORIES,
	   	  method: 'get',
	   	  data: {
	   	  	pid:0
	   	  }
	   })
	   .then((result)=>{
	   		if (result.code == 0) {
	   			dispatch(setLevelOneCategories(result.data));
	   		}else{
      
	   			message.error(result.message);
	   		}
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试');
	   });
	}
}

export const getPageAction = (pid,page)=>{
	console.log(pid,page);

  return (dispatch)=>{
	dispatch(getPageRequstAction());
	   request({
	   	  url: CATEGORY,
	   	  method: 'get',
	   	  data: {
	   	  	page:page,
	   	  	pid:pid
	   	  }
	   })
	   .then(result=>{
	   		if (result.code == 0) {
	   			dispatch(getSetPageAction(result.data));
	   		}else{
	   			message.error(result.message);
	   		}
	   		dispatch(getPageDoneAction());
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试xx');
	   		dispatch(getPageDoneAction());
	   });
	}
}
export const getShowUpdateModelAction =(updateId,updateName)=>{
	 return {
	 	 type:types.SHOW_UPDATE_MODAL,
	 	 payload:{
             updateId,
             updateName
	 	 }
	 }
}