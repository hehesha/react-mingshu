import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/home'
import recommendComponent from '../components/recommend/recommendComponent'
import discoverComponent from '../components/discover/discoverComponent'
import myComponent from '../components/my/myComponent'
import orderComponent from '../components/order/orderComponent.js'
import StrategyComponent from '../components/discover/strategy/strategy.js'

const routes = (
    <Route path="/" component={HomeComponent}>
        <Route path="recommend" component={recommendComponent}/>
        <Route path="discover" component={discoverComponent}>
            <Route path="strategy" component={StrategyComponent}/>
        </Route>
        <Route path="my" component={myComponent}/>
        <Route path="order" component={orderComponent}/>
    </Route>
)

export default routes;