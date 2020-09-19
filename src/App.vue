<template>
  <div id="app">
    <h1>ToDo application</h1>
    <br >
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
  import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList: TodoList
  },
  data(){
    return {
      todos: [
        {id: 1, title: 'Видеокарта', completed: false},
        {id: 2, title: 'Материнская плата', completed: false},
        {id: 3, title: 'Процессор', completed: false},
        {id: 4, title: 'ОЗУ', completed: false},
        {id: 5, title: 'ПЗУ', completed: false},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
