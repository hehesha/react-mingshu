//所有的reducer的汇总
import {combineReducers} from 'redux'

import checkReducer from '../components/controldetalist/checkReducer'

export default combineReducers({
	checkReducer,
})

