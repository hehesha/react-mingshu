import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'

import releaseRoom from './releaseReducer.js'

import sharelist from './shareReducer.js'
import hotellist from './hotelReducer.js'

import getpage from './findReducer.js'

import loginreducer from '../reducer/loginReducer.js'

import getdetail from './detailReducer.js'

import setOrder from './orderReducer.js'

import updateType from './tpyeReducer.js'

import getCommon from './commonReducer.js'

export default combineReducers({
    strategylist,
    releaseRoom,
    getpage,
    loginreducer,
    sharelist,
    hotellist,
    getdetail,
    setOrder,
    updateType,
    getCommon,
})