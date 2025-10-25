<script setup>
    import TextScroll from '../components/TextScroll.vue';
    import coreStore from '../stores/coreStore';

    const core = coreStore();
    const item = core.cart.get(core.selectedID);
    console.log(item);
</script>

<template>
    <div class='container'>
        <div class='content'>
            <button class='button' @click="core.setSelected(null)">
                <img src='/rightarrow.svg'></img>
            </button>
            <div>
                <img class='image' :src='item.image'></img>
                <TextScroll :text='item.title'></TextScroll>
            </div>
        </div>
        <div class='content display'>

        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content{
        padding: 10px;
        box-sizing: border-box;
    }

    .display{
        flex: 1;
        width: 100%;
        height: 100%;
        background-color: #f3f2f1;
    }

    .button{
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        width: 80px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-items: center;
        cursor: pointer;
    }
    
    .button img{
        width: 30px;
        height: 30px;
        transform-origin: center;
        transform: rotateZ(180deg);
    }

    .image{
        width: 100px;
        height: 100px;
    }
</style>