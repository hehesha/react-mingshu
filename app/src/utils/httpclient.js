import http from 'superagent'

<<<<<<< HEAD
let baseUrl = 'http://10.3.136.153:3000/'
=======
// let baseUrl = 'http://10.3.136.153:3000/'
let baseUrl ='http://localhost:3000/'
>>>>>>> a9c4aa2d785d5a88605e2250d562fbd90043c615
const geturl = (url) => {
    if(url.startsWith('http')){
        return url;
    } else {
        return baseUrl + url;
    }
}


export default {
    get(url, params){
        return new Promise((resolve, reject) => {
            http.get(geturl(url))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(params)
            .end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res)
                }
            })
        })
    },

    post(url, data){
        return new Promise((resolve, reject) => {
            http.post(geturl(url))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .send(data)
            .end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res)
                }
            })
        })        
    }
}