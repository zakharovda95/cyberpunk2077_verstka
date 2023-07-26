<template>
  <section>
    <div class="w-full h-100vh w-full relative z-1">
      <AnimatedBanner class="absolute z-2" :images="MAIN_BANNER_IMAGES_DATA" />

      <div class="max-w-max_page_width mx-auto pt-24 flex flex-col justify-between h-full">
        <div class="relative z-100 flex w-full justify-between">
          <MainLogo />
          <TheContacts :contacts="CONTACTS_DATA" />
        </div>

        <div class="flex flex-col w-full items-end">
          <ChipShapedDiv class="relative bg-yellow z-100 p-70">
            <h1 class="font-archangelsk text-62 text-black leading-62 mx-auto block">
              Доступно на <br />
              всех платформах
            </h1>
            <UIButton class="mt-36" btn-style="black-lg">Узнать больше</UIButton>
          </ChipShapedDiv>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedBanner from '~/components/sections/main-banner/AnimatedBanner.vue';
import MainLogo from '~/components/sections/main-banner/MainLogo.vue';
import TheContacts from '~/components/sections/main-banner/TheContacts.vue';

import { MAIN_BANNER_IMAGES_DATA } from '~/data/main-banner-images.data';
import { CONTACTS_DATA } from '~/data/contacts.data';
import ChipShapedDiv from '~/components/shared/ChipShapedDiv.vue';
</script>
