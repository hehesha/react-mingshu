import React,{Component} from 'react'
import { Progress,Button,Icon } from 'antd';

export default class GetPlanComponent extends Component{
	render(){
		return(
				<div className="controlBox">
	               	<div className="head">
	               	 	<h1>查看工作计划</h1>
	               	 	<p>在这里你可以看到你记录下来的工作计划,以及它们的进度条</p>
	               	 </div>
	               	 <div className="listbox">
	               	 	<ul className="clearfix">
	               	 		<li className="planlist">
	               	 			<h2>第一个工作任务<span className="fr">2018-01-03</span></h2>
	               	 			<p>任务内容:<span>我要成为世界上最可爱的女人,很酷很帅,能旋转跳跃飞舞的</span></p>
	               	 			<p>进度条:<Progress percent={50} status="active" /></p>
	               	 			<Button type="danger"><Icon type="close" />太难了,不干了</Button>
	               	 		</li>
	               	 		<li className="planlist">
	               	 			<h2>新年任务<span className="fr">2018-02-03</span></h2>
	               	 			<p>任务内容:<span>不要吃成一个大胖子,要快点写完项目,快点回家玩,我好寂寞好寂寞啊啊啊</span></p>
	               	 			<p>进度条:<Progress percent={80} status="active" /></p>
	               	 			<Button type="danger"><Icon type="close" />太难了,不干了</Button>
	               	 		</li>
	               	 	</ul>
	               	 </div>
				</div>
		)
	}
}