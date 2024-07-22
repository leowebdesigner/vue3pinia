<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsersStore } from '../../../store/users';

const useStore = useUsersStore()

onMounted(() => {
useStore.getMe()
})
</script>

<template>
    <p>Olá {{useStore.me?.name }}</p>
    <div>Home Page Admin</div>
</template>