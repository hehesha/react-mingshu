import React,{Component} from 'react'
import { Rate } from 'antd';

export default class Performance extends Component{
	state = {
		value: 3,
	}
	handleChange = (value) => {
		this.setState({ value });
	}
	render(){
		const { value } = this.state;
		return(
			<div className="controlBox">
               	<div className="head">
					<h1>员工评分</h1>
               	 	<p>对所有在职的员工进行评分</p>
				</div>
				<div>
					<table className="rbox">
						<thead>
							<tr>
								<th>员工</th>
								<th>评分</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>boa</td>
								<td>
									<span>
								        <Rate onChange={this.handleChange} value={value} />
								        {value && <span className="ant-rate-text">{value} stars</span>}
								     </span>
								</td>
							</tr>
						</tbody>
					</table>
					 
				</div>
			</div>
		)
	}
}