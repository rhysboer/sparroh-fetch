<script setup>
    const props = defineProps(['price']);
</script>

<template>
    <p class='price'>{{ props.price }}</p>
</template>

<style scoped>
    .price{
        font-size: 1.15em;
        font-weight: 500;
    }

    .price::before{
        content: '$';
        position: relative;
        font-size: 0.7em;
        font-weight: 1000;
        top: -.3em;
    }
</style>