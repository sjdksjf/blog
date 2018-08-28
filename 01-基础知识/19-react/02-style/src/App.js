import React, { Component } from 'react';

class App extends Component {
   constructor(props){
    	super(props);
    	this.state = {
            value:'',
    		list:[]
    	}
    }  
   hindadd(){
       this.setState({

       })
   }    
   hindChange(e){
       this.setState({

       })    
   }
   hindDelete(){
       
       const list = [...this.state.list];

       list.splice(index,1);
       this.setState({
       	    list:list
       })  

   }    



  render() {
    return (
        
         <div className="box"> 
            <input value={this.state.value} /> 
            <button onClick={this.hindadd.bind(this)} >提交</button>
            <ul>
                {
                	this.state.list.map((item,index)=>{
                		 return(
                              <li 
				                key={index} 
				                onClick={this.hindDelete.bind(this)}>
				                  {item}
				              </li>  
                		 	)
                	})
                }

            </ul>
         </div> 
              


    );
  }
}

export default App;
