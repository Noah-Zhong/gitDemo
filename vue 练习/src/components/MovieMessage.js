import MovieDetail from "./MovieDetail.js"
import MovieService from "../service/movieService.js"
const template = `
<div style="position:relative;">
<div class="box" @click="$router.back()">
    </div>
    <div class="fanhui" @click="$router.back()">返回上一页</div>
    <MovieDetail :movie="movie" style="width:800px;margin:20px auto"/>
    </div>
`
export default {
    props:["keyNode"],
    components:{
        MovieDetail,
    },
    data(){
        return{
            movie:null
        }
    },
    async created(){
        var movieId = this.$route.params.id;
        console.log(this.$route)
        var resp = await MovieService.getMovie(movieId);
        this.movie = resp.data;
        
    },
    template,
}