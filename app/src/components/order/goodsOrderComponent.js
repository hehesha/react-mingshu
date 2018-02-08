import React, {Component} from 'react'
import './goodsOrder.scss'
import {Link} from 'react-router'

export default class goodsOrderComponent extends Component{
    render(){
        return (
            <div className="goodsorder">
                <div className="head">
                    <Link to=""><i className="chevron left icon" data-filtered="filtered"></i></Link>
                    <span>订单详情</span>
                </div>
                <div className="head_t">
                    <p>待确认</p>
                    <span>等待房东确认订单</span>
                    <i className="file outline icon" data-filtered="filtered"></i>
                </div>
                <div className="head_b">
                    您的订单已提交，正在等待房东确认
                </div>
                <div className="mains">
                    <div className="mains_t">
                        <div className="indent clearfix">
                                <img src="../../../assets/dali1.jpg"/>
                            <div className="indent_r">
                                <p>大理古城整棟独立房源,四室两厅大...</p>
                                <p>2018-03-01 至 2018-03-03</p>
                                <p>1套 共2晚</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mains_c">
                        <ul className="mains_c_t">
                            <li>
                                <span>房东：大理沐府客栈</span>
                                <span style={{color:"#F88B84"}}><i className="calendar outline icon" data-filtered="filtered" style={{color:"#F88B84"}}></i>联系房东</span>
                            </li>
                            <li>
                                <span>房东手机号</span>
                                <span style={{color:"#B5B5B5"}}>待入住显示</span>
                            </li>
                            <li>
                                <span>地址：榆路北段</span>
                                <span><i className="angle right icon" data-filtered="filtered" style={{color:"#B5B5B5"}}></i></span>
                            </li>
                        </ul>
                        <ul className="mains_c_t mains_c_b">
                            <li>
                                <span>交易信息</span>
                                <span style={{color:"#F88B84"}}>入住前7天可退</span>
                            </li>
                            <li>
                                <span>房款总额</span>
                                <span style={{color:"#B5B5B5"}}>￥1098.00</span>
                            </li>
                            <li>
                                <span>优惠券</span>
                                <span style={{color:"#F88B84"}}>-￥50.00</span>
                            </li>
                            <li>
                                <span>保险费用</span>
                                <span style={{color:"#B5B5B5"}}>+￥0.00</span>
                            </li>
                            <li>
                                <span>实付款</span>
                                <span>￥1048.00</span>
                            </li>
                            <li>
                                <span>入住日7天前中午12：00之前申请退款无违约金</span>
                                <span><i className="angle right icon" data-filtered="filtered" style={{color:"#B5B5B5"}}></i></span>
                            </li>
                        </ul>
                    </div>
                    <div className="mains_b">
                        <div className="mains_b_t">
                            <p>预留信息</p>
                            <p>预定人</p>
                            <p>
                                <span>手机号码</span>
                                <span>13539924625</span>
                            </p>
                        </div>
                    </div>
                    <div className="main_foot"></div>
                </div>
                <div className="payment">
                    <img src="../../../assets/quxiao.jpg"/>
                    <img src="../../../assets/zhifu.jpg"/>
                </div>
            </div>
        )
    }
}