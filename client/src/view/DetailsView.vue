<script setup>
    import TextScroll from '@/components/TextScroll.vue';
    import {useCoreStore } from '@/stores/coreStore';
    import Items from '@/components/Items.vue';

    const core =useCoreStore();
    const item = core.selected;
</script>

<template>
    <div class='container'>
        <button class='exit header' @click="core.setSelected(null)">
            <img src='/rightarrow.svg'></img>
        </button>
        <div class='content'>
            <div class='itemdetails'>
                <img class='image' :src='item.image_url'></img>
                <div style='width: 80%; margin: auto;'>
                    <TextScroll :text='item.title'></TextScroll>
                </div>
            </div>
        </div>
        <div class='content border header'>
            <div class='itemdetails'>
                <div class='detail'>
                    <p>Price</p>
                    <p class='price'>{{ item.price }}</p>
                </div>
            </div>
        </div>
        <div class='content items'>
            <Items></Items>
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .content{
        padding: 10px;
        box-sizing: border-box;
        background-color: white;
    }

    .border{
        border-bottom: 1px rgb(223, 223, 223) solid;
    }

    .header{
        position: sticky;
        top: 0px;
        z-index: 1;
    }

    .itemdetails{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .detail{
        width: 50%;
        max-width: 300px;
        display: flex;
        justify-content: space-between;
    }

    .detail > p{
        font-size: 1.15em;
        font-weight: 600;
    }

    .detail > p:first-child{
        color: rgba(0, 0, 0, 0.705);
    }

    .price::before{
        position: relative;
        content: '$';
        font-size: 0.7em;
        font-weight: 1000;
        top: -.3em;
    }

    .items{
        flex: 1;
        width: 100%;
        height: fit-content;
        background-color: #f3f2f1;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .exit{
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        width: 80px;
        height: 30px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-items: center;
        cursor: pointer;
        box-sizing: unset;
        z-index: 2;
    }
    
    .exit img{
        width: 30px;
        height: 30px;
        transform-origin: center;
        transform: rotateZ(180deg);
    }

    .image{
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 1px rgb(223, 223, 223) solid;
    }
</style>