import React,{Component} from 'react'
import { DatePicker,Input, Modal, Button} from 'antd';
import {connect} from 'react-redux'
import * as actions from './checkAction';
import $ from 'jquery';
//自动调用，需要用到一个生命周期 componentWillMount
//把action挂载在props上了
class CheckHomestay extends Component{
	state = {
		adminPermission:0,
		lazyLoad:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518105428615&di=f9050365179f55ade9f4c2e2d6749545&imgtype=0&src=http%3A%2F%2Fi2.wp.com%2Fpick.mydesy.com%2Fwp-content%2Fuploads%2F2016%2F09%2FPreloaders.gif%3Fresize%3D400%2C300'
	}
	componentWillMount(){
		this.setState({
			adminPermission:window.localStorage.Permission,
		})
		
		this.props.getcheck().then(function(){
			console.log(123);
			var loadImages = this.lazyload();
			loadImages();          
			window.addEventListener('scroll', loadImages, false);
			
		}.bind(this))
		
	}
	lazyload(){
		var images = document.getElementsByTagName('img');
		var len = images.length;
		var n = 0;
		return function(){
			var seeHeight = document.documentElement.clientHeight;
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			for(var i = n; i < len; i++) {
		    	if(images[i].offsetTop < seeHeight + scrollTop) {
		        	if(images[i].getAttribute('src') === 'images/loading.gif') {
			     		images[i].src = images[i].getAttribute('data-src');
					}
					n = n + 1;
		     }
			}
		}
	}
	error(){
		Modal.error({
			 title: '错误提示',
    		 content: '你不是又酷又帅气能旋转跳跃飞舞的鱼露，你没权操作'
		})
	}
	success(){
		Modal.success({
		    title: '温馨提示',
		    content: '你已经成功操作',
		});
	}
	deleteclick(hid){
		if(this.state.adminPermission==1){
			console.log(this.state.adminPermission);
			this.props.deletcheck(hid).then(function(){
				this.props.getcheck().then(function(){
					this.success();
					
				}.bind(this))
			}.bind(this))			
		}else{
			this.error();
		}
	}
	insertclick(hid,src,address,budget,city){
		if(this.state.adminPermission==1){
			this.props.insertclick(src,address,budget,city).then(function(){
				this.success();
//				this.deleteclick(hid)
			}.bind(this))			
		}else{
			this.error();
			
		}
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
											<img src={this.state.lazyLoad} data-src={item.image_src}/>
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
