<script setup>
    const props = defineProps(['img', 'title']);
    defineEmits(['onClick']);
</script>

<template>
    <button class='item' @click='$emit("onClick")'>
        <img :src="props.img" alt='Item Image'>
        <div class='content'>
            <span class='title'>{{ props.title }}</span>
        </div>
        <div class='arrow'>
            <img src='/rightarrow.svg'></img>
        </div>
    </button>
</template>

<style scoped>
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
        display: inline-block;
        margin: 0;
        font-weight: 500;
        transform: translateX(0%);
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
</style>