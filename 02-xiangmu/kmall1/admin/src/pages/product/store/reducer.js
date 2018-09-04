import * as types from './actionTypes.js';
const { fromJS } = require('immutable');
const defaultState = fromJS({
        fileList:null,
        value:'',
        validateStatus:'',
        help:'',
        categoryIdValidateStatus:'',
        categoryIdHelp:'',

        EditName:'',
        EditIntro:'',
        EditPrice:'',
        EditNum:'',
        parentCategoryId:'',
        categoryId:'',
        images:'',
	    detail:'',
        keyword:'',
       
		current:0,
		total:0,
		pageSize:0,
		list:[],
		updateModalVisible:false,
		updateId:'',
		updateName:''
		
})

export default (state=defaultState,action)=>{
   
    if(action.type == types.CATEGORY_CLASSIFY){
         return state.merge({
             parentCategoryId:action.payload.parentCategoryId,
             categoryId:action.payload.categoryId,
             categoryIdValidateStatus:'',
             categoryIdHelp:''
         })
    }

    if(action.type == types.CATEGORY_EDIT){
         return state.merge({
             EditName:action.payload.name,
	         EditIntro:action.payload.describe,
	         EditPrice:action.payload.price,
	         EditNum:action.payload.stock,
	         images:action.payload.images,
	         detail:action.payload.detail,
	         parentCategoryId:action.payload.category.pid,
	         categoryId:action.payload.category._id,
         })
    }


    if(action.type == types.CATEGORY_IMAGES){
		return state.set('fileList',action.payload.fileList)
	}

    if(action.type == types.CATEGORY_DETAIL){
		return state.set('value',action.payload.value)
	}
	if(action.type == types.SET_CATEGORY_ERROR){
         return state.merge({
             categoryIdValidateStatus:'error',
             categoryIdHelp:'请选择分类'
         })
    }



 
	if(action.type == types.CATEGORY_ISFECTH){
		return state.set('isAddFetching',true)
	}
	if(action.type == types.CONMM_ISFECTH){
		return state.set('isAddFetching',false)
	}
	if(action.type == types.SET_LEVEL_ONE_CATEGORIES){
		return state.set('levelOneCategories',fromJS(action.payload))
	}

	if (action.type == types.SET_PAGE) {
		return state.merge({
			current:action.payload.current,
  			pageSize:action.payload.pageSize,
  			total:action.payload.total,
  			keyword:action.payload.keyword || '',
  			list:fromJS(action.payload.list),
		})
	}




    if(action.type == types.PAGE_REQUEST){
		return state.set('isPageFetching',true)
	}
    if(action.type == types.PAGE_DONE){
		return state.set('isPageFetching',false)
	}
	
    if(action.type === types.SHOW_UPDATE_MODAL){
		return state.merge({
			updateModalVisible:true,
			updateId:action.payload.updateId,
			updateName:action.payload.updateName,
		})		
	}

  


	return state;
}