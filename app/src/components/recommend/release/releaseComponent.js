import React, {Component} from 'react'
import {Link} from 'react-router'

import './release.scss'
export default class releaseComponent extends Component{

    render(){
        return (
            <div className="release">
                <div className="head">
                <Link to="/recommend"><i className="chevron left icon" data-filtered="filtered"></i></Link>
                </div>
                <div className="mains">
                    <div className="mains_t clearfix">
                        <Link to="release"><span>发布求租</span></Link>
                        <Link to="myRelease"><span>我的求租</span></Link>
                        <i className="file outline icon" data-filtered="filtered"></i>
                    </div>
                    <div className="mains_c">
                        <ul className="clearfix">
                            <li>
                                <span>城市</span>
                                <p>请选择城市</p>
                            </li>
                            <li>
                                <span>区域</span>
                                <p>请选择区域</p>
                            </li>
                        </ul>
                        <div className="timeout">
                            <p>入住离店日期</p>
                            <p>请选择入住和离店日期</p>
                        </div>
                    </div>
                    <div className="mains_b">
                        <p>房源户型</p>
                        <ul>
                            <li>1室</li>
                            <li>2室</li>
                            <li>3室</li>
                            <li>4室以上</li>
                        </ul>
                        <div className="mains_b_room">
                            <p><span>入住人数</span></p>
                            <p><span>房间套数</span></p>
                        </div>
                        <div className="mains_b_price">
                            <span>请输入您的期望价格-必填</span>
                        </div>
                    </div>
                </div>
                <div className="release1"><img src="../../../../assets/release1.png"/></div>
            </div>
        )
    }

}