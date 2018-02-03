import React, {Component} from 'react';
import router from 'react-router'
import StrategyComponent from './strategy/strategy.js'
import './discoverComponent.scss'
import {Link} from 'react-router'

export default class HomeComponent extends Component{
    render(){
        return (
            <div className="discover">
                <div className="n_nav">
                    <ul className="nav">
                        <li>发现</li>
                        <li>房东故事</li>
                        <li>旅行故事</li>
                        <li><Link to="discover/strategy">旅游攻略</Link></li>
                        <li>出行专题</li>
                        <li>热门评论</li>
                    </ul>
                </div>
                <div className="d_main">{this.props.children}</div>
                
            </div>
        )
    }
}