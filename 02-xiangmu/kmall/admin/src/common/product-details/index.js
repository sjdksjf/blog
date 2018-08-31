import React,{ Component } from 'react';
import Simditor from 'simditor';

import $ from 'jquery';

import 'simditor/styles/simditor.css'


class UploadSimditor extends Component {
       constructor(props){
           super(props);

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
       editor.onValuechanged =(e, src)=>{
       	 console.log('simditor valuechanged')
       }
       */
	}
    render(){
      


        return (
              <div>
                 <textarea ref={(textarea)=>{this.textarea = textarea}}></textarea>
           	  </div>	
        	)

     }
 }

 export default UploadSimditor;	