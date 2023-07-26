<template>
  <section>
    <div class="w-full h-100vh w-full relative z-1 bg-black">
      <div class="max-w-max_page_width mx-auto pt-70 flex flex-col h-full">
        <div class="flex align-center justify-start">
          <img class="mr-36" src="/public/img/paw_promotion.svg" alt="img" />
          <h1 class="font-archangelsk text-62 text-white leading-62 relative top-36">
            Играй и выигрывай!
          </h1>
        </div>

        <div>
          <p class="font-18 max-w-900 text-white block leading-34 pt-24">
            Играй в <span class="text-blue">Cyberpunk 2077</span> и получи возможность выиграть
            консоль <span class="text-blue">Xbox Series X</span> или
            <span class="text-blue">Sony PlayStation 5!</span> <br />
            Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1
            февраля. Удачи! ;)
          </p>
        </div>

        <PromotionForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PromotionForm from '~/components/sections/play-and-win/PromotionForm.vue';
</script>
