import React,{Component} from 'react';

import { Form, Icon, Input, Button, Checkbox,Alert } from 'antd';
import {Link,browserHistory} from 'react-router'

export default class LoginComponent extends Component{
	state = {
		username:'',
		password:'',
		display:'none',
		repeat:'none',
	}
	changeA(){
		this.setState({
			username:this.refs.username.value,
			password:this.refs.password.value
		})
	}
	checklogin(){
		var reg=/^[a-zA-Z]{3,7}$/;   
		
		if(reg.test(this.refs.username.value)==true){
			this.setState({
				display:'none'
			})
		}else{
			this.setState({
				display:'block'
			})
		}
	}
	login(){
		console.log(this.state.username,this.state.password);
		
	}
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
							<input type="text"  placeholder="please write.." ref="username" onChange={this.changeA.bind(this)} onBlur={this.checklogin.bind(this)}/>
						</p>
						<div style={{display:this.state.display}}>
							<Alert message="请输入3-7位的纯英文字母" type="error" showIcon/>
						</div>
						<p>
							<label>password:</label>
							<input type="password"  placeholder="please write.." ref="password" onChange={this.changeA.bind(this)}/>
						</p>
						<p>
							<Button type="primary"><Icon type="key" />Login</Button>
							<Link to='/register'>new employee?</Link>
						</p>
					</div>
					<div className="welcome fr">
						<span className="bigsize">W</span>elcome to <span className="bigsize">H</span>omestay <span className="bigsize">M</span>aster
						
					</div>
					
				</div>			
			</div>
		)
    
	}
}
