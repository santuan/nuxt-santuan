<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Stars } from "@tresjs/cientos";
</script>

<template>
  <div
    class="fixed flex justify-center items-center inset-0 z-10 w-full h-screen"
  >
    <ClientOnly fallback-tag="span" fallback="Cargando...">
      <TresCanvas clear-color="#82DBC5" preset="realistic" window-size>
        <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
        <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh>
        <Stars />
        <OrbitControls auto-rotate :auto-rotate-speed="0.1" />
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
