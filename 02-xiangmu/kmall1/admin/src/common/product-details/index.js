import React,{ Component } from 'react';
import Simditor from 'simditor';

import $ from 'jquery';

import 'simditor/styles/simditor.css'


class UploadSimditor extends Component {
       constructor(props){
           super(props);
           this.state = {
           	   isLoaded : false
           }
           this.toolbal =[
				  'title',
				  'bold',
				  'italic',
				  'underline',
				  'strikethrough',
				  'fontScale',
				  'color',
				  'ol',            
				  'ul',            
				  'blockquote',
				  'code',          
				  'table',
				  'link',
				  'image',
				  'hr',             
				  'indent',
				  'outdent',
				  'alignment',
			]
           
			$.ajaxSetup({
				 xhrFields: {
			        withCredentials: true
			    },	    
			})
			
       }

	componentDidMount(){

	   this.editor = new Simditor({
			  textarea: this.textarea,
          	  toolbar:this.toolbal,
          	  upload:{
          	  	 url:this.props.url,
          	  	 filekey:'upload'
          	  }
			});
	   /*
      this.editor.on('valuechanged',()=>{
      	  this.setState({
         	  	  isLoaded:true
         	  },()=>{
	             this.props.getRichEditorValue(this.editor.getValue())
         	  })
       }) 
       */ 
	}
	/*
	componentDidMount(){
         if(this.props.detail && !this.state.isLoaded){
         	  this.editor.setValue(this.props.detail)
         	  this.setState({
         	  	  isLoaded:true
         	  })
         }
	}
  */
    render(){
      
        return (
              <div>
                 <textarea ref={(textarea)=>{this.textarea = textarea}}></textarea>
           	  </div>	
        	)

     }
 }

 export default UploadSimditor;	