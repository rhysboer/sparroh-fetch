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
        <div class='group'>
            <img class='icon' src='/icon.svg' alt="Logo"></img>
            <h1 class='title'>Sparroh</h1>
        </div>
        <Search @on-change="onChange"></Search>
    </div>
	<Cart></Cart>
</template>

<style scoped>
    .header{
        background-color: white;
        border-bottom: 1px rgb(223, 223, 223) solid;
    }

    .group{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon{
        width: 60px;
        height: 60px;
    }

    .title{
        font-size: 38px;
        color: rgb(54, 56, 54);
        font-weight: 900;
    }
</style>