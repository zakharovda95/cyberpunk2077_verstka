<template>
  <div class="w-full h-full">
    <div
      v-for="image in images"
      :key="image.id"
      :id="image.id"
      class="w-full h-100vh absolute"
      :style="{ 'background-image': `url(${image.src})`, 'z-index': image.zindex }"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { IDataImages } from '~/helpers/interfaces/IDataImages';
import { gsap } from 'gsap-trial';

const props = defineProps({
  images: {
    type: Array as PropType<IDataImages[]>,
    required: true,
  },
  timeout: {
    type: Number,
    required: false,
    default: () => 3,
  },
});

onMounted((): void => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

  for (const [index, elem] of props.images?.entries()) {
    tl.fromTo(`#${elem.id}`, { opacity: 1 }, { opacity: 0, duration: 1, delay: props.timeout });
    tl.to(
      `#${props.images[(index + 1) % props.images.length]?.id}`,
      { opacity: 1, duration: 1 },
      '<',
    );
  }
});
</script>
