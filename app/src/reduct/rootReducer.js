import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'

import releaseRoom from './releaseReducer.js'

import sharelist from './shareReducer.js'
import hotellist from './hotelReducer.js'

import getpage from './findReducer.js'

import loginreducer from '../reducer/loginReducer.js'

import getdetail from './detailReducer.js'
import orderlist from './orderlistReducer.js'

export default combineReducers({
    strategylist,
    releaseRoom,
    getpage,
    loginreducer,
    sharelist,
    hotellist,
    getdetail,
    orderlist

})