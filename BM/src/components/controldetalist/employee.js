import React,{Component} from 'react'
import { Button,Icon,Rate } from 'antd';

import {connect} from 'react-redux'
import * as actions from './employeeAction';

class Employee extends Component{
	componentWillMount(){
		this.props.getadmin()
	}
	render(){
		return(
				<div className="controlBox">
					<div className="head">
						<h1>在职员工信息</h1>
	               	 	<p>你可以查看到先公司的在员工信息,,以及他们的权限</p>
					</div>
	               	 <div className="listbox">
	               	 	<table>
	               	 		<thead>
               	 				<tr>
               	 					<th>工号</th>
               	 					<th>人员</th>
               	 					<th>权限</th>
               	 					<th>评分</th>
               	 					<th>操作</th>
               	 				</tr>
	               	 		</thead>
	               	 		<tbody>
	               	 			{
	               	 				this.props.ajaxResult.map(item => {
	               	 					return (
	               	 						<tr key={item.aid}>
			               	 					<td>{item.aid}</td>
			               	 					<td>{item.username}</td>
			               	 					<td>{item.permission}</td>
			               	 					<td><Rate disabled defaultValue={item.rate} /></td>
			               	 					<td>
			               	 						<Button type="danger"><Icon type="close" />解雇</Button>
			               	 					</td>
			               	 				</tr>
	               	 					)
	               	 				})
	               	 			}
               	 				
               	 			</tbody>
	               	 	</table>
	               	 </div>
				</div>
		)
	}
}
let mapStateToProps = (state) =>{
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news
	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(Employee);