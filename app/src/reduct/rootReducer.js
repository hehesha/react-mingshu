import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import releaseRoom from './releaseReducer.js'

export default combineReducers({
    strategylist,
    releaseRoom
})