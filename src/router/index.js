import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Chart = () =>
    import ('../views/chart/Chart')
const Recommend = () =>
    import ('../views/recommend/Recommend')
const SongList = () =>
    import ('../views/songList/SongList')
const Like = () =>
    import ('../views/home/ChildHome/Like')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/chart',
        component: Chart
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/songList',
        component: SongList
    },
    {
        path: '/like',
        component: Like
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router