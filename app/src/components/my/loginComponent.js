import React, {Component} from 'react'
import redux,{createStore} from 'redux'
import * as actions from '../../actions/loginAction'
import counterReducer from '../../reducer/loginReducer.js'
import './loginComponent.scss'
import {Link} from 'react-router'
import http from 'superagent'
import {connect} from 'react-redux'

class loginComponent extends Component{
    login(){
        this.props.loginAction({username:(this.refs.zhanghao).value,password:(this.refs.mima).value});  
    }
    render(){
       return(
            <div>
                <div className="header1">
                    <i className="angle left icon"></i>
                    <span>登录</span>
                </div>
                <div className="login">
                    <div className="new">
                        <p>账户</p>
                        <input type="text"  ref="zhanghao"  placeholder="请输入帐号"/>
                    </div>
                    <div className="new new1">
                        <p>密码</p>
                        <input type="text" ref="mima" placeholder="请输入密码"/>
                    </div>
                    <input type="button" className="save" value="登录" onClick={this.login.bind(this)}/>
                    <Link to="register"><p className="link">还没有账号？</p></Link>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        loading:state.loading,
        result:state.result,
        error:state.error 
    }
}

export default connect(mapStateToProps,actions)(loginComponent)