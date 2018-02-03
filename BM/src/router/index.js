import React from 'react'
import {Route} from 'react-router'



//引入字体图标
import {Icon} from 'antd';
import 'antd/dist/antd.css';

import HomeComponent from '../components/home/homeComponent'
import RegisterComponent from '../components/register/registerCompoent'
import LoginComponent from '../components/login/loginComponent'
import ControlComponent from '../components/control/ControlComponent'

const routes = (
	<Route path="/" component={HomeComponent}>
		<Route path="/login" component={LoginComponent}></Route>
		<Route path="/register" component={RegisterComponent}></Route>
		<Route path="/control" component={ControlComponent}></Route>		
	</Route>
	
	
)
export default routes;