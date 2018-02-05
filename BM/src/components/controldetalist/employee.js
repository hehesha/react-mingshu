import React,{Component} from 'react'
import { Button,Icon } from 'antd';

export default class Employee extends Component{
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
               	 					<th>操作</th>
               	 				</tr>
	               	 		</thead>
	               	 		<tbody>
               	 				<tr>
               	 					<td>1</td>
               	 					<td>boa</td>
               	 					<td>1</td>
               	 					<td>
               	 						<Button type="danger"><Icon type="close" />解雇</Button>
               	 					</td>
               	 				</tr>
               	 				<tr>
               	 					<td>2</td>
               	 					<td>鱼露</td>
               	 					<td>0</td>
               	 					<td>
               	 						<Button type="danger"><Icon type="close" />解雇</Button>
               	 					</td>
               	 				</tr>
               	 			</tbody>
	               	 	</table>
	               	 </div>
				</div>
		)
	}
}