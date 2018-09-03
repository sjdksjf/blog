import * as types from './actionTypes.js';
import axios from 'axios';
import { message } from 'antd';//引入ant de里面的页面
import { request } from 'util';
import { USER } from 'api';

export const userGetInitDataAction = (values)=>{

 return (dispatch)=>{
	dispatch(userLoadInitDataAction());
	   request({
	   	  url: USER,
	   	  method: 'get',
	   	  data: {
	   	  	page:values
	   	  }
	   })
	   .then(result=>{    
	   		if (result.code == 0){
	   			dispatch(userAction(result.data));
                dispatch(userConmmAction());
	   		}else if (result.code == 10) {

	   			message.error(result.message);
	   		}
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试');
	   		dispatch(userConmmAction());
	   });
	}
}

export const userLoadInitDataAction = ()=>{
	return {
		type:types.USER_ISFECTH,
	}
}

export const userConmmAction = ()=>{
	return {
		type:types.CONM_ISLOAD,
	}
}
export const userAction = (values)=>{
	return {
		type:types.USER_DONE,
		payload:values
	}
}