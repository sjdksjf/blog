import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb,Button,Table,Divider,InputNumber,Modal,Input,Switch } from 'antd';
import { connect } from 'react-redux';

import { actionCreator } from './store';
import Layout from 'common/layout';

const Search = Input.Search;

class ProductList extends Component {
	constructor(props){
       super(props);
	}
	componentDidMount(){
		//第一个参数是父级ID,第二个参数是页码
		this.props.handlePage(1);
	}
	
	render(){
		const { keyword } = this.props;

		const columns = [
            {
			  title: 'ID',
			  dataIndex: 'id',
			  key: 'id',
			},
		    {
			  title: '商品名称',
			  dataIndex: 'name',
			  key: 'name',
			  render:(name)=>{
                  if(keyword){
                  	  let reg = new RegExp("("+keyword+")",'ig');
                  	  let html = name.replace(reg,"<b style = 'color:green'>$1</b>");
                  	  return <span dangerouslySetInnerHTML={{__html:html}}></span>
                  }else{
                  	return name;
                  }
			  }
			},
			{
			  title: '状态',
			  dataIndex: 'status',
			  key: 'status',
			  render:(status,record)=>{
			  	 return  <Switch 
			  	 checkedChildren="在售" 
			  	 unCheckedChildren="下架" 
			  	 defaultChecked ={ record.status =="0" ? true : false} 
			  	 onChange ={(checked)=>{

			  	   this.props.handleStatus(record.id,checked ? 0 : 1)
			  	 }
			  	 }
			  	 />  
			  }
			},
			{
			  title: '排序',
			  dataIndex: 'order',
			  key: 'order',
			  render:(order,result)=>{
			  	 return <InputNumber defaultValue={ order }  />
			  }
			},
			{
			  title: '操作',
			  key: 'action',
			  render: (text, record) => (
			     <span>
					  <Link to={"/product/save/"+record.id} >编辑</Link> 
					  <Divider type="vertical" />
					  <Link to={"/product/detail/"+record.id} >查看商品</Link> 
				 </span>
			  ),
			}];


//map 方法把 得到的数据（对象）转化为数组
      
        const data  = this.props.list.map((product)=>{
			return {
				key:product.get('_id'),
				id:product.get('_id'),
				name:product.get('name'),
				order:product.get('order'),
			
			}
		}).toJS();	

  
		return (
               <div>
                   <Breadcrumb>
						<Breadcrumb.Item>商品管理</Breadcrumb.Item>
						<Breadcrumb.Item>商品列表</Breadcrumb.Item>						    
				   </Breadcrumb>
				  
				    <div style={{ marginTop:20 }} className ="clearfix" > 
				        <Search
				          style = {{ float:'left' }}
				          style={{ width: 300 }}
					      placeholder="请输入商品关键词"
					      onSearch={keyword => {

					      	this.props.handleSearch(keyword)
					      }}
					      enterButton
					    />
	                   <Link to ='/product/save' style = {{ float:'right' }} >
	                     <button type="primary">新增商品</button>
	                   </Link>
                   </div>
                   <Table 
		               columns={columns} 
		               dataSource={data} 
		               pagination ={
		                  {
		                    current: this.props.current,
		                    defaultCurrent:this.props.current,
		                    pageSize:this.props.pageSize,
		                    total:this.props.total,
		                  }
		               } 
		           
		               onChange = {(Pagination)=>{		               	 
			               	if(keyword){
                                 this.props.handleSearch(keyword,Pagination.current) 
			               	}else{
			               		 this.props.handlePage(Pagination.current)
			               	}

		               	}}
		               loading = {
		                 {
		                 spinning: this.props.isPageFetching,
		                 tip:"正在请求数据"
		                 } 
		              }
		               /> 
		            <Modal
						title="修改分类名称"
						visible= {this.props.updateModalVisible}
						onOk={()=>{
							this.props.handleUpdateName(pid)
						}}
						onCancel={this.props.handleCloseUpdateModal}
						cancelText="取消"
						okText="确定"
					>
					<Input 
                      	value={this.props.updateName}	
                        onChange = {(e)=>{      
                           this.props.handleChangeName(e.target.value)
                        }}
					/>
					</Modal>	 
            	</div>
		)
	}
}

const mapStateToProps = (state)=>{
   return{
   	  keyword:state.get('product').get('keyword'),
      isPageFetching:state.get('product').get('isPageFetching'),
      current:state.get('product').get('current'),
      pageSize:state.get('product').get('pageSize'),
      total:state.get('product').get('total'),
      list:state.get('product').get('list'),
      updateModalVisible:state.get('product').get('updateModalVisible'),
      updateName:state.get('product').get('updateName'),
      
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  	    handleSearch:(keyword,page=1)=>{
            dispatch(actionCreator.getSearchAction(keyword,page));
  	    },

        handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page));
		},
		showUpdateModal:(updateId,updateName)=>{
			dispatch(actionCreator.getShowUpdateModelAction(updateId,updateName));
		},
		handleChangeName:(newName)=>{
			dispatch(actionCreator.getChangeNameAction(newName));
		},
        handleStatus:(id,newStart)=>{
            dispatch(actionCreator.getChangeStatusAction(id,newStart));
        },

	    
		handleCloseUpdateModal:()=>{
			dispatch(actionCreator.getCloseUpdateModalAction());
		},
		handleOrder:(pid,id,newOrder)=>{
			dispatch(actionCreator.getCloseUpdateModalAction(pid,id,newOrder));
		}
            
  }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);