<template>
    <ul>
        <TodoItem
                v-for="(todo, index) of todos" v-bind:key="todo.id"
                v-bind:todo="todo"
                v-bind:index="index"
                v-on:removeTodo="removeTodoHandler"
        />
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "TodoList",
        components: {
            TodoItem
        },
        props: {
            /**
             * Список задач
             */
            todos: Array
        },
        methods:{
            /**
             * Удаление элемента из списка задач todos
             * @param id Индекс элемента в списке задач
             */
            removeTodoHandler(id){
                this.$emit('deleteTodo', id)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
