<template>
  <nav>
    <NuxtLink
      v-for="item in items"
      :key="item.path"
      class="ml-1 mr-1 pl-1 pr-1 pt-1 pb-1"
      :to="localePath(item.path, locale)"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import VueI18n from 'vue-i18n';
import { Component, Vue } from 'vue-property-decorator';

export type MenuItem = {
  name: VueI18n.TranslateResult | any;
  path: string;
};

@Component({})
export default class MainMenu extends Vue {
  public get locale() {
    return this.$i18n.locale;
  }

  public get items(): Array<MenuItem> {
    return [
      { name: this.$i18n.t('Home'), path: '/' },
      { name: this.$i18n.t('Why Dekatrian?'), path: '/why' },
      { name: this.$i18n.t('What is Dekatrian?'), path: '/what-is-it' },
      { name: this.$i18n.t('The Months'), path: '/months' },
      { name: this.$i18n.t('How to use Dekatrian?'), path: '/how-to-use' },
      { name: this.$i18n.t('Links and Apps'), path: '/links' },
      { name: this.$i18n.t('About'), path: '/about' },
      { name: this.$i18n.t('Contact'), path: '/get-in-touch' },
      { name: this.$i18n.t('Community'), path: '/community' },
      { name: this.$i18n.t('Developers'), path: '/developers' },
    ];
  }
}
</script>
