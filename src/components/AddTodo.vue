<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                /**
                 * Тескт задачи
                 */
                title: ''
            }
        },
        methods: {
            /**
             * Создание задачи
             */
            onSubmit(){
                console.log('Submit', this.title);
                if (this.title.trim()){
                    // Создаем задачу
                    let newTodo = {
                        id: Date.now(),
                        title: this.title,
                        completed: false
                    };

                    // Вызываем событие добавление задачи
                    this.$emit('add-todo', newTodo);
                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }
    input {
        width: 400px;
    }
</style>
