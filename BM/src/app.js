import React from 'react'
import ReactDOM from 'react-dom'


//引入路由
import {Router,hashHistory,Route} from 'react-router';
import routes from './router/index'



//引入状态管理
import {Provider} from 'react-redux'

import store from './redux/configStore'

//引入basecss
import './utils/base.scss'


//渲染
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)