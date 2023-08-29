<script setup lang="ts">

useHead({
  title: "Galería",
  bodyAttrs: {
    class: "galeria",
  },
});
</script>

<template>
  <div>
    <div
      class="w-full p-3 mx-auto min-h-screen flex justify-center items-center bg-black"
    >
      <div
        class="moveUp hidden duration-1000 fixed space-x-3 right-12 z-[600] md:flex justify-center top-1 m-3"
      >
        <span
          class="btn animate__animated animate__flipInX animate__delay animate__slower !text-sm uppercase"
        >
          hechos con Blender
        </span>
        <NuxtLink
          to="/lab/dall-e"
          class="btn animate__animated animate__flipInX animate__delay animate__slower !text-sm uppercase blue"
        >
          hechos con DALL·E·2
        </NuxtLink>
      </div>
      <!-- <GalleryHero /> -->
      <div class="relative w-full pt-16 bg-black bg-pattern scroll-mt-16">
        <client-only>
          <Gallery />
        </client-only>
      </div>
    </div>
  </div>
</template>
