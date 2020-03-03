import MovieContainer from "./MovieContainer.js"
const template = `
<div>
    <MovieContainer/>
    <div style="position:fixed;top:100px;left:0px;border:1px solide #ccc;background-color:rgba(0,0,0,.4);color:#fff">
    <div style="margin:10px">当前第：{{current}} 页  总{{page}}页  </div>
    <div style="margin:10px">当前页电影数：{{limit}}</div>
    </div>
    </div>
`
export default {
    components:{
        MovieContainer,
    },
    // computed:Vuex.mapState("movies",["current"]),
    computed:{
        current(){
            return this.$store.state.movies.current;
        },
        limit(){
            return this.$store.state.movies.limit;
        },
        page(){
            return this.$store.state.movies.page
        }
    },
    template
}