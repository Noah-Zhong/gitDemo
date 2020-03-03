var movies = {
    namespaced: true,
    state: {
        data:[],
        total: null,
        current: null,
        page:null,
        limit: null,
        isLoading: false
    },
    mutations:{
        setCurrent(oldstate,payload){
            oldstate.current = payload.current;
        },
        setLimit(oldstate,payload){
            oldstate.limit = payload.limit;
        },
        setPage(oldstate,payload){
            oldstate.page = Math.ceil(oldstate.total / oldstate.limit)
            oldstate.page = payload.page;
        }

    }
}
var online = {
    namespaced: true,
    state: {
        number:0,
    }
}
export default new Vuex.Store({
    modules:{
        movies,
        online
    },
    
})