import React,{Component} from 'react'
import { DatePicker,Input,Button} from 'antd';
import './../control/control.scss'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class SetPlanComponent extends Component{
	onChange(date,dateString){
		console.log(date,dateString);
	}
	render(){
		return(
				<div className="controlBox">
	               	 <div className="head">
	               	 	<h1>计划表单</h1>
	               	 	<p>你可以在这里制定你的工作计划</p>
	               	 </div>
	               	 <div className="form">
	               	 	<p>
							<label>标题：</label>
							
							<Input placeholder="给目标起个名字" />
						</p>
						<p>
							<label>起止日期:</label>
							<br />
    						<RangePicker onChange ={this.onChange}/>
						</p>
						<p>
							<label>目标描述:</label>
							
							
							<textarea rows="5" cols="30"></textarea>
							
						</p>
						<Button type="primary">提交</Button>
	               	 </div>
				</div>
		)
	}
}
