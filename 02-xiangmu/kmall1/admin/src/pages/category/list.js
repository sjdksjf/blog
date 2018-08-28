import React,{ Component } from 'react';
import { Link } from 'react-router-dom';



class CategoryList extends Component {
	render(){
		return (
               <div>
                   <Link to ='/category/add'>
                     <h3>去增加界面</h3>
                   </Link>
            	</div>
			)
	}
}

export default CategoryList;