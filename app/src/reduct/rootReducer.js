import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import releaseRoom from './releaseReducer.js'
import loginreducer from '../reducer/loginReducer.js'

export default combineReducers({
    strategylist,
    releaseRoom,
    loginreducer
})