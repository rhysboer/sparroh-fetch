<script setup>
    import Cart from '../components/Cart.vue';
    import Search from '../components/Search.vue';
</script>

<template>
    <div class='header'>
        <Search></Search>
    </div>
	<Cart></Cart>
</template>

<style scoped>
    .header{
        background-color: white;
        border-bottom: 1px rgb(223, 223, 223) solid;
    }
</style>