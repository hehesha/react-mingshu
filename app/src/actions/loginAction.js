import * as constants from '../constants/ajaxConstants.js'

export function loginAction(data){
    return{
        types:[constants.LOGIN_REQUESTING,constants.LOGIN_REQUESTED,constants.LOGIN_REQUESTERROR],
        url:'http://10.3.136.153',
        method:'get',
        data
    }
}