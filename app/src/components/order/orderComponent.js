import React, {Component} from 'react'
import './order.scss'

export default class HomeComponent extends Component{
    render(){
        return (
            <div className="order">
                <p>订单</p>
                <ul>
                    <li><span>进行中</span></li>
                    <li><span>已结束</span></li>
                </ul>
                <div className="order_bg">
                    <div>
                        <img src="../../../assets/order_bg_logo.jpg" />
                    </div>
                    <p>暂无进行中订单</p>
                </div>
            </div>
        )
    }
}