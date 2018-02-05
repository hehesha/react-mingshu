import React, {Component} from 'react'

import './citys.scss'

export default class cityComponent extends Component{
    state = {
        A:[],
        B:[]
    }
    componentWillMount(){
        var self = this;
        var status = [200,304];
        var cityList = [];
        var citys= new Promise((resolve,reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(status.includes(xhr.status)){
                    var city = JSON.parse(xhr.responseText);
                    console.log(city)
                    city.map(item=>{
                        resolve(cityList.push(item.pinyin+','+item.name))
                    })
                }else{
                    reject('请求失败');
                }
            }
            xhr.open('get','http://localhost:3002/src/city.json',true);
            xhr.send();
        });
        citys.then(function(){
            cityList = cityList.sort();
            var A=[];
            var B=[];
            cityList.map(item=>{
                if(item.charAt(0)=="A"){
                    A.push(item) 
                }
                if(item.charAt(0)=="B"){
                    B.push(item) 
                }
            })
            self.setState({A:A})
            self.setState({B:B})
        })
    }
    render(){
        return (
            <div>
                <div className="citys">
                    <div className="citys_t"></div>
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
                        <li>A</li>
                        <li>B</li>
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
                        <p className="">A</p>
                        {
                            this.state.A.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                        <p className="">B</p>
                        {
                            this.state.B.map(function(item,idx){
                                return <p key={idx}>{item.split(',')[1]}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}