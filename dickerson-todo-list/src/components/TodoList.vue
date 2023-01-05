<script setup lang="ts">
import { useStore } from '../stores/todos';
import TodoItem  from '../components/TodoItem.vue';

    const store = useStore();

    let newTaskDescritpion : string = '';

    store.dispatch('setTodoList');

    const addTask = () : void => {
      store.dispatch('addTask', newTaskDescritpion);
    }

    const deleteTask = (id:number) : void => {
      store.dispatch('deleteTask', id);
    }

</script>

<template>

<div class="input-area">
  <i-input type="text" v-model="newTaskDescritpion" placeholder="Type something.." />
  <div>
    <i-button @click="addTask">Add</i-button>
  </div>
</div>

  <i-list-group v-if="store.state.todoList.length > 0" size="sm" :border="false">
    <TodoItem v-for="todo in store.state.todoList" :key="todo.id" :bind:id="'TASK-'+todo.id.toString()" :data="todo" v-on:delete="deleteTask"></TodoItem>
  </i-list-group>
  <div class="placeholder-msg" v-else>
    Nice!  You dont have anything todo!
  </div>
</template>

<style scoped>

  .input-area {
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5pt;
    height: 35pt;
    margin-top: 5pt;
    margin-bottom: 5pt;
    padding-left: 5pt;
    padding-right: 5pt;
  }

  .input-wrapper {
    width: 100%;
  }

  .placeholder-msg{
    text-align: center;
    font-size: xx-large;
    font-weight: 500;
    color: lightgray;
  }

</style>
