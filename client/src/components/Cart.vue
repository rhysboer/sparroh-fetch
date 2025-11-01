<script setup>
    import { computed, ref } from 'vue';
    import { findItemsAmazon } from '../utils/amazon';
    import { useCoreStore }from '../stores/coreStore';
    import Button from './Button.vue';
    import IconButton from './IconButton.vue';
    import reloadIcon from '@/assets/reload.svg';

    const props = defineProps(['filter']);
    const core = useCoreStore();
    const error = ref(null);

    const cartItems = computed(() => {
        const filter = core.filter.toLowerCase();
        
        if(filter.length <= 0)
            return Array.from(core.cart);

        const items = core.cart;
        const entries = [];

        for(const [key, item] of items){
            if(item.title.toLowerCase().includes(filter)){
                entries.push([key, item]);
            }
        }

        return entries;
    });

    async function scanCart() {
        const res = await findItemsAmazon((res) => {
            if(res.length <= 0){
                error.value = 'Failed to find items, cart is empty.'
                return;
            }

            core.addCartItems(res);
            error.value = null;
        });

        if(res == false){
            error.value = 'Failed to scan cart.'
            return;
        }
    }
</script>

<template>
    <div class='container'>
        <div v-if="cartItems.length > 0">
            <IconButton :icon='reloadIcon' text='Rescan Cart' @on-click="scanCart"></IconButton>
        </div>
        <p class='error' v-if="error != null">{{ error }}</p>
        <div v-for="[key, item] in cartItems">
            <button :key='key' class='item' @click='() => core.setSelected(item.id)'>
                <img :src='item.image_url' alt='Item Image'>
                <div class='content'>
                    <p class='title'>{{ item.title }}</p>
                </div>
                <div class='arrow'>
                    <img src='/rightarrow.svg'></img>
                </div>
            </button>
        </div>
        <div v-if="cartItems.length <= 0">
            <Button text="Scan Cart" @on-click="scanCart"></Button>
        </div>
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
        margin: 0;
        font-weight: 500;
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

    .error{
        font-weight: 500;
        font-size: 1.2em;
        padding: 5px;
    }
</style>