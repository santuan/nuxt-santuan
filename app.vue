<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#f14c44" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 1.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);

}

</style>
