<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        methods: {
            onSubmit(){
                console.log('Submit', this.title);
                if (this.title.trim()){
                    let newTodo = {
                        id: Date.now(),
                        title: this.title,
                        completed: false
                    };
                    this.$emit('add-todo', newTodo);
                    this.title = ''
                }
            }
        },
        data() {
            return {
                title: ''
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
