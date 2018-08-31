import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'common/layout';


class ProductList extends Component {
	
	render(){
		

		return (
               <div>
                  <Link to="/product/save">新增商品</Link>  
               </div>
		)
	}
}



export default ProductList;