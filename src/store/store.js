// import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router';

Vue.use(Vuex);

const storage = {
    fetchUserTodo() {
        const userTodo = localStorage.getItem("userTodos");
        return userTodo != null ? JSON.parse(userTodo) : [];
      },

}

export const store = new Vuex.Store({
    state: {
        // clickdate: null,
        year: '',
        month: '',
        day: '',
        todolist: '',
        // todolists: [],
        todolists: storage.fetchUserTodo(),

    },
    mutations: {
        clickDate(state, payload) {
            // state.clickdate = JSON.stringify(payload)
            // console.log(state.clickdate);
            state.year = payload.year;
            console.log(state.year);
            state.month = payload.month;
            state.day = payload.day;
        },
        addTodoList(state, payload) {
            state.todolists.push(payload);
            localStorage.setItem("userTodos", JSON.stringify(state.todolists));
            console.log(payload);
        }
        // todolist(state, payload) {

        // }

    },
    // actions: {
    //     todolist(state, payload) {
    //         // console.log(payload.createdAt);
    //         return axios.post(`${'http://localhost:8000'}/todolist`, {
    //             todolist: payload.todolist,
    //             clickdate: JSON.stringify({year: payload.year, month: payload.month, day: payload.day})
    //         }).then((res) => {
    //             state.todolist = res.data.todolist;
                
                
    //             // console.log(state.todolist);
    //             // commit('todolist', {todolist: res.data})
    //         })
            
    //     }

    // },
    getters: {
        getTodolist(state) {
            return state.todolists;
           
        }

    }
})