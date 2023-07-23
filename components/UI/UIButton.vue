<template>
  <button
    @mouseenter="animationOn($event)"
    @mouseleave="animationOn($event)"
    id="custom_btn"
    :class="typeClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType, Ref } from '@vue/runtime-core';
import { gsap } from 'gsap-trial';

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
  'bg-black font-roboto text-yellow text-24 px-36 py-18 font-bold': props.btnStyle === 'black-lg',
}));

const animationOn = (ev: Event) => {
  const animationOn = gsap.to('#custom_btn', {
    background: () => (props.btnStyle?.includes('black') ? 'yellow' : 'black'),
    color: 'black',
    backgroundSize: '100% 100%',
    duration: 2,
  });
  const animationOn2 = gsap.to('#custom_btn', {
    background: () => (props.btnStyle?.includes('black') ? 'yellow' : 'black'),
    color: 'black',
    backgroundSize: '100% 100%',
    duration: 2,
  });

  if (ev.type === 'mouseenter') {
    console.log('enter');
    animationOn.play();
  } else {
    console.log('leave');
    animationOn.restart();
  }
};
</script>
