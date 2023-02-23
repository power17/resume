<template>
	<div ref="indexRef" class="index-box" >
		<!-- 导航栏 -->
		<nav-bar :bg-color="navColor" :font-color="fontColor" :icon-color="iconColor"></nav-bar>
    </div>		
</template>

<script setup lang="ts">
	import { onBeforeUnmount, onMounted, ref } from 'vue'
	import appStore from '@/store'
	const navColor = ref<string>('');
	const fontColor = ref<string>('#fff');
	const iconColor = ref<string>('#fff');

	
</script>

<style lang="scss" scoped>
  .index-box {
    position: relative;
    z-index: 0;
  }
</style>