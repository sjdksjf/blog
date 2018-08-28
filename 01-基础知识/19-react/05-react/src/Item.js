
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component{

    constructor(props){
        super(props);
        this.handDelete=this.handDelete.bind(this)  
    }
    
    shouldComponentUpdate(nextProps, nextState){
          return  true
    }

    handDelete(){
        //console.log(this.props.index);
        this.props.handDelete(this.props.index)
    } 
 
    render(){
        //console.log('aa')
    	 return( 
    	 <li onClick={this.handDelete}> 
    	   { this.props.content }
    	 </li>
    	 )
    }

}
 Item.propTypes = {
       index: PropTypes.number.isRequired,
       content:PropTypes.string.isRequired,
    };

export default Item;