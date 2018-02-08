import http from '../utils/httpclient'
import * as ajaxContants from '../constants/ajaxConstants'

export default function middleware(api){
    return function(dispatch){
        return function(action){
            let {type, types, method = 'get', data = {}, url} = action;

            if(!url){
                return dispatch(action);
            }
            let defaultConstants = [ajaxContants.AJAX_REQUESTING, ajaxContants.AJAX_REQUESTED, ajaxContants.AJAX_REQUESTERROR]
            let [requesting, requested, requesterror] = types ? types : defaultConstants;
            api.dispatch({type: requesting});
            if(url){
                return new Promise((resolve, reject) => {
                    http[method](url, data).then(res => {
<<<<<<< HEAD
                        // console.log(res);
=======
                        // console.log(res.text);
                        console.log(res.body);
>>>>>>> 43f94d190759dc17d5bb1a6769abdd049ad0e23d
                        
                        api.dispatch({
                            type: requested,
                            result: res.body
                        })
                        resolve(res.body)
                    }).catch(error => {
                        
                        api.dispatch({
                            type: requesterror,
                            result: error
                        })
                        reject(error)
                    })
                })
            }
        }
    }
}