import React, {Component} from 'react'
import './detail.scss'

export default class HomeComponent extends Component{
    componentWillMount(){
        console.log(this.props.location.query.id)
        
    }
    render(){
        return (
            <div className="detail">
                 <div className="photos">
                    <ul>
                        <li><img src="../../../assets/02.jpg"/></li>
                        <li><img src="../../../assets/03.jpg"/></li>
                    </ul>
                </div>
                <p className="price">￥320</p>
                <div className="detail_title">
                    <p>
                        <span>公寓--整套出租--55m²</span>
                        <i className="photo icon"></i>
                        <span>实拍</span>
                        <i className="check circle outline icon"></i>
                        <span>验真</span>
                    </p>
                    <p>新街口地铁口浪漫北欧ins风床上风光秀套房</p>
                </div>
                <div className="detail_data1">
                    <div className="bg">MUNIAO</div>
                    <p>
                        <i className="add to cart icon"></i>
                        <span>整套出租</span>
                        <br/>
                        <span>公寓 1室1厅 房间面积50m²</span>
                    </p>
                    <p>
                        <i className="send outline icon"></i>
                        <span>宜住4人</span>
                        <br/>
                        <span>独享整套房源 1个卫生间</span>
                    </p>
                    <p>
                        <i className="write square icon"></i>
                        <span>共两张</span>
                        <br/>
                        <span>双人床</span>
                    </p>
                </div>
                <div className="detail_data2">
                    <div>
                        <img src='../../../assets/order_bg_logo.jpg'/>
                    </div>
                    <div>
                        <p>王伟琳</p>
                        <span>实名认证.个人房东</span>
                    </div>
                    <div>
                        <i className="comment outline icon"></i>
                        <span>在线联系</span>
                    </div>
                </div>
                <div className="detail_data3">
                    <p>房源描述</p>
                    <span>好空间啊哈空间撒活动空间啊号地块的凯撒凯撒好看撒好萨科技活动空间撒好撒哈萨克号多少啊空间撒好</span>
                    <div className="show_pto">
                        <div>
                            <p>
                                <i className="photo icon"></i>
                            </p>
                            <p>7张房源图片</p>
                        </div>
                        <div>
                            <p>
                                <i className="travel icon"></i>
                            </p>
                            <p>最少订一晚</p>
                        </div>
                        <div>
                            <p>
                                <i className="file text outline icon"></i>
                            </p>
                            <p>房东要求</p>
                        </div>
                    </div>
                    <div className="other_commons">
                        <p>
                            <span>评价</span>
                            <span>(1)</span>
                            <span>
                                <i className="star icon"></i>
                                <i className="star icon"></i>
                                <i className="star icon"></i>
                                <i className="star icon"></i>
                                <i className="star icon"></i>
                            </span>
                            <span>全部评价</span>
                        </p>
                        <div className="commons_content">
                            <div>
                                <img src="../../../assets/order_bg_logo.jpg" />
                            </div>
                            <span>非常赞(☄⊙ω⊙)☄</span>
                        </div>
                    </div>
                </div>
                <div className="guide">
                    <p>出行指南</p>
                    <div className="how_guide">
                        <div>
                            <p>乘车路线</p>
                            <p>查看路线</p>
                        </div>
                        <div>
                            <p>乘车路线</p>
                            <p>查看路线</p>
                        </div>
                        <div>
                            <p>乘车路线</p>
                            <p>查看路线</p>
                        </div>
                        <div>
                            <p>乘车路线</p>
                            <p>查看路线</p>
                        </div>
                    </div>
                </div>
                <div className="map">放地图的位置</div>
                <div className="service">
                    <p>
                        <span>配套设施</span>
                        <span>全部17项</span>
                    </p>
                    <div className="service_detail">
                        <div>
                            <i className="wifi icon"></i>
                            <p>无线宽带</p>
                        </div>
                        <div>
                            <i className="television icon"></i>
                            <p>有线电视</p>
                        </div>
                        <div>
                            <i className="plug icon"></i>
                            <p>电视</p>
                        </div>
                        <div>
                            <i className="coffee icon"></i>
                            <p>全天热水</p>
                        </div>
                        <div>
                            <i className="game icon"></i>
                            <p>空调</p>
                        </div>
                    </div>
                </div>
                <div className="required">
                    <div>
                        <p>入住需知</p>
                        <p>
                            <span>14:00</span>
                            <span>最早入住时间</span>
                            <span>当日14点</span>
                        </p>
                        <p>
                            <span>12:00</span>
                            <span>最晚退房时间</span>
                            <span>当日12点</span>
                        </p>
                    </div>
                    <div>
                        <span>身份证</span>
                        <span>需要</span>
                    </div>
                    <div>
                        <span>押金</span>
                        <span>线下收取￥330</span>
                    </div>
                    <div>
                        <p>
                            <span>卫生间</span>
                            <span>详情</span>
                        </p>
                        <p>
                            <span>规定及收费</span>
                            <span>查看</span>
                        </p>
                    </div>
                    <div>
                        <span>退款协议：</span>
                        <span>不支持退款</span>
                        <span>详情</span>
                    </div>
                </div>
                <div className="white_space"></div>
                <div className="detail_navigation">
                    <div>
                        <i className="call icon"></i>
                        <span>电话联系</span>
                    </div>
                    <div>
                        <p>￥330</p>
                        <p>当日价格</p>
                    </div>
                    <div>
                        <button className="ui button">立即预定</button>
                    </div>
                </div>
            </div>
        )
    }

}
