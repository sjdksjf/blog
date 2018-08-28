import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'common/layout';
import CategoryList from './list.js';
import CategoryAdd  from './add.js';
class Category extends Component {
	render(){
		return(
			<div>
				<Layout>
	               <Switch>
	                   <Route path ='/category/add' component = { CategoryAdd } />
	                   <Route path ='/category' component = { CategoryList } />
	               </Switch>
               </Layout>
            </div>
			)
	}
}

export default Category;