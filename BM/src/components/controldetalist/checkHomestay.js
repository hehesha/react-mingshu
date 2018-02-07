import React,{Component} from 'react'
import { DatePicker,Input,Button} from 'antd';
import {connect} from 'react-redux'
import * as actions from './checkAction';

//自动调用，需要用到一个生命周期 componentWillMount
//把action挂载在props上了
class CheckHomestay extends Component{
	componentWillMount(){
		this.props.getcheck()
	}
	render(){
		return(
				<div className="controlBox">
	               	 <div className="head">
	               	 	<h1>申请列表</h1>
	               	 	<p>这里可以查看和审核业主租房申请,如果经过核实为真实信息,可以批准,并加入到民宿列表</p>
	               	 </div>
	               	 <div className="listbox">
	               	 	<ul className="clearfix">
	               	 		<li>
								<img src="https://image.xiaozhustatic1.com/12/12,0,98,8880,1800,1200,d6d22b18.jpg"/>
								<p>民宿地址:<span>广州长隆欢乐世界</span></p>
								<p>预算价格:<span>88元</span></p>
								<p>所在城市:<span>广州</span></p>
								<Button type="primary">审核过关</Button>
								<Button type="danger">审核不过关</Button>
								
	               	 		</li>
	               	 		<li>
								<img src="https://image.xiaozhustatic1.com/12/12,0,98,8880,1800,1200,d6d22b18.jpg"/>
								<p>民宿地址:<span>广州长隆欢乐世界</span></p>
								<p>预算价格:<span>88元</span></p>
								<p>所在城市:<span>广州</span></p>
								<Button type="primary">审核过关</Button>
								<Button type="danger">审核不过关</Button>
								
	               	 		</li>
	               	 		<li>
								<img src="https://image.xiaozhustatic1.com/12/12,0,98,8880,1800,1200,d6d22b18.jpg"/>
								<p>民宿地址:<span>广州长隆欢乐世界</span></p>
								<p>预算价格:<span>88元</span></p>
								<p>所在城市:<span>广州</span></p>
								<Button type="primary">审核过关</Button>
								<Button type="danger">审核不过关</Button>
								
	               	 		</li>
	               	 	</ul>
	               	 </div>
				</div>
		)
	}
}
//接受ajax的状态，请求回来的东西
let mapStateToProps = (state) =>{
	return{
		ajaxStatus:state.status,
		ajaxResult:state.result
	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(CheckHomestay);
