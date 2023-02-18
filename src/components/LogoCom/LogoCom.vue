<template>
	<div class="logo" @click="toHome">
	    <img src="@/assets/images/91huajian-caise.svg" />
	  </div>
</template>

<script setup lang="ts">
	interface IBgcColor {
		fontColor? : string,
		bgColor? : string
	}
	withDefaults(defineProps<IBgcColor>(), {
		fontColor: '#74a274',
		bgColor: ''
	})
	const router = useRouter();
	const toHome = () => {
		router.push('/')
	}
</script>

<style lang="scss" scoped>
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    img {
      width: 120px;
    }
    span {
      letter-spacing: 2px;
      font-size: 22px;
      font-weight: 600;
      font-family: monospace;
      color: v-bind('fontColor');
      margin-left: 10px;
    }
  }
</style>