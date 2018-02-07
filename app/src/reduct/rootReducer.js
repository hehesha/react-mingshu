import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import sharelist from './shareReducer.js'
import hotellist from './hotelReducer.js'

export default combineReducers({
    strategylist,
    sharelist,
    hotellist
})