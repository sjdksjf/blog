import React, { Component } from 'react';

import Item from './Item';

class App extends Component {
   constructor(props){
    	super(props);
    	this.state = {
            value:'',
    		list:['11','22']
    	}
    }  
   handadd(){
       this.setState({
          list:[...this.state.list,this.state.value],
          value:''       
       })
   }    
   handChange(e){
       this.setState({
           value:e.target.value
       })    
   }
   handDelete(){
       
       const list = [...this.state.list];

       list.splice('index',1);
       this.setState({
       	    list:list
       })  
   }    


  render() {
    return (
        
         <div className="box"> 
            <input value={this.state.value} onChange={this.handChange.bind(this)} /> 
            <button onClick={this.handadd.bind(this)} >提交</button>
            <ul>
                {
                	this.state.list.map((item,index)=>{
                		 return(
                              <Item 
                              key={index} 
                              content={item} 
                              index ={index}                                  
                              handDelete ={this.handDelete.bind(this)}
                              />
                		 	)
                	})
                }

            </ul>
         </div> 
              


    );
  }
}

export default App;
