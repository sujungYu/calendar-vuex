import Vue from "vue"
import Router from 'vue-router'
import Calendar from "../components/Calendar.vue"

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        }
    ]
})