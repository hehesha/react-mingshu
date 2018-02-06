import * as constants from '../constants/ajaxConstants'
import http from 'superagent'

export function middleware(api){
    return function(dispatch){
        return function(action){
            let {types, type, url, method = 'get',data = {}} = action;
            if(!url){
                return dispatch(action);
            }
            api.dispatch({type:constants.LOGIN_REQUESTING});
            if(url){
                http[method](url)
                .send(data)
                .end((error,res) => {
                    if(error){
                        api.dispatch({
                            type:constants.LOGIN_REQUESTERROR,
                            result:error
                        })
                    }else{
                        api.dispatch({
                            type:constants.LOGIN_REQUESTED,
                            result:res
                        })
                    }
                })
            }
        }
    }
}