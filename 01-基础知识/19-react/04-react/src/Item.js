
import React,{ Component } from 'react';

class Item extends Component{

    handDelete(){
        //console.log(this.props.index);
        this.props.handDelete(this.props.index)
    } 
 
    render(){
    	 return( 
    	 <li onClick={this.handDelete.bind(this)}> 
    	   { this.props.content }
    	 </li>
    	 )
    }

}

export default Item;