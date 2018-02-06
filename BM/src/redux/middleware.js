/*
 为什么需要中间件？
 一个确定的纯对象，而例如异步ajax请求，
 可能会包含了很多种的行为（请求中，请求成功，请求失败等···），
 因此我们需要使用中间件将一个不确定的action转变或拆分成多个标准的plain object交由reducer处理。）
 */
//把前端的网络配置引进来
import http from '../utils/httpclient';

import * as ajaxContants from '../constaints/ajaxConstants'
//定义一个方法
export default function middleware(api){
	return function(dispatch){
		return function(action){
			let {type,types,method = 'get',data={},url} =action;
			
			if(!url){
				return dispatch(action)
			}
			api.dispatch({type:ajaxContants.AJAX_REQUESTING});
			if(url){
				http[method](url,data).then(res => {
					api.dispatch({
						type:ajaxContants.AJAX_REQUESTED,
						result:res.body.data
					})
				}).catch(error => {
					api.dispatch({
                        type: ajaxContants.AJAX_REQUESTERROR,
                        result:error
                    })
				})
			}
		}
	}
}
