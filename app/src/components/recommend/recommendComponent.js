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
                <div className="main">
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
                </div>
            </div>
        )
    }
}