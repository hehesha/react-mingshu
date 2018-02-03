import React from 'react'
import ReactDOM from 'react-dom'

window.React = React;

//引入路由
import {HashRouter, Router, NavLink,hashHistory} from 'react-router';
import routes from './src/router'

//引入react-redux
mport {Provider} from 'react-redux'

//渲染
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)