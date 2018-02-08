import {combineReducers} from 'redux'

import strategylist from './strategyReducer.js'

import releaseRoom from './releaseReducer.js'

import sharelist from './shareReducer.js'
import hotellist from './hotelReducer.js'

import getpage from './findReducer.js'

import loginreducer from '../reducer/loginReducer.js'
import registerreducer from '../reducer/registerReducer.js'
import changereducer from '../reducer/changeReducer.js'

import getdetail from './detailReducer.js'

export default combineReducers({
    strategylist,
<<<<<<< HEAD
     loginreducer,
     registerreducer,
     changereducer
=======
    releaseRoom,
    getpage,
    loginreducer,
    sharelist,
    hotellist,
    getdetail,

>>>>>>> 59badb7c2031493101619787ebced30a1be9c85e
})