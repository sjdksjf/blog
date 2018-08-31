import * as types from './actionTypes.js';

import { LOGIN } from 'api';
import { request,setUserName } from 'util';
import { message } from 'antd';


const loadInitDataAction = ()=>{
	return {
		type:types.LOGIN_ISFECTH,
	}
}

const loginConmmAction = ()=>{
	return {
		type:types.CONMM_ISFECTH,
	}
}

export const getInitDataAction = (values)=>{
	return (dispatch)=>{
	    dispatch(loadInitDataAction());
	   request({
	   	  url: LOGIN,
	   	  method: 'post',
	   	  data: values
	   })
	   .then(result=>{
	   	dispatch(loginConmmAction());
	   		if (result.code == 0) {
	   			setUserName(result.data.username);
	   			window.location.href = '/';

	   		}else if (result.code == 10) {

	   			message.error(result.message);
	   		}
	   })
	   .catch(err=>{
	   		message.error('网络错误，请稍后再试');
	   		dispatch(loadInitDataAction());
	   });
	}
}

