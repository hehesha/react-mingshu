import React, {Component} from 'react'
import {Link} from 'react-router'

import cityLists from './city.js'
import './citys.scss'

export default class cityComponent extends Component{
    state = {
        A:[],
        B:[],
    }
    componentWillMount(){
        var cityList = [];
        var A = [];
        var B = [];
        cityLists.map(item=>{
            cityList.push(item.pinyin+','+item.name)
        })
        cityList = cityList.sort();
        cityList.map(item=>{
            if(item.charAt(0)=='A'){
                A.push(item)
            }
            if(item.charAt(0)=='B'){
                B.push(item)
            }
        })
            this.setState({A:A})
            this.setState({B:B})

    }
    componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 100 ? 'block' : 'none';
            }
        };
    }
    // 返回顶部
    scrollToTop = () => {
        window.scrollTo(0, 0);
    };  
    render(){
        return (
            <div>
                <div className="citys">
                    <div className="citys_t">
                        <div className="searchNav">
                            <i className="search icon" data-filtered="filtered"></i>
                            <Link to="/recommend"><span>取消</span></Link>
                            <input type="text" placeholder="请输入目的地城市/景点商圈"/>
                            <div id='allmap'></div>
                        </div>
                    </div>
                    <div className="citys_c">
                        <p>热门城市</p>
                        <ul className="clearfix">
                            <li>北京</li>
                            <li>成都</li>
                            <li>大连</li>
                            <li>广州</li>
                            <li>杭州</li>
                            <li>昆明</li>
                            <li>南京</li>
                            <li>秦皇岛</li>
                            <li>青岛</li>
                            <li>日照</li>
                            <li>三亚</li>
                            <li>厦门</li>
                            <li>上海</li>
                            <li>深圳</li>
                            <li>沈阳</li>
                            <li>苏州</li>
                            <li>天津</li>
                            <li>威海</li>
                            <li>武汉</li>
                            <li>西安</li>
                            <li>烟台</li>
                            <li>长沙</li>
                            <li>郑州</li>
                            <li>重庆</li>
                        </ul>
                    </div>
                    <ul className="city_location">
                        <li>全</li>
                        <li>部</li>
                        <li>城</li>
                        <li>市</li>
                        <a href="#A"><li>A</li></a>
                        <a href="#B"><li>B</li></a>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>N</li>
                        <li>P</li>
                        <li>Q</li>
                        <li>R</li>
                        <li>S</li>
                        <li>T</li>
                        <li>W</li>
                        <li>X</li>
                        <li>Y</li>
                        <li>Z</li>
                    </ul>
                    <div className="citylist">
                        <p id="A">A</p>
                        {
                            this.state.A.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                    <div className="citylist">
                        <p id="B">B</p>
                        {
                            this.state.B.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>

                </div>
                <div id="top_view" onClick={this.scrollToTop} className="back-top">
                    <img src="../../../../assets/fanhui.jpg"/>
                </div>
            </div>
        )
    }
}