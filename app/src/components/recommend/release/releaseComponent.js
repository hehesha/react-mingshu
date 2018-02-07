import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../../../actions/strategyAction.js';

import './release.scss'
class releaseComponent extends Component{
    componentWillMount(){
        this.props.getstrategy()
    }
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
                                <input type="text" placeholder="请输入城市"/>
                            </li>
                            <li>
                                <span>区域</span>
                                <input type="text" placeholder="请选择区域"/>
                            </li>
                        </ul>
                        <div className="timeout">
                            <p>入住离店日期</p>
                            <input placeholder="请输入入住和离店日期"/>
                        </div>
                    </div>
                    <div className="mains_b">
                        <p>房源户型</p>
                        <ul>
                        <li><label><input type="radio" name="room"/>1室</label></li>
                        <li><label><input type="radio" name="room"/>2室</label></li>
                        <li><label><input type="radio" name="room"/>3室</label></li>
                        <li><label><input type="radio" name="room"/>4室以上</label></li>
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

let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.strategylist.status,
        ajaxResult: state.strategylist.result || []
    }
}

export default connect(mapStateToProps, actions)(releaseComponent);