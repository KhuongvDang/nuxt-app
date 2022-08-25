<template>
  <div class="h-screen w-screen">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const layout = ref("default");
</script>
