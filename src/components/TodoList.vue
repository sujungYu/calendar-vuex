<template>
  <div class="modal" :class="{'active': true }">>
    <div class="overlay" @click="$emit('close')"></div>
    <div class="modal-card">
        <p>{{ this.$store.state.year }}년 {{ this.$store.state.month }}월 {{ this.$store.state.day }}일</p>
        <input type="text" v-model="todolist">
        <button  v-on:click="save">등록</button>
        <!-- <ul>
            <li v-for="todo in this.todolists"  v-bind:key="todo">
                {{todo}}
            </li>
        </ul> -->
      <!-- <slot /> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    data() {
        return {
            todolist: '',
            // year: '',
            // month: '',
            // day: ''
            // todolists:[]
        }
    },
    computed: {
        todolists() {
            return this.$store.getters.getTodolist;
        }

    },
    // mounted() {
    //     this.date()
    //     console.log("created");
    // },
    // props: ['showModal', 'year', 'month', 'clickDay'],
    methods: {
        // date() {
        //     this.year = this.$store.state.year,
        //     console.log(this.year);
        //     this.month = this.$store.state.month,
        //     console.log(this.month);
        //     this.day = this.$store.state.day

        // },
        save() {
            this.$store.dispatch("todolist", {todolist:this.todolist, year: this.$store.state.year, month: this.$store.state.month, day: this.$store.state.day})
            // this.$store.commit("addTodoList", {todolist:this.todolist, year: this.$store.state.year, month: this.$store.state.month, day: this.$store.state.day})
            this.$store.commit("addTodoList", {todolist:this.todolist, createdAt: new Date()})
            console.log(this.todolist);
            this.clearInput();
        },
        clearInput() {
        this.todolist = '';
    }
        

  },
};
</script>

<style>
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>