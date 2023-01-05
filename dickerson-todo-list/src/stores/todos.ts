
import type { TodoItem } from '@/models/todo-item'
import axios from 'axios'
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import type { InjectionKey } from 'vue';

const BASEURI = 'https://illfatedlavendermemoryallocator--jabez007.repl.co/api/todo';

export interface TodoState {
  todoList: Array<TodoItem>
}

export const key: InjectionKey<Store<TodoState>> = Symbol()

export const todoStore = createStore<TodoState>({
  state(){
    return{
      todoList: []
    }
  },
  mutations:{
    setTodoList(state, todos) {
      state.todoList = todos;
    }
  },
  actions:{
   async setTodoList({commit}) {
    axios.get(BASEURI).then(res => {
      commit('setTodoList', res.data.todos);
    })
   },
    addTask({commit}, payload) {
      let body = {
        task: payload
      }
    axios.post(BASEURI, body).then(res => {
      this.dispatch('setTodoList');
    })
   },
  deleteTask({commit}, payload) {
  let uri = BASEURI + '/' + payload;
    axios.delete(uri).then(res => {
      this.dispatch('setTodoList');
    })
   }
  }
});

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}

// export const todoStore = defineStore({
//   id:'todos',
//   state: () => {
//     return{
//       todoList: [] as TodoItem[]
//     }
//   },
//   getters:{},
//   actions:{
//     async loadTodolist()
//     {
//       axios.get(BASEURI).then(res => {
//        this.todoList = res.data.todos;
//       });
//     },

//     addTask(taskDesctription: string)
//     {
//       console.log(taskDesctription);
//       this.$patch((state) => {
//         state.todoList.push(new TodoItem(state.todoList.length + 1, taskDesctription));
//       })
//     },

//     deleteTask(id: number)
//     {
//       axios.get(BASEURI).then(res => {
//         let testlist = [new TodoItem(12, 'some task name')];
//         this.todoList = testlist;
//       })
//     }
//   }
// })
