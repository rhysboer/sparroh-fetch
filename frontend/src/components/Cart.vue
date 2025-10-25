<script setup>
    import Item from './Item.vue';
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

    function onClick() {
        findItemsAmazon((res) => {
            console.log(res);
            core.setCart(res);
        });
    }
</script>

<template>
    <div class='content'>
        <div v-for="[key, item] in core.cart">
            <Item :key='key' :img="item.image" :title="item.title" @onClick="() => core.setSelected(item.id)"></Item>
        </div>
        <button @click="onClick">Reload</button>
    </div>
</template>

<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #f3f2f1;
        padding: 10px;
    }
</style>