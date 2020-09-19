<template>
    <div id="app">
        <h1>ToDo application</h1>
        <AddTodo
            v-on:add-todo="addTodoHandler"
        />
        <hr >
        <TodoList
                v-bind:todos="todos"
                v-on:deleteTodo="deleteTodoHandler"
        />
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import AddTodo from "./components/AddTodo";

    export default {
        name: 'App',
        components: {
            TodoList: TodoList,
            AddTodo: AddTodo
        },
        data() {
            return {
                todos: [
                    // {id: 1, title: 'Видеокарта', completed: false},
                    // {id: 2, title: 'Материнская плата', completed: false},
                    // {id: 3, title: 'Процессор', completed: false},
                    // {id: 4, title: 'ОЗУ', completed: false},
                    // {id: 5, title: 'ПЗУ', completed: false},
                ]
            }
        },
        methods: {
            deleteTodoHandler(id){
                this.todos = this.todos.filter(t => t.id !== id)
            },
            addTodoHandler(item){
                this.todos.push(item)
            },
            async loadTodos(count = 10) {
                let response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);
                return await response.json()
            }
        },
        async mounted() {
            this.todos = await this.loadTodos(15)
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
