<script setup>
    import Loader from '@/components/Loader.vue';
    import { ref } from 'vue';

    const props = defineProps(['text']);
    const emits = defineEmits(['onClick']);
    const isLoading = ref(false);

    function onClick(){
        emits('onClick');
        isLoading.value = true;
    }

</script>

<template>
    <div class='searcher'>
        <button class='button' v-if="!isLoading" @click='onClick'>{{ props.text }}</button>
        <Loader v-else></Loader>
    </div>
</template>

<style scoped>
    .searcher{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .button{
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        background-color: rgb(81, 154, 248);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .button:hover{
        background-color: rgb(110, 172, 253);
    }
</style>