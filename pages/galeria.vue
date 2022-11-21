<template>
  <div>
    <div class="w-full p-3 mx-auto min-h-screen flex justify-center items-center bg-black">
      <div class="moveUp duration-1000 fixed right-12 z-[600] flex justify-center top-1 m-3">
        <NuxtLink
          to="/lab/dall-e"
          class="btn animate__animated animate__flipInX animate__delay animate__slower !text-sm uppercase red"
          >DALL·E·2
        </NuxtLink>
      </div>
      <!-- <GalleryHero /> -->
      <div class="relative w-full bg-black bg-pattern scroll-mt-16">
        <Gallery />
      </div>
    </div>
  </div>
</template>
