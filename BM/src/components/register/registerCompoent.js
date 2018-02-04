import React,{Component} from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router'



export default class RegisterComponent extends Component{
	render(){

		return(
			<div className="userbox">
				<div className="snow-container">
					<div className="snow foreground"></div>
					<div className="snow foreground layered"></div>
					<div className="snow middleground"></div>
					<div className="snow middleground layered"></div>
					<div className="snow background"></div>
					<div className="snow background layered"></div>
				</div>
				<div className="form">
					<div className="fl">
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
					<div className="welcome fr">

						<span className="bigsize">J</span>oin in <span className="bigsize">H</span>omestay <span className="bigsize">M</span>aster
					</div>
					
				</div>			
			</div>
		)
    
	}
}
