<script setup lang="ts">
useHead({
  title: "Hecho con Dall-e",
  bodyAttrs: {
    class: "dalle",
  },
});
</script>

<template>
  <div>
    <LabDropdownDalle />
    <LabDalleHero />
    <LabCompareSection />
    <LabCarouselSection />
    <LabTextVariationSection />
    <ClientOnly>
      <LabDalleGrid />
    </ClientOnly>
  </div>
</template>
