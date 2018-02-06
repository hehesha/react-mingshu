import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/home'
import recommendComponent from '../components/recommend/recommendComponent'
import discoverComponent from '../components/discover/discoverComponent'
import myComponent from '../components/my/myComponent'
import orderComponent from '../components/order/orderComponent.js'
import settingComponent from '../components/my/settingComponent.js'
import changePasswordComponent from '../components/my/changePasswordComponent.js'
import registerComponent from '../components/my/registerComponent.js'
import loginComponent from '../components/my/loginComponent.js'

const routes = (
    <Route path="/" component={HomeComponent}>
        <Route path="recommend" component={recommendComponent}/>
        <Route path="discover" component={discoverComponent}/>
        <Route path="my" component={myComponent}/>
        <Route path="order" component={orderComponent}/>
        <Route path="setting" component={settingComponent}/>
        <Route path="register" component={registerComponent}/>
        <Route path="login" component={loginComponent}/>
        <Route path="changePassword" component={changePasswordComponent}/>
    </Route>
)

export default routes;