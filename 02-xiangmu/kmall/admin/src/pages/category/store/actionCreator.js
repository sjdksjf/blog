import * as types from './actionTypes.js';

import { CATEGORY,GET_CATEGORIES,UPDATE_CATEGORY_NAME,UPDATE_CATEGORY_ORDER } from 'api';
import { request,setUserName } from 'util';
import { message } from 'antd';


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

export const getAddAction = (values)=>{
	return (dispatch)=>{

	  dispatch(loadInitDataAction());
	   request({
	   	  url: CATEGORY,
	   	  method: 'post',
	   	  data: values
	   })
	   .then(result=>{
	   		if (result.code == 0) {
                if(result.data){//如果添加的是一级分类,从新更新一级分类
                    dispatch(setLevelOneCategories(result.data))
                }
                message.error('添加分类成功');
	   		}else{               
	   			message.error(result.message);
	   		}
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
export const getChangeNameAction =(payload)=>({
	 type:types.CHANGE_NAME,
	 payload
})

export const getUpdateNameAction= (pid)=>{
   return (dispatch,getState)=>{
   	  const state = getState().get('category');
   }
   request({
   	           method:'put',
   	           url: UPDATE_CATEGORY_NAME,
   	           data:{
   	           	  id:state.get('updateId'),
   	           	  name:state.get('updateName'),
   	           	  pid:pid,
   	           	  page:state.get('current'),
   	           }
         })
         .then((result)=>{
             if(result.code == 0){
             	dispatch(getSetPageAction(result.data))
             	dispatch(getCloseUpdateModelAction());
             }else{
             	message.error(result.message)
             }
         })
         .catch((err)=>{
               message.error('网络错误,请稍后在试!')
         })
}

export const getUpdateOrderAction= (pid,id,newOrder)=>{
   return (dispatch,getState)=>{
   	  const state = getState().get('category');
   }
   request({
   	           method:'put',
   	           url: UPDATE_CATEGORY_ORDER,
   	           data:{
   	           	  id:id,
   	           	  order:newOrder,
   	           	  pid:pid,
   	           	  page:state.get('current'),
   	           }
         })
         .then((result)=>{
             if(result.code == 0){
             	dispatch(getSetPageAction(result.data))
             }else{
             	message.error(result.message)
             }
         })
         .catch((err)=>{
               message.error('网络错误,请稍后在试!')
         })
}

export const getCloseUpdateModalAction = ()=>({
	type:types.CLOSE_UPDATE_MODAL
})