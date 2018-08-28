import * as types from './actionTypes.js';
import axios from 'axios';
import { HOME } from 'api';
import { message } from 'antd';//引入ant de里面的页面
import { request } from 'util';


export const getInitDataAction = (values)=>{
	return (dispatch)=>{	  
	   request({
	   	  url: HOME,
	   })
	   .then(result=>{
	   		if (result.code == 0) {
	   			setUserName(result.data.username)
	   			window.location.href = '/';

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
		type:types.LOGIN_ISFECTH,
	}
}

export const loginConmmAction = ()=>{
	return {
		type:types.CONMM_ISFECTH,
	}
}