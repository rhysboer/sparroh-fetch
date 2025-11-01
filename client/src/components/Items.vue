<script setup>
    import { computed, ref } from 'vue';
    import { sorter } from '@/utils/sorter';
    import {useCoreStore, state } from '@/stores/coreStore';
    import Sort from '@/components/Sort.vue';
    import Item from '@/components/Item.vue';
    import findMatches from '@/api/server';
    import Button from './Button.vue';
    import Loader from './Loader.vue';

    const core =useCoreStore();
    const sortBy = ref(0);

    const items = computed(() => {
        const entries = Array.from(core.entries); // Create new array
        sorter(entries, core.title, sortBy.value);
        return entries;
    });
    
    const onSearch = () => {
        const item = core.selected;

        if(!item)
            return;

        core.setLoading();
        findMatches(item.id, item.title, item.price, item.price_code, 
            (data, err) => {
                if(!err){
                    core.addFoundEntries(data.id, data.items);
                }else{
                    core.setError(data.id, 'An error has occurred, try again later.');
                }
            }
        );
    };
</script>

<template>
    <div class='header'>
        <Sort @on-change='(id) => sortBy=id'></Sort>
    </div>
    <div>
        <div v-if="core.state === state.NO_DATA">
            <Button text='Search for Matches' @on-Click="onSearch"></Button>
        </div>
        <div v-else-if="core.state === state.LOADING">
            <Loader></Loader>
        </div>
        <div v-else-if="core.state === state.ERROR">
            <p class='text'>{{ core.error }}</p>
            <Button text='Try Again' @on-click="onSearch"></Button>
        </div>
        <div v-else-if="core.state === state.SUCCESS" class='items'>
            <Item v-for="(item, i) in items" :item='item' :idx='i'></Item>
            <p v-if="items.length == 0" class='text'>Failed to find any matches.</p>
        </div>
    </div>
</template>

<style scoped>
    .header{
        display: flex;
        gap: 10px;
    }

    .items{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .text{
        font-weight: 500;
        font-size: 1.2em;
        padding: 5px;
    }

</style>