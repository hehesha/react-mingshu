import React, {Component} from 'react'
import {Link} from 'react-router'

export default class myReleaseComponent extends Component{
    render(){
        return(
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
                </div>
            </div>
        )
    }
}