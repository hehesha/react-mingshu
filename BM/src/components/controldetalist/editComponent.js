import React,{Component} from 'react'
import { Button,Icon,Rate,Pagination } from 'antd';

import {connect} from 'react-redux'
import * as actions from './editAction';

class EditComponent extends Component{
	componentWillMount(){
		this.props.selectPage()
	}
	state = {
		current:1
	}
	onChange = (page) => {
   		this.setState({
      	current: page,
    });
    this.props.selectPage(page);
  }
	delclick(hid){
//		console.log(hid);
		this.props.deleteHomestray(hid).then(function(){
			this.props.selectPage(this.current)
		}.bind(this))
	}
	editTab(event){
		if(event.target.tagName=='TD'&&event.target.className==''){
			console.log(event.target);
			let input = document.createElement('input');
            input.type = 'text';
            input.value = event.target.innerText;
			event.target.innerHTML = '';
            event.target.appendChild(input);

            

		}
	}
	render(){
		return(
			<div className="controlBox">
				<div className="head">
					<h1>编辑民宿信息</h1>
               	 	<p>你可以在这里修改已上线的民宿信息,或者删除信息错误的民宿</p>
				</div>
				 <Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={170} />
               	 
               	 <div className="listbox">
               	 	<table>
               	 		<thead>
           	 				<tr>
           	 					<th>序号</th>
           	 					<th>酒店名称</th>
           	 					<th>价格</th>
           	 					<th>城市</th>
           	 					<th>操作</th>
           	 				</tr>
               	 		</thead>
               	 		<tbody onClick={this.editTab.bind(this)}>
               	 			{
               	 				this.props.ajaxResult.map((item,idx) => {
               	 					return (
               	 						<tr key={item.hid}>
		               	 					<td className='idx'>{idx+1}</td>
		               	 					<td>{item.title}</td>
		               	 					<td>{item.price}</td>
		               	 					<td>{item.city}</td>
		               	 					<td className="button">
		               	 						<Button type="primary"><Icon type="check" />保存</Button>
		               	 						<Button type="danger"  onClick={this.delclick.bind(this,item.hid)}><Icon type="close" />删除</Button>
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
export default connect(mapStateToProps,actions)(EditComponent);