import React, {Component} from 'react'
import './changePasswordComponent.scss'
import {Link} from 'react-router'

export default class changePasswordComponent extends Component{
    render(){
        return(
            <div>
                <div className="header">
                    <Link to="/setting"><i className="angle left icon"></i></Link>
                    <span>修改密码</span>
                    <span></span>
                </div>
                <div className="new">
                    <p>新密码</p>
                    <input type="text" placeholder="请输入新密码"/>
                </div>
                <div className="new new1">
                    <p>再次确认</p>
                    <input type="text" placeholder="请再次输入新密码"/>
                </div>
                <input type="button" className="save" value="保存"/>   
            </div>
        )
    }
}