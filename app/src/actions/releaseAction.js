import * as ajaxConstants from '../constants/ajaxConstants'
import * as releaseConstants from '../constants/releaseConstants'

export function getstrategy(_data){
    return {
        types:[releaseConstants.GETRELEASE_REQUESTING,releaseConstants.GETRELEASE_REQUESTED,releaseConstants.GETRELEASE_ERROR],
        url: 'release',
        data:{name:_data},
        method:'post'  
    }
}