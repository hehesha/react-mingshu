import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/home'
import recommendComponent from '../components/recommend/recommendComponent'
import cityComponent from '../components/recommend/citys/cityComponent'
import discoverComponent from '../components/discover/discoverComponent'
import myComponent from '../components/my/myComponent'
import orderComponent from '../components/order/orderComponent.js'
import StrategyComponent from '../components/discover/strategy/strategy.js'
import TripComponent from '../components/discover/trip/tripComponent.js'
import HitComponent from '../components/discover/hitcommon/hitComponent.js'

const routes = (
    <Route path="/" component={HomeComponent}>
        <Route path="recommend" component={recommendComponent}/>
        <Route path="city" component={cityComponent}/>
        <Route path="discover" component={discoverComponent}>
            <Route path="strategy" component={StrategyComponent}/>
            <Route path="trip" component={TripComponent}/>
            <Route path="hit" component={HitComponent}/>
        </Route>
        <Route path="my" component={myComponent}/>
        <Route path="order" component={orderComponent}/>
    </Route>
)

export default routes;