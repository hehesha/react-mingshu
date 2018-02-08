import * as ajaxConstants from '../constants/ajaxConstants'
import * as releaseConstants from '../constants/releaseConstants'

export function getstrategy(_city,_district){
    console.log(_city,_district)
    return {
        types:[releaseConstants.GETRELEASE_REQUESTING,releaseConstants.GETRELEASE_REQUESTED,releaseConstants.GETRELEASE_ERROR],
        url: 'release',
        data:{
            city:_city,
            district:_district
        },
        method:'post'  
    }
}