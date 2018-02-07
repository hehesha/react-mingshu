import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import './searchHotel.scss'
import * as actions from '../../actions/strategyAction.js';

class SearchhotelComponent extends Component{
    componentWillMount(){
        var city="广州",
        city=encodeURI(city)
        this.props.gethotel(city)
    }
    render(){
        return (
            <div className="searchhotel">
                <header className="h_header">
                    <i className="angle left icon" onClick={()=>hashHistory.goBack()}></i>
                    <div className="search">
                        <div className="location">
                            <input type="text" value="大理"/>
                            <i className="caret down icon"></i>
                        </div>
                        <div className="find">
                             <i className="search icon"></i>
                             <input type="text" value="搜索景点/商圈/关键字"/>
                        </div>
                    </div>
                    <i className="marker icon"></i>
                </header>
                <nav className="h_nav">
                    <dl>
                        <dt>入住日期</dt>
                        <dd>选择日期</dd>
                    </dl>
                    <dl>
                        <dt>位置区域</dt>
                        <dd>选择位置</dd>
                    </dl>
                    <dl>
                        <dt>推荐排序</dt>
                        <dd>默认排序</dd>
                    </dl>
                    <dl>
                        <dt>更多筛选</dt>
                        <dd>选择条件</dd>
                    </dl>
                </nav>
                <main className="h_main">
                        {this.props.ajaxResult.map(item=>{
                            return (
                                <div className="hcontent" key={item.hid}>
                                    <div className="pic">
                                        <img src={item.image_src} />
                                        <span>￥{item.price}</span>
                                        
                                    </div>
                                    <dl>
                                        <dt className="clearfix">
                                            <p>{item.title}</p><span>5.0</span>
                                        </dt>
                                        <dd className="clearfix">
                                            <p>整租-民宿-宜住8人 <b>{item.city}</b></p><span>{item.talk}条评价</span>
                                        </dd>
                                    </dl>
                                </div>
                                )
                        })}
                        
                    
                    <span onClick={this.props.gethotel.bind(this,"广州")}>加载更多</span>
                </main>
                 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        
        ajaxStatus: state.hotellist.status,
        ajaxResult: state.hotellist.result || []
    }
}

export default connect(mapStateToProps, actions)(SearchhotelComponent);
