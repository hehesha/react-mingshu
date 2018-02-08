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

export function getDetail(id){
    console.log(id)
    return{
        url:'selecthid',
<<<<<<< HEAD
        data:{hid:id}
    }
}

=======
        data:{hid:id},
    }
}
>>>>>>> 43f94d190759dc17d5bb1a6769abdd049ad0e23d
export function sorthotel(city,sort){
    return{
        url:'sorthotel',
        data:{sort:sort,city:city},
        types:[strategyConstants.GETHOTEL_REQUESTING,strategyConstants.GETHOTEL_REQUESTED,strategyConstants.GETHOTEL_ERROR],
    }
}