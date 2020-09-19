<template>
    <li>
        <input type="checkbox">
        <strong>{{ item.id }}</strong>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ['item']
    }
</script>

<style scoped>

</style>
