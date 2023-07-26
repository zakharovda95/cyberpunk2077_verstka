<template>
  <div class="w-full min-h-100">
    <div>
      <MainBanner />
      <TheDescription />
      <PlayAndWin />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/widgets/MainBanner.vue';
import TheDescription from '~/components/widgets/TheDescription.vue';
import PlayAndWin from '~/components/widgets/PlayAndWin.vue';
</script>
