<template>
  <div
    class="relative grid w-full pb-12 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-red-700 to-amber-600"
  >
    <div class="max-w-xl px-6 pt-12 mx-auto">
      <div class="flex flex-col items-center justify-center w-full px-3 pt-24 pb-12 font-serif text-3xl text-center">
        <small
          id="ejemplo2"
          class="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20"
        >
          Ejemplo 2
        </small>
        Subir imágenes de referencia y generar variaciones.
      </div>
    </div>
    <div class="grid max-w-lg px-6 mx-auto lg:gap-12 w-full xl:max-w-5xl xl:grid-cols-2 mb-6 gap-6">
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Original en Blender</p>
        </div>
        <div class="relative overflow-hidden shadow-2xl rounded-2xl">
          <div class="object-cover object-center w-full">
            <nuxt-img
              :placeholder="15"
              format="webp"
              loading="lazy"
              width="500"
              height="500"
              alt="3d render de Cuadrado blanco en cubos rojos"
              src="https://res.cloudinary.com/srcouto/image/upload/c_fill,h_500,q_80,w_500/v1654827280/santuan/tokens/14_bmzdy6_i7uuki.jpg"
            />
          </div>
        </div>
      </div>
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Variaciones de Dall·E</p>
        </div>
        <div class="relative overflow-hidden rounded-2xl">
          <LabCarouselSwiperPagination
            :images="[
              'https://gatsby-stn.netlify.app/static/ac405f51e282c9d3833cce9f02445845/97763/DALL_E_2022-05-29_17.38.22_kcx7sw.webp',
              'https://gatsby-stn.netlify.app/static/b1a3b5a84c8261878d7c1d844a97cfc7/97763/DALL_E_2022-05-29_17.38.13_kwe3bj.webp',
              'https://gatsby-stn.netlify.app/static/e3a7a9006dff503ab32f8b5df929f15d/97763/DALL_E_2022-05-29_17.38.19_uzkkqn.webp',
              'https://gatsby-stn.netlify.app/static/df485763fc6f43869f35ac0a8936e703/97763/DALL_E_2022-05-29_17.39.23_undjh0.webp',
            ]"
          />
        </div>
      </div>
    </div>

    <div class="grid max-w-lg px-6 mx-auto lg:gap-12 w-full xl:max-w-5xl xl:grid-cols-2 mb-6 gap-6">
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Original en Blender</p>
        </div>
        <div class="relative overflow-hidden shadow-2xl rounded-2xl">
          <div class="object-cover object-center w-full">
            <nuxt-img
              :placeholder="15"
              format="webp"
              loading="lazy"
              fit="cover"
              width="500"
              height="500"
              alt="3d render de Cuadrado blanco en cubos rojos"
              src="https://res.cloudinary.com/srcouto/image/upload/c_fill,g_center,h_700,w_700,x_0/v1654817028/santuan/tokens/untitled_i27pcx_evplpa.jpg"
            />
          </div>
        </div>
      </div>
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Variaciones de Dall·E</p>
        </div>
        <div class="relative overflow-hidden rounded-2xl">
          <LabCarouselSwiperPagination
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/v1654060071/santuan/tokens/3/DALL_E_2022-05-29_10.21.58_iiejdg.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060036/santuan/tokens/3/DALL_E_2022-05-29_10.21.52_mv1nll.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060065/santuan/tokens/3/DALL_E_2022-05-29_10.22.11_ly3yfn.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060077/santuan/tokens/3/DALL_E_2022-05-29_10.22.06_y8xs3x.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060064/santuan/tokens/3/DALL_E_2022-05-29_10.21.27_dkjkao.webp',
            ]"
          />
        </div>
      </div>
    </div>

    <div class="grid max-w-lg px-6 mx-auto lg:gap-12 w-full xl:max-w-5xl xl:grid-cols-2 mb-6 gap-6">
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-gray-900/80">Original en Blender</p>
        </div>
        <div class="relative overflow-hidden shadow-2xl rounded-2xl">
          <div class="object-cover object-center w-full">
            <nuxt-img
              :placeholder="15"
              format="webp"
              loading="lazy"
              width="500"
              height="500"
              alt="3d render de Cuadrado blanco en cubos rojos"
              src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_500,w_500/v1654817026/santuan/tokens/2_iutptm_j66y1p.jpg"
            />
          </div>
        </div>
      </div>
      <div class="relative w-[320px] h-[320px] mx-auto sm:w-[500px] sm:h-[500px] z-10">
        <div class="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
          <p class="px-3 py-1 font-mono text-xs rounded-full bg-gray-900/80">Variaciones de Dall·E</p>
        </div>
        <div class="relative overflow-hidden rounded-2xl">
          <LabCarouselSwiperPagination
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.14.30_to64th.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.14.58_bvkptt.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060102/santuan/tokens/4/DALL_E_2022-05-27_22.15.46_dtsxky.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060117/santuan/tokens/4/DALL_E_2022-05-27_22.14.46_zo2jvn.webp',
              'https://res.cloudinary.com/srcouto/image/upload/v1654060112/santuan/tokens/4/DALL_E_2022-05-27_22.15.34_zf8vgl.webp',
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
