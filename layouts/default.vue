<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="antialiased subpixel-antialiased w-full h-screen bg-indigo-50">
    <DekatrianLogo />

    <div class="container mx-auto text-center">
      <MainMenu class="mt-5" />
      <LocaleMenu />
    </div>

    <div class="container mx-auto bg-white shadow mt-5 pl-3 pr-3 pt-3 pb-3">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Dekatrian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Dekatrian Calendar',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
};
</script>
