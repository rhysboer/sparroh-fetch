<script setup>
    import icon from '@/assets/sort.svg';
    import { ref } from 'vue';
    
    const emits = defineEmits(['onChange']);

    const show = ref(false);
    const selected = ref(0);
    const options = [
        'Relevance',
        'Price - Ascending',
        'Price - Decending'
    ];

    function onClick(index){
        selected.value = index;

        emits('onChange', index);
    }

</script>

<template>
    <button class='sort' @click='show = !show' @mouseleave='show = false'>
        <img class='icon' :src='icon'></img>
        <p style='font-weight: 600;'>Sort</p>
        <div :class='["submenu", show ? "visible" : ""]'>
            <p v-for="(v, i) in options" :key='i' :class='selected == i ? "selected" : ""' @click='onClick(i)'>{{ v }}</p>
        </div>
    </button>
</template>

<style scoped>
    .sort{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        background-color: white;
        padding: 3px 7px;
        border-radius: 15px;
        border: none;
        outline: 1px rgb(223, 223, 223) solid;
    }

    .icon{
        width: 25px;
        height: 25px;
    }

    .submenu{
        position: absolute;
        display: none;
        width: max-content;
        flex-direction: column;
        background-color: white;
        top: 100%;
        left: 0;
        padding: 5px;
        outline: 1px rgb(223, 223, 223) solid;
        border-radius: 5px;
    }

    .submenu p {
        position: relative;
        text-align: left;
        padding: 5px;
        padding-left: 15px;
    }

    .submenu p:hover{
        background-color: rgba(132, 179, 241, 0.589);
    }

    .visible{
        display: flex;
    }

    .selected::before{
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        border-radius: 2px;
        background-color: black;
        top: 50%;
        left: 0.25em;
        transform: translateY(-50%);
    }

</style>