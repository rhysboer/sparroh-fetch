<script setup>
	import CartView from '../view/CartView.vue';
	import DetailsView from '../view/DetailsView.vue';
	import { coreStore } from '../stores/coreStore';
	const core = coreStore();
</script>

<template>
	<CartView v-if="core.id == null"></CartView>
	<DetailsView v-else></DetailsView>
</template>

<style scoped>

</style>
