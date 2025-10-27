<script setup>
    import { onMounted } from 'vue';
    import { findItemsAmazon } from '../utils/amazon';
    import coreStore from '../stores/coreStore';

    const core = coreStore();

    onMounted(() => {
        findItemsAmazon((res) => {
            console.log(res);
            core.setCart(res);
        });
    });

    function refresh() {
        findItemsAmazon((res) => {
            console.log(res);
            core.setCart(res);
        });
    }
</script>

<template>
    <div class='container'>
        <div v-for="[key, item] in core.cart">
            <button :key='key' class='item' @click='() => core.setSelected(item.id)'>
                <img :src='item.image' alt='Item Image'>
                <div class='content'>
                    <span class='title'>{{ item.title }}</span>
                </div>
                <div class='arrow'>
                    <img src='/rightarrow.svg'></img>
                </div>
            </button>
        </div>
        <button @click="refresh">Reload</button>
    </div>
</template>

<style scoped>
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #f3f2f1;
        padding: 10px;
    }

    .item{
        --imgsize: 50px;
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: var(--imgsize) minmax(0, 1fr) 25px;
        gap: 5px;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
        outline: 1px rgb(223, 223, 223) solid;
        overflow: hidden;
        cursor: pointer;
        border: none;
        transition: transform 0.3s;
    }
    
    .item:hover{
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.356);
        transform: translateY(-3px);
    }

    .item > img{
        width: var(--imgsize);
        height: var(--imgsize);
    }

    .content{
        overflow: hidden;
        white-space: nowrap;
    }

    .title{
        text-align: left;
        display: inline-block;
        margin: 0;
        font-weight: 500;
        transform: translateX(0%);
    }

    .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .arrow > img{
        width: 25px;
        height: 25px;
    }
</style>