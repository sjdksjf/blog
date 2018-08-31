import * as types from './actionTypes.js';
const { fromJS } = require('immutable');
const defaultState = fromJS({
	 usersNumber: 201,
	 goodsNumber: 202,
     produNumber:203
})

export default (state=defaultState,action)=>{

	
	return state;
}