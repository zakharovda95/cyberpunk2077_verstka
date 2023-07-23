<template>
  <button id="custom_btn" :class="typeClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType, Ref } from '@vue/runtime-core';

const props = defineProps({
  btnStyle: {
    type: String as PropType<'black-lg'>,
    required: true,
  },
  animated: {
    type: Boolean,
    required: false,
    default: () => false,
  },
});

const typeClasses: Ref<{ [key: string]: boolean }> = computed(() => ({
  'bg-black font-roboto text-yellow text-24 px-36 py-18 font-bold hover:opacity-9 transition-[1s]':
    props.btnStyle === 'black-lg',
}));
</script>
