import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import loginreducer from '../reducer/loginReducer.js'

export default combineReducers({
    strategylist,
     loginreducer,

})