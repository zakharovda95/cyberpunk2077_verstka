<template>
  <div>
    <input
      class="outline-none border-b bg-transparent border-gray"
      v-bind="$attrs"
      v-model="modelValueProxy"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { Ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const modelValueProxy: Ref<string> = computed({
  get(): string {
    return props.modelValue;
  },
  set(val): void {
    emit('update:modelValue', val);
  },
});
</script>
