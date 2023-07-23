<template>
  <div class="flex gap-24">
    <NuxtLink
      :to="contact.path"
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer hover:translate-y-min3 transition-[1s]"
    >
      <img alt="img" :src="contact.imageSrc" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { IDataLinks } from '~/helpers/interfaces/IDataLinks';

defineProps({
  contacts: {
    type: Array as PropType<IDataLinks[]>,
    required: true,
  },
});
</script>
