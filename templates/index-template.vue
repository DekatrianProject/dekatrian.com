<template>
  <div v-if="data" class="flex flex-col gap-8">
    <h1 class="text-2xl">{{ data.title }}</h1>

    <nuxt-content class="flex flex-col gap-4" :document="data" />
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class IndexTemplate extends Vue {
  @Prop() data!: FetchReturn;
}
</script>
