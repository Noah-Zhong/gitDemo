//该组件仅用于获取电影数据
import Pagers from "./Pagers.js";
import MovieList from "./MovieList.js";
import movieService from "../service/movieService.js"
import Loading from "./Loading.js"
var template = `
<div class="data-container">
  <MovieList :movies="movies"/>
  <Pagers v-show="!isLoading" @getCurrent="handleCurrent" :current="current" :limit="limit" :total="total"/>
  <Loading v-show="isLoading"/>
  </div>
`;

export default {
  components: {
    MovieList,
    Pagers,
    Loading
  },
  data() {
    return {
      movies: [],
      current:1,
      limit:10,
      total:100,
      limitNum:1,
      isLoading:false
    //   page:1,
    //   limit:10
    };
  },
//   async created() {
//     //获取电影数据
//     var resp = await movieService.getMovies(1, 10)
//     this.movies = resp.data
//   },
  async created () {
      this.getMovie();
    // this.resp =this.getMovies(1,10);
    // console.log(this.getMovies(1,10))
    // axios.get('http://yuanjin.tech:5005/api/movie',{
    //                         params: {
    //                             page:this.page,
    //                             limit:this.limit
    //                         }
    //                     }).then(response =>{
    //                         this.movies = response.data.data
    //                         console.log(this.movies)
    //                     }).catch(function (error){
    //                         console.log(error)
    //                     })
                        // this.movies = this.info.data;
    },
    methods:{
        handleCurrent(target){
            this.current = target;
            this.getMovie();
        },
        async getMovie(){
            this.isLoading = true;
            var resp = await movieService.getMovies(this.current,this.limit);
            setTimeout(()=>{
                this.movies = resp.data; 
                this.total = resp.count;
                this.isLoading = false;
                this.setCurrent();
                this.setLimit();
                this.setPage();
            },1000)
        },
        setCurrent(){
                    this.$store.commit({type:"movies/setCurrent",current:this.current})
            },
        setLimit(){
            if(this.total % this.limit === 0 ){
                this.limitNum = this.limit;
            }
            if(this.total % this.limit !== 0 && this.current === Math.ceil(this.total / this.limit)){
                this.limitNum = this.total % this.limit;
            }else{
                this.limitNum = this.limit;
            }
            this.$store.commit({type:"movies/setLimit",limit:this.limitNum})
        },
        setPage(){
            var page = Math.ceil(this.total / this.limit);
            this.$store.commit({type:"movies/setPage",page:page})
        }
        
    },
  template
};
