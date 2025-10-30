<script setup>
    import { computed, ref } from 'vue';
    import { sortByPrice, sortByRelevance } from '@/utils/sorter';
    import coreStore from '@/stores/coreStore';
    import Sort from '@/components/Sort.vue';
    import Item from '@/components/Item.vue';
    import IconButton from '@/components/IconButton.vue';
    import reloadIcon from '@/assets/reload.svg';
    import findMatches from '@/api/server';
    import Searcher from './Searcher.vue';

    const sortBy = ref(0);
    const core = coreStore();
    const coreItem = core.cart.get(core.selectedID);

    const items = computed(() => {
        if(core.selectedItems == null){
            return [];
        }

        const entries = Array.from(core.selectedItems);
        if(sortBy.value == 0){ 
            sortByRelevance(entries, coreItem.title);
        }else{
            sortByPrice(entries, sortBy.value == 1 ? true : false); 
        }

        return entries;
    });

    function onClick(){

        findMatches(coreItem, (data, err) => {
            if(err == false){
                core.setItems(data.id, data.items);
            }else{
                core.setError()
            }
        });
    }
</script>

<template>
    <div class='group'>
        <Sort @on-change='(id) => sortBy=id'></Sort>
        <IconButton :icon='reloadIcon' text="Reload"></IconButton>
    </div>
    <Searcher text="Start Search" @on-click="onClick"></Searcher>
    <Item v-for="item in items" :item='item'></Item>
</template>

<style scoped>
    .group{
        display: flex;
        gap: 10px;
    }
</style>