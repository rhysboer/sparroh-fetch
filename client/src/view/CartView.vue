<script setup>
    import Cart from '@/components/Cart.vue';
    import Search from '@/components/Search.vue';
    import { useCoreStore } from '../stores/coreStore';

    const core = useCoreStore();

    const onChange = (e) => {
        core.filter = e.target.value;
    }
</script>

<template>
    <div class='header'>
        <Search @on-change="onChange"></Search>
    </div>
	<Cart></Cart>
</template>

<style scoped>
    .header{
        background-color: white;
        border-bottom: 1px rgb(223, 223, 223) solid;
    }
</style>