<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <button class="bg-red p-2" @click="click">click</button>
    <div ref="box" class="bg-green-500 w-12 h-12"></div>
  </div>
</template>
<script lang="ts" setup>
import anime from "animejs";
const box = ref(null);
const click = async () => {
  anime({
    targets: box.value,
    translateX: 500,
    backgroundColor: "#ccc",
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
    loop: true,
    duration: 2000,
  });
};
</script>
