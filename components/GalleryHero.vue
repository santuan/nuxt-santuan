<template>
    <div class="w-full flex justify-center items-center h-screen relative z-[500]">
  <div class=" h-96 w-96  mx-auto object-cover z-10 relative ">
    <video
      autoplay
      loop
      muted
      playsinline
      class="animate__animated animate__fadeIn animate__slow"
      poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,h_500,q_25/v1642599935/stn-renders/1230001-0500_mss0pe.webp"
    >
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:low,w_500/v1642599935/stn-renders/1230001-0500_mss0pe.mp4"
        type="video/mp4"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:low,w_500/v1642599935/stn-renders/1230001-0500_mss0pe.webm"
        type="video/webm"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:low,w_500/v1642599935/stn-renders/1230001-0500_mss0pe.ogv"
        type="video/ogg"
      />
    </video>
  </div>
  <div class="absolute bottom-0 left-0 right-0 flex justify-center z-[501] items-center opacity-30">
    <a href="#ejemploBlender" class="flex justify-center items-center flex-col animate__animated animate__fadeInUp animate__slower">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 animate-bounce"
        style="animation-duration: 3s;"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
      </svg>
      <div class="btn m-2">Realizados en Blender</div>
    </a>
  </div>
</div>

</template>