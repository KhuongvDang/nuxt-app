<template>
  <div class="w-screen h-screen">
    <Renderer
      ref="renderer"
      resize
      antialias
      :orbit-ctrl="{
        autoRotate: true,
        enableDamping: true,
        dampingFactor: 0.05,
      }"
    >
      <Camera :position="{ x: 0, y: 0, z: 10 }" />
      <Scene background="#000">
        <PointLight :position="{ y: 50, z: 50 }" />
        <Sphere :radius="1" :width-segments="32" :height-segments="16">
          <StandardMaterial color="red" />
        </Sphere>
        <Sphere :position="{ x: 4 }" :radius="0.5">
          <StandardMaterial color="green" />
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>
<script lang="ts" setup>
// import
import {
  Mesh,
  Camera,
  Sphere,
  PhongMaterial,
  Renderer,
  Scene,
  SphereGeometry,
  BoxGeometry,
  BasicMaterial,
  PointLight,
  LambertMaterial,
  StandardMaterial,
} from "troisjs";
// export
</script>
