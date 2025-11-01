<script setup>
    const props = defineProps({
        text: { type: String, default: '' },
        icon: { type: String, default: '' },
        disabled: { type: Boolean, default: false },
    });
    
    defineEmits(['onClick']);
</script>

<template>
    <button :class="['button-base', disabled ? 'disabled' : 'enabled']" @click='$emit("onClick")'>
        <img class='icon' :src='props.icon'></img>
        {{ props.text }}
    </button>
</template>

<style scoped>
    .button-base{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 3px 7px;
        border-radius: 15px;
        border: none;
        outline: 1px rgb(223, 223, 223) solid;
        font-weight: 600;
    }
    
    .enabled:active{
        background-color: rgb(240, 240, 240);
    }

    .enabled{
        cursor: pointer;
        background-color: white;
        color: black;
    }

    .disabled{
        background-color: rgb(204, 204, 204);
        color: rgb(51, 51, 51);
        pointer-events: none;
    }

    .icon{
        width: 25px;
        height: 25px;
    }
</style>