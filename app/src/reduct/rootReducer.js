import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import getpage from './findReducer.js'

export default combineReducers({
    strategylist,
    getpage
})