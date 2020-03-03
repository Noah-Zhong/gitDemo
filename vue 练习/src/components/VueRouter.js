import Home from "./Home.js"
import Movie from "./Movie.js"
import MovieMessage from "./MovieMessage.js"
export default new VueRouter({
    mode: "hash",
    routes:[
        {
            name:"home",
            path:"/",
            component:Home,
        },
        {
            name:"movie-list",
            path:"/movie",
            component:Movie
        },{
            name:'MovieMessage',
            path:'/movie/:id',
            component:MovieMessage
        }
    ]
})
