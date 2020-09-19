<template>
    <div>
        <h2>ToDo list</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <AddTodo v-on:add-todo="addTodoHandler" />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <hr >

        <Loader v-if="loading" />
        <TodoList
                v-else-if="todos.length"
                v-bind:todos="filteredTodos"
                v-on:deleteTodo="deleteTodoHandler"
        />
        <p v-else>No todos!</p>
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList";
    import AddTodo from "@/components/AddTodo";
    import Loader from "@/components/Loader";

    export default {
        name: 'App',
        components: {
            TodoList: TodoList,
            AddTodo: AddTodo,
            Loader: Loader
        },
        data() {
            return {
                /**
                 * Список задач
                 */
                todos: [],

                /**
                 * Индикатор состояния загузки, true-идет загрузка, иначе false
                 */
                loading: true,

                /**
                 * Параметр фильтрации списка задач
                 */
                filter: 'all',
            }
        },
        // watch: {
        //     filter(value) {
        //         console.log(value);
        //     }
        // },
        computed: {
            filteredTodos() {
                switch (this.filter) {
                    default:
                        return this.todos;
                    case "completed":
                        return this.todos.filter(t => t.completed);
                    case "not-completed":
                        return this.todos.filter(t => !t.completed)
                }
            }
        },
        methods: {
            /**
             * Обработчик события удаления элемента todo_
             * @param id Индекс элемента todo_ который необъодимо удалить
             */
            deleteTodoHandler(id){
                this.todos = this.todos.filter(t => t.id !== id)
            },

            /**
             * Обработчки события добавления элемента todo_
             * @param item Элемент todo_
             */
            addTodoHandler(item){
                this.todos.push(item)
            },

            /**
             * Загрузка списка элементов todo_. Загрузка выполняется с сервера в виде JSON Объекта
             * @param count Кол-во элементов todo_ которые необходимо загрузить
             * @returns {Promise<any>} Промис возвращающий массив элементов todo_
             */
            async loadTodos(count = 10) {
                let response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);

                // Искуственная задержка чтобы увидеть лоадер
                // await this.sleep(1000);

                this.loading = false;
                return await response.json();
            },

            /**
             * Искуственная задержка
             * @param ms Кол-во милисекунд которые необходимо ожидать
             * @returns {Promise<unknown>} Промис который выполняется в течении заданного времени.
             */
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            },

        },

        async created() {
            this.todos = await this.loadTodos();
        }
    }
</script>

<style scoped>

</style>
