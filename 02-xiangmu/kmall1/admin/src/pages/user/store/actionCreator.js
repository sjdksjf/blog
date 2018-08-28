import * as types from './actionTypes.js';
import axios from 'axios';
import { message } from 'antd';//引入ant de里面的页面
import { request } from 'util';
import { USER } from 'api';

export const getInitDataAction = (values)=>{

	return (dispatch)=>{
		dispatch(loadInitDataAction());
	   request({
	   	  url: USER,
	   	  method: 'get',
	   	  data: {
	   	  	page:values
	   	  }
	   })
	   .then(result=>{
	   	dispatch(userConmmAction());
	   		if (result.code == 0) {
	   			dispatch(userAction(result.data));
	   		}else if (result.code == 10) {

	   			message.error(result.message);
	   		}
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试');
	   });
	}
}

export const loadInitDataAction = ()=>{
	return {
		type:types.USER_ISFECTH,
	}
}

export const userConmmAction = ()=>{
	return {
		type:types.CONM_ISFECTH,
	}
}
export const userAction = (values)=>{
	return {
		type:types.USER_DONE,
		payload:values
	}
}