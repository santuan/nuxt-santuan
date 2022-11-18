<template>
  <div
    class="relative grid w-full px-6 pb-64 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-amber-600 via-amber-600 to-yellow-400"
  >
    <div class="max-w-xl px-6 pt-12 mx-auto">
      <div
        id="ejemplo3"
        class="flex flex-col items-center justify-center w-full px-3 pt-24 pb-6 font-serif text-xl text-center md:text-3xl"
      >
        <small
          class="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20"
        >
          Ejemplo 3
        </small>
        Variaciones de una secuencia de palabras, multiples maneras de percibirlas.
      </div>
    </div>
    <div class="grid w-full max-w-7xl gap-3 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div
        class="max-w-sm mx-auto relative grid grid-cols-1 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl bg-gray-900"
      >
        <div class="lg:max-w-sm rounded-t-2xl overflow-hidden relative">
          <LabCarouselSwiperTextVariation
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748309/santuan/history/01_51_kw7pv0.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748308/santuan/history/01_42_jw4b0n.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748281/santuan/history/01_46_ji4n2k.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654748270/santuan/history/01_43_reejtr.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_440/v1654747866/santuan/history/01_49_blcwpq.webp',
            ]"
          />
        </div>
        <div class="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80 md:h-44">
          <p class="w-full font-serif text-xl font-bold text-left md:text-2xl">En un castillo flotando en el cielo</p>
        </div>
      </div>
      <div
        class="max-w-sm mx-auto relative grid grid-cols-1 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl bg-gray-900"
      >
        <div class="lg:max-w-sm rounded-t-2xl overflow-hidden relative">
          <LabCarouselSwiperTextVariation
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748131/santuan/history/01_61_tbi5wb.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748104/santuan/history/01_59_twfdch.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748069/santuan/history/01_56_sce6xb.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748049/santuan/history/01_58_bip9jf.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748037/santuan/history/01_53_eopwxq.webp',
            ]"
          />
        </div>
        <div class="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80 md:h-44">
          <p class="w-full font-serif text-xl font-bold text-left md:text-2xl">
            Dos roedores disfrutaban una taza de té junto al fuego del hogar.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm mx-auto relative grid grid-cols-1 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl bg-gray-900"
      >
        <div class="lg:max-w-sm rounded-t-2xl overflow-hidden relative">
          <LabCarouselSwiperTextVariation
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747828/santuan/history/01_68_z7izax.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747825/santuan/history/01_63_ga6ipb.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747796/santuan/history/01_69_lz2jig.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747778/santuan/history/01_66_vtipyc.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747673/santuan/history/01_65_utmpcx.webp',
            ]"
          />
        </div>
        <div class="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80 md:h-44">
          <p class="w-full font-serif text-xl font-bold text-left md:text-2xl">
            <span class="font-normal opacity-80">y mientras caía</span>
            <br />
            un conejo en paracaidas con una zanahoria.
          </p>
        </div>
      </div>
      <div
        class="max-w-sm mx-auto relative grid grid-cols-1 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl bg-gray-900"
      >
        <div class="lg:max-w-sm rounded-t-2xl overflow-hidden relative">
          <LabCarouselSwiperTextVariation
            :images="[
              'https://res.cloudinary.com/srcouto/image/upload/v1654747643/santuan/history/01_8_e75xq5.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747639/santuan/history/01_9_hf4b07.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747637/santuan/history/00_vgnzgw.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654748263/santuan/history/01_7_m8vvfb.webp',
              'https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_600/v1654747723/santuan/history/01_11_rfzapy.webp',
            ]"
          />
        </div>
        <div class="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80 md:h-44">
          <p class="w-full font-serif text-xl font-bold text-left md:text-2xl">
            Un rey conejo. <span class="font-normal opacity-80">lo estaba esperando</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
