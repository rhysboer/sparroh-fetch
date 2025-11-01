<script setup>
    const props = defineProps(['defValue']);
    defineEmits(['onChange']);
</script>

<template>
    <div class='content'>
        <div class='group'>
            <input class='search' type='text' :default="props.defValue" placeholder='Search' @input="(e) => $emit('onChange', e)"></input>
            <img class='icon' src='/search.svg'></img>
        </div>
    </div>
</template>

<style scoped>
    .content{
        padding: 10px;
    }

    .search{
        width: 100%;
        padding: 10px 7px;
        padding-left: 30px;
        box-sizing: border-box;
        background-color: #f1f1f1;
        border-radius: 5px;
        border: none;
    }   

    .search:focus{
        outline: 2px rgba(51, 88, 190, 0.747) solid;
    }

    .group{
        position: relative;
    }

    .icon{
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 7px;
        transform: translateY(-50%);
    }
</style>