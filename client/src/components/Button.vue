<script setup>
    const props = defineProps(['text']);
    defineEmits(['onClick']);
</script>

<template>
    <button class='button-base' @click='$emit("onClick")'>{{ props.text }}</button>
</template>

<style scoped>
    .button-base{
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        background-color: rgb(81, 154, 248);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .button-base:hover{
        background-color: rgb(110, 172, 253);
    }
</style>