import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//自己定义的组建首字母必须大写
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
	<App />
    </Provider> 
	, document.getElementById('root'));
//registerServiceWorker();
