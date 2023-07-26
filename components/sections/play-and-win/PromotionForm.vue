<template>
  <div>
    <UIInput
      class="py-12 mt-36 min-w-300 max-w-460 w-full"
      :model-value="formData.name"
      placeholder="Как тебя зовут?"
    />
    <UIInput
      class="py-12 mt-24 min-w-300 max-w-460 w-full"
      :model-value="formData.email"
      placeholder="Твой e-mail"
    />
    <div class="flex justify-start">
      <UIFileLoader
        class="mt-36 min-w-300 max-w-460 w-full"
        @custom:return-base64-string="handlePhoto($event)"
      />
      <img
        class="w-[100px] h-[134px] ml-24 mt-36 border border-white rounded-sm"
        v-if="preview"
        :src="preview"
        alt="img"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { IPromotionFormData } from '~/helpers/interfaces/IPromotionFormData';

import UIFileLoader from '~/components/UI/UIFileLoader.vue';

const formData: Ref<IPromotionFormData> = ref({
  name: '',
  email: '',
  photo: null,
  isAgreeWithPersonalData: false,
});

const preview: Ref<string | null> = ref(null);

const handlePhoto = (photo: string): void => {
  formData.value.photo = photo;
  preview.value = photo;
};
</script>
