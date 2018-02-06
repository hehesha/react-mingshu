import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function selectPage(page){
	return{
		url:'selectpage',
		data:{page:page}
	}
}
export function delet(hid){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'delethomestray',
		data:{
			hid:hid
		}
	}
}
//假如需要传参
//data:{}