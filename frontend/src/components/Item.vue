<script setup>
    import Price from './Price.vue';
    import logo from '@/assets/aliexpress.svg';

    const props = defineProps(['item']);
</script>

<template>
    <a class='item' :href='props.item.url' target='_blank' rel='noopener noreferrer'>
        <div class='group'>
            <img class='image' :src="props.item.image"></img>
            <p class='title'>{{ props.item.title }}</p>
        </div>
        <div class='group cost'>
            <p>Price</p>
            <Price :price='props.item.price'></Price>
        </div>
        <div class='group'>
            <img class='logo' :src='logo'></img>
        </div>
    </a>
</template>
    
<style scoped>
    .item{
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        outline: 1px rgb(223, 223, 223) solid;
        color: black;
        text-decoration: none;
    }

    .item p {
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    .image{
        width: 50px;
        height: 50px;
    }

    .group{
        display: flex;
        gap: 10px;
    }

    .title{
        text-align: left;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .cost{
        padding: 10px 0px;
        width: 60%;
        max-width: 300px;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    .logo{
        height: 13px;
    }
</style>