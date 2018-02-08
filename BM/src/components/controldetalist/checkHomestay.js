import React,{Component} from 'react'
import { DatePicker,Input,Button} from 'antd';
import {connect} from 'react-redux'
import * as actions from './checkAction';

//自动调用，需要用到一个生命周期 componentWillMount
//把action挂载在props上了
class CheckHomestay extends Component{
	componentWillMount(){
		console.log(this.props.permission)
		this.props.getcheck()
		
	}
	deleteclick(hid){
		this.props.deletcheck(hid).then(function(){
			this.props.getcheck()
		}.bind(this))
	}
	insertclick(hid,src,address,budget,city){
		console.log(hid,src,address,budget,city);
		this.props.insertclick(src,address,budget,city).then(function(){
			alert('添加成功')
			this.deleteclick(hid)
		}.bind(this))
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
	               	 		{
             	 				this.props.ajaxResult.map(item =>{
             	 					return (
             	 						<li key={item.hid} className='checkli'>
											<img src={item.image_src}/>
											<p>民宿地址:<span>{item.address}</span></p>
											<p>预算价格:<span>{item.budget}</span></p>
											<p>所在城市:<span>{item.city}</span></p>
											<Button type="primary" onClick={this.insertclick.bind(this,item.hid,item.image_src,item.address,item.budget,item.city)}>审核过关</Button>
											<Button type="danger" onClick={this.deleteclick.bind(this,item.hid)}>审核不过关</Button>
											
				               	 		</li>
             	 					)
             	 				})
	               	 		}
           	 			
               	 		
               	 	</ul>
               	 </div>
			</div>
		)
	}
}
//接受ajax的状态，请求回来的东西，通过this.props.ajaxStatus获取请求回来的东西
let mapStateToProps = (state) =>{
//	console.log(state.loginReducer)//,给个判断，让请求中underfined的时候不报错
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news
	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(CheckHomestay);
