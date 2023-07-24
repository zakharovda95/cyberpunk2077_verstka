<template>
  <div class="w-full min-h-100">
    <div>
      <section>
        <MainBanner />
      </section>

      <section>
        <TheDescription />
      </section>

      <section></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/widgets/MainBanner.vue';
import TheDescription from '~/components/widgets/TheDescription.vue';
</script>
