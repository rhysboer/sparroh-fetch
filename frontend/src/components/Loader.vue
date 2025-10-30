<script setup>
    const length = 2; // Animation Length
    const step = length / 4;
</script>

<template>
    <div class='loadbox'>
        <p class='text'>Searching for matches</p>
        <div class='loader' :style='{"--length": `${length}s`}'>
            <div class='node' :style='{"--rotation": "0deg", "--delay": `${step * 0}s`}'></div>
            <div class='node' :style='{"--rotation": "90deg", "--delay": `-${step * 1}s`}'></div> 
            <div class='node' :style='{"--rotation": "-90deg", "--delay": `-${step * 3}s`}'></div>
            <div class='node' :style='{"--rotation": "-180deg", "--delay": `-${step * 2}s`}'></div>
        </div>
    </div>
</template>

<style scoped>
    .loadbox{
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }

    .text{
        font-weight: 500;
        font-size: 1.2em;
    }

    .loader{
        --size: 30px;
        --offset: 5px;
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(2, var(--size));
        grid-template-rows: repeat(2, var(--size));
        row-gap: var(--offset);
        column-gap: var(--offset);
    }

    .node{
        --rotation: 0deg;
        background-color: rgb(212, 212, 212);
        height: var(--size);
        width: var(--size);
        animation: anim var(--length) infinite ease-in-out calc(var(--delay));
        will-change: transform;
    }

    @keyframes anim {
        0%, 50%{
            transform: rotateZ(var(--rotation)) translateX(0);
        }

        75%, 100%{
            transform: rotateZ(var(--rotation)) translateX(calc(100% + var(--offset)));
        }
    }
</style>