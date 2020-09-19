<template>
    <ul>
        <TodoItem
                v-for="todo of todos"
                v-bind:todo="todo"
        />
    </ul>
</template>

<script>
    import TodoItem from "@/components/TodoItem";

    export default {
        name: "TodoList",
        components: {TodoItem},
        props: ['todos']
    }
</script>

<style scoped>

</style>
