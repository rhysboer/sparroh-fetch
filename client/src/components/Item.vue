<script setup>
    import Price from './Price.vue';
    import logo from '@/assets/aliexpress.svg';

    const props = defineProps(['item', 'idx']);
</script>

<template>
    <div class='itembody'>
        <a class='item' :href='props.item.url' target='_blank' rel='noopener noreferrer' :style="{'--idx': props.idx}">
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
    </div>
</template>
    
<style scoped>
    .itembody{
        display: flex;
        transition: transform 0.3s;
    }
    
    .item{
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        outline: 1px rgb(223, 223, 223) solid;
        box-sizing: border-box;
        color: black;
        text-decoration: none;
        will-change: transform, opacity;
        animation: anim 0.3s ease-in-out calc(var(--idx) * 0.05s);
        animation-fill-mode: both;
    }

    .item:hover{
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.356);
    }

    .itembody:hover{
        transform: translateY(-3px);
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

    @keyframes anim {
        from{
            opacity: 0%;
            transform: translateY(50%);
        }

        to{
            opacity: 100%;
            transform: translateY(0);
        }
    }
</style>