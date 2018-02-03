import React, {Component} from 'react'
import './recommend.scss'

export default class HomeComponent extends Component{
    componentDidMount(){

    }  
    render(){
        return (
            <div className="recommend">
                <div className="head">
                    <div className="where_to_go">
                        想去哪?
                        <span>您要入住的城市或目的地</span>
                        <div className="searchs">
                            <i className="search icon" data-filtered="filtered"></i>
                            搜索目的地
                        </div>
                    </div>
                </div>
                <div className="mains">
                    <div className="rooms">
                        <span>一间房一种生活</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line"></div>
                    </div>
                    <div className="rooms">
                        <span>全国396个城市可预订</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/02.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <ul className="citys">
                            <li><a>上海</a></li>
                            <li><a>北京</a></li>
                            <li><a>成都</a></li>
                            <li><a>重庆</a></li>
                            <li><a>三亚</a></li>
                            <li><a>广州</a></li>
                            <li><a>杭州</a></li>
                            <li><a>苏州</a></li>
                            <li><a>武汉</a></li>
                            <li><a className="pitch_on">更多</a></li>
                        </ul>
                        <div className="parting_line">
                            全国396个城市300,000套房源等你来往
                        </div>
                    </div>
                    <div className="rooms">
                        <span>特色房源</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/03.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            公司年会，开Patty，租豪华别墅
                        </div>
                    </div>
                    <div className="rooms">
                        <span>房东故事</span>
                        <div className="photos">
                            <ul>
                                <li><img src="../../../assets/04.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                                <li><img src="../../../assets/01.jpg"/></li>
                            </ul>
                        </div>
                        <div className="parting_line parting">
                            东北房东遇到上海房东
                        </div>
                    </div>
                </div>
                <div className="foots"></div>
            </div>
        )
    }
}