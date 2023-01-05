<script setup lang="ts">
import TodoList from './components/TodoList.vue'

</script>

<template>
  <header>
    <div class="logo-container">
      <img alt="Todo List logo" class="logo" src="./assets/logo.png" width="125" height="125" />
      <span class="title" >Dickerson's Todo List</span>
    </div>
  </header>
  <content>
    <div class="wrapper">
      <TodoList/>
    </div>
  </content>
</template>

<style scoped>

  header{
    padding: 5pt;
    background-color: lightslategray;
  }
 .logo-container {
  display: table-row;
 }

 .title {
    text-align: center;
    font-size: xx-large;
    font-weight: 500;
    color: whitesmoke;
 }

</style>
