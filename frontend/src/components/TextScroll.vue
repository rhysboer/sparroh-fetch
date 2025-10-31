<script setup>
    import { onMounted, ref, useTemplateRef } from 'vue';

    const containerRef = useTemplateRef('containerRef');
    const textRef = useTemplateRef('textRef');
    const props = defineProps(['text']);
    const distance = ref(0);

    onMounted(() => {
        distance.value = -(textRef.value.scrollWidth - containerRef.value.clientWidth);
    });
</script>

<template>
    <div class='container' ref='containerRef'>
        <p class='text' :style='{"--distance": "-1253px"}' ref='textRef'>{{ props.text }}</p>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: fit-content;
        overflow: hidden;
    }

    .text {
        margin: 0;
        text-align: center;
        white-space: nowrap;
        font-weight: 500;
        font-size: 1.3em;

        /*animation: slide 10s infinite alternate linear;*/
    }

    @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(var(--distance)); }
    }
</style>