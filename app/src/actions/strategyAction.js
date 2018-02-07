import * as ajaxConstants from '../constants/ajaxConstants'
import * as strategyConstants from '../constants/strategyConstants.js'

export function getstrategy(){
    return {
        url: 'selectTravel',
        
    }
}
export function getShare(n){
    return{
        url:'selectShare',
        data:{uid:n},
    }
}