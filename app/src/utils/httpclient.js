import http from 'superagent'

<<<<<<< HEAD
let baseUrl = 'http://10.3.136.153:3000/'

// let baseUrl = 'http://10.3.136.153:3000/'

=======
<<<<<<< HEAD
// let baseUrl = 'http://localhost:3000/'
let baseUrl='http://10.3.136.153:3000/'
=======
<<<<<<< HEAD
let baseUrl = 'http://10.3.136.153:3000/'
// let baseUrl='http://10.3.136.153:3000/'
=======

// let baseUrl = 'http://localhost:3000/'
let baseUrl='http://10.3.136.153:3000/'
>>>>>>> 43f94d190759dc17d5bb1a6769abdd049ad0e23d
>>>>>>> 90726a879343722182b1768a037e36af9ae8234a
>>>>>>> 59badb7c2031493101619787ebced30a1be9c85e
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
            // console.log('222222',url, params);
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