import * as types from './actionTypes.js';
const { fromJS } = require('immutable');
const defaultState = fromJS({
	  isFetching:false,
      current:1,
      pageSize:100,
      total:10,
      list:[]
})

export default (state=defaultState,action)=>{
	if (action.type == types.CONM_ISLOAD) {
		return state.set('isFetching',false);
	}
	if (action.type == types.USER_ISFECTH) {
		return state.set('isFetching',true);
	}
	if (action.type == types.USER_DONE) {
		return state.merge({
			current:action.payload.current,
  			pageSize:action.payload.pageSize,
  			total:action.payload.total,
  			list:fromJS(action.payload.list)
		})
	}
	return state;
}