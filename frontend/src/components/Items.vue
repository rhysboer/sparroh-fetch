<script setup>
    import { computed, ref } from 'vue';
    import { sorter } from '@/utils/sorter';
    import { coreStore, state } from '@/stores/coreStore';
    import Sort from '@/components/Sort.vue';
    import Item from '@/components/Item.vue';
    import IconButton from '@/components/IconButton.vue';
    import reloadIcon from '@/assets/reload.svg';
    import findMatches from '@/api/server';
    import Button from './Button.vue';
    import Loader from './Loader.vue';

    const core = coreStore();
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
                    console.log('error');
                    core.setError(data.id, 'An error has occurred, try again later.');
                }
            }
        );
    };
</script>

<template>
    <div class='header'>
        <Sort @on-change='(id) => sortBy=id'></Sort>
        <IconButton :icon='reloadIcon' text="Reload"></IconButton>
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
            <Item v-for="item in items" :item='item'></Item>
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