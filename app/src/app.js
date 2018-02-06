import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import routes from './router'

ReactDOM.render(
        <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
)