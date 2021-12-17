import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const storage = {
    fetchUserTodo() {
      const userTodo = localStorage.getItem("userTodos");
      return userTodo != null ? JSON.parse(userTodo) : [];
    },
};
    export const store = new Vuex.Store({
    state: {
        year: '',
        month: '',
        day: '',
        todos: storage.fetchUserTodo(),
        showtodos: []

    },
    mutations: {
        clickDate(state, payload) {
            state.year = payload.year;
            state.month = payload.month;
            state.day = payload.day;
        },
        addNewTodo(state, todoItem) {
            // console.log(todoItem);
            state.todos.push(todoItem);
            localStorage.setItem("userTodos", JSON.stringify(state.todos));
        },
        clearAll(state) {
            localStorage.clear();
            state.todos = [];
            }


    },
    actions: {
        addTodo({ commit }, payload) {
            return axios.post(`${'http://localhost:8000'}/todolist`, {
                title: payload.title,
                createdAt: payload.createdAt
            }).then((res) => {
                commit('addNewTodo', res.data);
            })
        },
        getTodo({commit}) {
            return axios.get(`${'http://localhost:8000'}/todolist`)
            .then((res) => {
                console.log(res.data);
                let i;
                for(i=0; i<res.data.length; i++) {
                    commit('addNewTodo', res.data[i])
                }
            })
        }


    }, 
    getters: {
        showTodo: state => {
            // console.log(state.day);

            // console.log(state.year+"-"+state.month+"-"+state.day);
            // console.log(state.todos);
            return state.todos.filter(todo => todo.createdAt == state.year+"-"+state.month+"-"+state.day)
        }

    }

})