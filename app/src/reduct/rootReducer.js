import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'

import releaseRoom from './releaseReducer.js'
import myreleaseRoom from './myreleaseReducer.js'

import sharelist from './shareReducer.js'
import hotellist from './hotelReducer.js'

import getpage from './findReducer.js'

import loginreducer from '../reducer/loginReducer.js'
import registerreducer from '../reducer/registerReducer.js'
import changereducer from '../reducer/changeReducer.js'

import getdetail from './detailReducer.js'

import deleteRelease from './deleteReducer.js'


export default combineReducers({
    strategylist,
    registerreducer,
    changereducer,
    releaseRoom,
    getpage,
    loginreducer,
    sharelist,
    hotellist,
    getdetail,
    myreleaseRoom,
    deleteRelease
})