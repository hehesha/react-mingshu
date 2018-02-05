import React,{Component} from 'react';
import { Row, Col ,Menu, Icon} from 'antd';
import './control.scss';
import {Link} from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class ControlComponent extends Component{
	handleClick = (e) => {
	    console.log('click ', e);
	  }
	render(){
		return(
			 <Row>
			    <Col xs={12} sm={10} md={7} lg={6} xl={5}>
			    	<Menu
				        onClick={this.handleClick}
				        style={{ width: 256 }}
				        defaultSelectedKeys={['1']}
				        defaultOpenKeys={['sub1']}
				        mode="inline"
				      >
				        <SubMenu key="sub1" title={<span><Icon type="form" /><span>工作台</span></span>}>
					        <Menu.Item key="1"><Link to="/control/setplan">制定工作计划</Link></Menu.Item>
					        <Menu.Item key="2"><Link to="/control/check">审核业主信息</Link></Menu.Item>
				        </SubMenu>
				        <SubMenu key="sub2" title={<span><Icon type="area-chart" /><span>详情页</span></span>}>
				          	<Menu.Item key="5"><Link to="/control/getplan">工作计划</Link></Menu.Item>
				        <SubMenu key="sub3" title="分析页">
				            <Menu.Item key="7"><Link to="/control/sell">营业状态</Link></Menu.Item>
				            <Menu.Item key="8"><Link to="/control/goodtalk">好评率</Link></Menu.Item>
				        </SubMenu>
				        </SubMenu>
				        <SubMenu key="sub4" title={<span><Icon type="team" /><span>员工详情</span></span>}>
				          <Menu.Item key="9"><Link to="/control/employee">在职员工</Link></Menu.Item>
				          <Menu.Item key="10"><Link to="/control/performance">员工绩效</Link></Menu.Item>
				        </SubMenu>
				     </Menu>
			    	
			    </Col>
			    <Col xs={12} sm={14} md={13} lg={10} xl={14}>
			    	{this.props.children}
			    </Col>
			    
			 </Row>
		)
	}
}
