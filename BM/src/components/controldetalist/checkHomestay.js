import React,{Component} from 'react'
import { DatePicker,Input,Button} from 'antd';

export default class CheckHomestay extends Component{
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