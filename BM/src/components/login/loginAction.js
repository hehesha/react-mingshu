import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function loginAdmin(username,password){
	console.log(username,password)
	return{
		url:'loginadmin',
		method:'post',
		data:{
			types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
			username:username,
			password:password
		}
	}
}