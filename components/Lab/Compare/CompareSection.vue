<template>
  <div
    class="relative w-full pb-12 mx-auto scroll-mt-20 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-indigo-700 to-red-700"
  >
    <div class="w-full max-w-5xl mx-auto grid xl:grid-cols-2 relative">
      <div class="self-start text-left xl:sticky top-24">
        <div
          id="ejemplo1"
          class="outline-none flex flex-col w-full max-w-xl px-8 py-24 pt-24 mx-auto font-mono text-lg md:text-xl"
        >
          <small
            class="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20"
          >
            Ejemplo 1
          </small>
          Generar textos con diferentes estilos.
          <p class="relative flex flex-col mt-3 font-serif text-4xl md:text-6xl">
            <span class="absolute text-6xl -top-1 -left-7 opacity-60">&ldquo;</span>
            Un conejo en paracaidas con una zanahoria.
            <span class="mt-6 font-mono text-sm">3d render | Pintura</span>
          </p>
        </div>
      </div>
      <div class="grid w-full max-w-xl gap-16 px-8 md:px-2 py-12 mx-auto">
        <div class="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
          <div
            class="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage min-h-[200px] md:min-h-[450px]"
          >
            <LabCompareImageComparisonSlider
              before="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057962/santuan/DALL_E_2022-05-29_10.31.57_zplkhy.jpg"
              after="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058047/santuan/DALL_E_2022-05-29_10.34.15_alvgso.jpg"
            />
          </div>
        </div>
        <div class="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
          <div
            class="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage min-h-[200px] md:min-h-[450px]"
          >
            <LabCompareImageComparisonSlider
              before="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018509/santuan/DALL_E_2022-05-29_10.31.54_rgditm.jpg"
              after="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018485/santuan/DALL_E_2022-05-29_10.34.24_dnxu0u.jpg"
            />
          </div>
        </div>
        <div class="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
          <div
            class="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage min-h-[200px] md:min-h-[450px]"
          >
            <LabCompareImageComparisonSlider
              before="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057970/santuan/DALL_E_2022-05-29_10.31.50_boam6y.jpg"
              after="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058032/santuan/DALL_E_2022-05-29_10.33.57_jadsvm.jpg"
            />
          </div>
        </div>
        <div class="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
          <div
            class="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage min-h-[200px] md:min-h-[450px]"
          >
            <LabCompareImageComparisonSlider
              before="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057987/santuan/DALL_E_2022-05-29_10.31.59_hgtqxf.jpg"
              after="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058046/santuan/DALL_E_2022-05-29_10.34.00_ekoxis.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.compareImage {
  @apply bg-gray-800/50
}
</style>