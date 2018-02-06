import React, {Component} from 'react'
import './registerComponent.scss'


export default class registerComponent extends Component{
    render(){
        return(
            <div>
                <div className="header1">
                    <i className="angle left icon"></i>
                    <span>注册</span>
                </div>
                <div className="register">
                    <div className="new">
                        <p>注册账户</p>
                        <input type="text" placeholder="请输入注册帐号"/>
                    </div>
                    <div className="new new1">
                        <p>注册密码</p>
                        <input type="text" placeholder="请输入注册密码"/>
                    </div>
                    <input type="text" className="save" value="注册"/>
                </div>
            </div>
        )
    }
}


