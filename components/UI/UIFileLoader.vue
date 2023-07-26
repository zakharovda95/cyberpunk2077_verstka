<template>
  <div>
    <input
      id="custom_file-loader"
      type="file"
      class="hidden"
      ref="file"
      @change="returnFile($event)"
    />
    <label
      for="custom_file-loader"
      class="text-white flex flex-col p-36 border-gray border-dashed border justify-center items-center cursor-pointer"
    >
      <span class="underline text-18 font-light leading-36 mb-12">Прикрепить скриншот</span>
      <span class="text-14">.png / .jpg / .pdf</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { convertToBase64 } from '~/helpers/methods/convert-to-base64.method';

const emit = defineEmits(['custom:return-base64-string']);

const file: Ref<File | null> = ref(null);

const returnFile = async (event: InputEvent) => {
  if (event && event.target) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const fileList: FileList | null = target.files;

    if (fileList && fileList.length) {
      const file: File = fileList[0];
      const base64string: string | void = await convertToBase64(file);
      emit('custom:return-base64-string', base64string);
    }
  }
};
</script>
