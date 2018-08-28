import React, { Component } from 'react';

import Item from './Item';
import Test from './Test';

class App extends Component {
   constructor(props){
    {/*调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
     super(props)的目的：在constructor中可以使用this.props*/}
    	super(props);
    	this.state = {
            value:'',
        		list:['11','bb']
    	}
    	  this.handDelete = this.handDelete.bind(this);
        this.handChange = this.handChange.bind(this);
        this.handadd = this.handadd.bind(this);
    }  
   handadd(){
   	this.setState((preState)=>(
   		{
          list:[...preState.list,preState.value],
          value:''       
       })
   	)
      
   }    
   handChange(e){
       const  value = e.target.value
       this.setState((preState)=>({
            value
       }))
  
   }
   handDelete(index){
       
       this.setState((preState)=>{
         const list = [...preState.list];
         list.splice(index,1);
         return {
            list
           }
       })  
   }    
 handFn(){
     return  this.state.list.map((item,index)=>{
                		 return(
                              <Item 
                              key={index} 
                              content={item} 
                              index ={index}                                  
                              handDelete ={this.handDelete}
                              />
                             
                		 	)
                	})
 }

  render() {
    console.log('App..')
    return (
        
         <div className="box"> 
            <input value={this.state.value} onChange={this.handChange} /> 
            <button onClick={this.handadd} >提交</button>
            <ul>
                {
                	this.handFn()
                }

            </ul>
         </div> 
              


    );
  }
}

export default App;
