import React, { Component } from 'react';

import Item from './Item';
import axios from 'axios';

class App extends Component {
   constructor(props){
     console.log('App constructor...')
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
  
  static getDerivedStateFromProps(nextProps, prevState){
     console.log('App..',nextProps, prevState)
     if(nextProps.value == 1){
        return(111) 
     }else{
       return(['bb,cc'])
     }
  }

  shouldComponentUpdate(nextProps, nextState){
    return  true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('App1..',prevProps, prevState) 
  }

  componentDidUpdate(prevProps, prevState,snapshot){
    console.log('App1..',prevProps, prevState,snapshot)
  }

  componentDidMount(){
    axios
    .get('http://127.0.0.1:3000/api/getData')
    .then((data)=>{
      console.log(data)
    })
    .catch((e)=>{
      console.log("err",e)
    })
  }
  

   handadd(){
    //console.log(this.ul)
   	this.setState((preState)=>(
   		{
          list:[...preState.list,preState.value],
          value:''       
       })
   	)
      
   }    
   handChange(e){
       //console.log(this.input)
       //const  value = e.target.value
       const  value = this.input.value
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
    console.log('App.. render')
    return (
        
         <div className="box"> 
            <input 
            value={this.state.value} 
            onChange={this.handChange} 
            ref={(input)=>{
               this.input = input;
            }}
            /> 
            <button onClick={this.handadd} >提交</button>
            <ul ref={(ul)=>{
               this.ul = ul
            }}>
                {
                	this.handFn()
                }

            </ul>
         </div> 
              


    );
  }
}

export default App;
