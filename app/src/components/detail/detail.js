import React, {Component} from 'react'
import './detail.scss'

export default class HomeComponent extends Component{
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