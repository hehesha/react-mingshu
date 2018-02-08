import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'
import loginreducer from '../reducer/loginReducer.js'
import registerreducer from '../reducer/registerReducer.js'
import changereducer from '../reducer/changeReducer.js'

export default combineReducers({
    strategylist,
     loginreducer,
     registerreducer,
     changereducer
})