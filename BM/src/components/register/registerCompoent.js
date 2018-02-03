import React,{Component} from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router'

export default class RegisterComponent extends Component{
	render(){

		return(
			<div className="form">
				<p>
					<label>username:</label>
					<input type="text"  placeholder="please write.."/>
				</p>
				<p>
					<label>password:</label>
					<input type="password"  placeholder="please write.."/>
				</p>
				<p>
					<Button type="primary"><Icon type="usergroup-add" />Register</Button>
					<Link to='/login'>already have?</Link>
				</p>
				
			</div>			
		)
    
	}
}
