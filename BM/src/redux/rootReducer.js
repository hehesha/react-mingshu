//所有的reducer的汇总
import {combineReducers} from 'redux'

import checkReducer from '../components/controldetalist/checkReducer'
import performanceReducer from '../components/controldetalist/performanceReducer'


export default combineReducers({
	checkReducer,
	performanceReducer
})

