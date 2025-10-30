<script setup>
    import icon from '@/assets/reload.svg';
    
    const props = defineProps(['text', 'icon']);
    defineEmits(['onClick']);

</script>

<template>
    <button class='button' @click='$emit("onClick")'>
        <img class='icon' :src='props.icon'></img>
        <p style='font-weight: 600;'>{{ props.text }}</p>
    </button>
</template>

<style scoped>
    .button{
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

    .button:active{
        background-color: rgb(240, 240, 240);
    }

    .icon{
        width: 25px;
        height: 25px;
    }
</style>