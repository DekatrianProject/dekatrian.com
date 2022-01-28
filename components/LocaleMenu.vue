<template>
  <ul class="flex justify-items-center">
    <li v-for="locale in availableLocales" :key="locale.code" class="mx-1">
      <nuxt-link :to="switchLocalePath(locale.code)">
        {{ locale.name }}

        <img
          :src="localeImage(locale.code)"
          :alt="locale.name"
          class="h-4 w-4"
        />
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { LocaleObject } from '@nuxtjs/i18n';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class LocaleMenu extends Vue {
  public get availableLocales(): Array<LocaleObject> {
    return (this.$i18n.locales as Array<LocaleObject>).filter(
      (locale) => locale.code !== this.$i18n.locale
    );
  }

  public localeImage(locale: string): string {
    return `/assets/images/${locale}.svg`;
  }
}
</script>
