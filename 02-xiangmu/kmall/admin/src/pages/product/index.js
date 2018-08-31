import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'common/layout';
import ProductList from './list.js';
import ProductSave  from './save.js';
class Product extends Component {
	render(){
		return(
			<div>
				<Layout>
	               <Switch>
	                   <Route path ='/Product/save' component = { ProductSave } />
	                   <Route path ='/Product' component = { ProductList } />
	               </Switch>
               </Layout>
            </div>
			)
	}
}

export default Product;