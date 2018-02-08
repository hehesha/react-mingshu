import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'


export function getaiddatalist(aid){
	return{
		url:'selectaid',
		data:{aid:aid}
	}
}

