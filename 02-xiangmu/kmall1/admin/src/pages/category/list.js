import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb,Button,Table,Divider,InputNumber,Modal,Input } from 'antd';
import { connect } from 'react-redux';

import { actionCreator } from './store';
import Layout from 'common/layout';


class CategoryList extends Component {
	constructor(props){
       super(props);
       this.state = {
       	  pid: this.props.match.params.pid || 0
       }
	}
	componentDidMount(){
		//第一个参数是父级ID,第二个参数是页码
		this.props.handlePage(this.state.pid,1);
	}
	componentDidUpdate(preProps,preStart){
        
        let proPath = preProps.location.pathname;
        let newPath = this.props.location.pathname;
        if(proPath != newPath ){
        	let newPid = this.props.match.params.pid || 0;
        	this.setState({
        		 pid:newPid
        	},()=>{
        		this.props.handlePage(newPid,1);
        	})
        }
	}
	render(){
		const pid = this.props.match.params.pid || 0;
		const columns = [
            {
			  title: 'ID',
			  dataIndex: 'id',
			  key: 'id',
			},
		    {
			  title: '分类名称',
			  dataIndex: 'name',
			  key: 'name',
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
					  <a href="javascript:;"
					  	onClick={()=>{
					  		this.props.showUpdateModal(record.id,record.name)
					  	}}
					  >
					  	更新名称
					  </a>
					  {
					  	record.pid == 0
					  	? (<span>
					  		 <Divider type="vertical" />
					  		 <Link to={"/category/"+record.id} >查看子分类</Link>
					  		</span> )
					  	: null
					  }
					 
					</span>
			  ),
			}];


//map 方法把 得到的数据（对象）转化为数组

        const data  = this.props.list.map((category)=>{
			return {
				key:category.get('_id'),
				id:category.get('_id'),
				name:category.get('name'),
				order:category.get('order'),
				pid:category.get('pid'),
			}
		}).toJS();	

		return (
               <div>
                   <Breadcrumb>
						<Breadcrumb.Item>分类管理</Breadcrumb.Item>
						<Breadcrumb.Item>分类列表</Breadcrumb.Item>						    
				   </Breadcrumb>
				  
				    <div style={{ marginTop:20 }} className ="clearfix" > 
				        <h3 style = {{ float:'left' }}>级别ID:{ pid } </h3>
				  
	                   <Link to ='/category/add' style = {{ float:'right' }} >
	                     <button type="primary">新增分类</button>
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
		                    total:this.props.total
		                  }
		               } 
		           
		               onChange = {(Pagination)=>{
		                 this.props.handlePage(pid,Pagination.current)
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
      isPageFetching:state.get('category').get('isPageFetching'),
      current:state.get('category').get('current'),
      pageSize:state.get('category').get('pageSize'),
      total:state.get('category').get('total'),
      list:state.get('category').get('list'),
      updateModalVisible:state.get('category').get('updateModalVisible'),
      updateName:state.get('category').get('updateName'),
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
        handlePage:(pid,page)=>{
			dispatch(actionCreator.getPageAction(pid,page));
		},
		showUpdateModal:(updateId,updateName)=>{
			dispatch(actionCreator.getShowUpdateModelAction(updateId,updateName));
		},
		handleChangeName:(newName)=>{
			dispatch(actionCreator.getChangeNameAction(newName));
		},
		handleUpdateName:(pid)=>{
			dispatch(actionCreator.getUpdateNameAction(pid));
		},
		handleCloseUpdateModal:()=>{
			dispatch(actionCreator.getCloseUpdateModalAction());
		},
		handleOrder:(pid,id,newOrder)=>{
			dispatch(actionCreator.getCloseUpdateModalAction(pid,id,newOrder));
		}
             
  }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);