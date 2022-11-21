<template>
  <div id="modals">
    <Offcanvas/>
    <AppHeader />
    <main class="flex flex-col w-full relative z-[99]">
      <slot />
    </main>
  </div>
</template>
