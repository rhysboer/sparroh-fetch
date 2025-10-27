<script setup>
    import findMatches from '../api/server';
    import TextScroll from '../components/TextScroll.vue';
    import Sort from '../components/Sort.vue';
    import coreStore from '../stores/coreStore';
    import Item from '../components/Item.vue';
    import { computed, ref } from 'vue';
    import { sortByPrice, sortByRelevance } from '../utils/sorter';

    const sortBy = ref(0);
    const core = coreStore();
    const coreItem = core.cart.get(core.selectedID);

    const items = computed(() => {
        if(core.selectedItems == null){
            return [];
        }

        const entries = Array.from(core.selectedItems);
        if(sortBy.value == 0){ 
            // Relevance
            sortByRelevance(entries, coreItem.title);
        }else{
            // Price Ascending / decending
            sortByPrice(entries, sortBy.value == 1 ? true : false); 
        }

        return entries;
    });

    console.log('items', items);

    function onClick(){
        findMatches(coreItem, (data, err) => {
            if(err == false){
                core.setItems(data.id, data.items);
            }
        });
    }
</script>

<template>
    <div class='container'>
        <div class='content'>
            <button class='button' @click="core.setSelected(null)">
                <img src='/rightarrow.svg'></img>
            </button>
            <div class='itemdetails'>
                <img class='image' :src='coreItem.image'></img>
                <div style='width: 80%; margin: auto;'>
                    <TextScroll :text='coreItem.title'></TextScroll>
                </div>
                <div class='detail'>
                    <p>Price</p>
                    <p class='price'>{{ coreItem.amount }}</p>
                </div>
            </div>
        </div>
        <div class='content items'>
            <div class='group'>
                <div></div>
                <Sort @on-change='(id) => sortBy=id'></Sort>
            </div>
            <button @click='onClick'>Find Matches</button>
            <Item v-for="item in items" :item='item'></Item>
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
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 1px rgb(223, 223, 223) solid;
    }

    .group{
        display: flex;
    }
</style>