import * as ajaxConstants from '../constants/ajaxConstants'
import * as strategyConstants from '../constants/strategyConstants.js'
import * as shareConstants from '../constants/shareConstants.js'

export function getstrategy(){
    return {
        url: 'selectTravel',
        types:[strategyConstants.GETSTRATEGY_REQUESTING,strategyConstants.GETSTRATEGY_REQUESTED,strategyConstants.GETSTRATEGY_ERROR]
        
    }
}
export function getShare(n){
    return{
        url:'selectShare',
        data:{uid:n},
        types:[shareConstants.SHARE_REQUESTING,shareConstants.SHARE_REQUESTED,shareConstants.SHARE_ERROR],
    }
}
var page=0;
export function gethotel(city){
    page++;
    return{
        url:'selecthotel',
        data:{page:page,city:city},
        types:[strategyConstants.GETHOTEL_REQUESTING,strategyConstants.GETHOTEL_REQUESTED,strategyConstants.GETHOTEL_ERROR],
    }
}