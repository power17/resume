<template>
	<router-view></router-view>
</template>

<script lang="ts" setup>
import appStore from "./store";
const { token } = appStore.useTokenStore
const { getAndUpdateUserInfo } = appStore.useUserInfoStore
// 获取用户信息
getAndUpdateUserInfo()
</script>
