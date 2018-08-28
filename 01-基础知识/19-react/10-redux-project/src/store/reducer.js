import {combineReducers} from 'redux';

import { reducer as todolistReducer } from '../pages/todolist/store'

export default combineReducers({
	todolist: todolistReducer
})