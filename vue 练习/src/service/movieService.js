// export default {
//   async getMovies(page, limit) {
//     var url = `http://yuanjin.tech:5005/api/movie?page=${page}&limit=${limit}`;
//     var datas = await fetch(url).then(resp => resp.json());
//     return datas;
//   },
//   async getMovie(id) {
//     var url = `http://yuanjin.tech:5005/api/movie/${id}`;
//     var datas = await fetch(url).then(resp =>
//       resp.json()
//     );
//     return datas;
//   }
// };
export default {
//     data(){
//         return {
//             axios:{
//                 jsonp:(url) => {
//                     if(!url){
//                         console.error('Axios.JSONP 至少需要一个url参数!')
//                         return;
//                     }
//                     return new Promise((resolve,reject) => {
//                         window.jsonCallBack =(result) => {
//                             resolve(result)
//                         }
//                         var JSONP=document.createElement("script");
//                         JSONP.type="text/javascript";
//                         JSONP.src=`${url}&callback=jsonCallBack`;
//                         document.getElementsByTagName("head")[0].appendChild(JSONP);
//                         setTimeout(() => {
//                             document.getElementsByTagName("head")[0].removeChild(JSONP)
//                         },500)
//                     })
//                 }
//             }
//             }
            
        
//     },
            getMovies(page,limit){
                return axios.get('http://yuanjin.tech:5005/api/movie',{
                    params: {
                        page:page,
                        limit:limit
                    }
                }).then(function(response){
                    return response.data
                }).catch(function (error){
                    console.log(error)
                })
                // var url = `http://yuanjin.tech:5005/api/movie?page=${page}&limit=${limit}`;
                // // this.axios.jsonp(this.url);
                // this.axios.jsonp(url)
            },
            getMovie(id){
                return axios.get(`http://yuanjin.tech:5005/api/movie/${id}`
                ).then(function(response){
                    return response.data
                }).catch(function (error){
                    console,log(error)
                })
            }
            
                
            
        }
    
    
