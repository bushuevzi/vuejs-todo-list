<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-model="todo.completed">
            <strong>{{index + 1}}</strong>
            {{todo.title | capitalise}}
        </span>
        <button class="rm" v-on:click="$emit('removeTodo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            /**
             * Элемент списка задач
             */
            todo: {
                type: Object,
                required: true
            },

            /**
             * Порядковый номер элемента в массиве спизка задач todos
             */
            index: Number
        },
        filters: {
            /**
             * делает первую букву переданного String Заглавной
             * @param string Значение, в котором необходимо сделать первую букву заглавную
             * @returns Преобразованное строковое значение
             */
            capitalise(string){
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;

    }
    .rm {
        background-color: red;
        color: #ffffff;
        border-radius: 50%;
        font-weight: bold;
    }
    input{
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>
