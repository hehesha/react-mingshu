import React, {Component} from 'react'
import './registerComponent.scss'
import redux,{createStore} from 'redux'


export default class registerComponent extends Component{
    register(){
        console.log((this.refs.zhucezhanghao).value,(this.refs.zhucemima).value)
    }
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
                        <input type="text" ref="zhucezhanghao"placeholder="请输入注册帐号"/>
                    </div>
                    <div className="new new1">
                        <p>注册密码</p>
                        <input type="password" ref="zhucemima" placeholder="请输入注册密码"/>
                    </div>
                    <input type="text" onClick={this.register.bind(this)} className="save" value="注册"/>
                </div>
            </div>
        )
    }
}


