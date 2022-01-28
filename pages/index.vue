<template>
  <IndexTemplate :data="data" />
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import { Context } from '@nuxt/types';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  async asyncData({ $content, app }: Context) {
    const page = (await $content(
      app.i18n.locale,
      'home'
    ).fetch()) as Array<FetchReturn>;

    return { data: page[0] };
  },
})
export default class IndexPage extends Vue {
  public get head() {
    return {
      title: 'Home — Dekatrian',
    };
  }
}
</script>
