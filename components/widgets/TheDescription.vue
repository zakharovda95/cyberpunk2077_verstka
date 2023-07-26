<template>
  <section>
    <div class="w-full h-100vh w-full relative z-1">
      <div class="max-w-max_page_width mx-auto pt-70 flex flex-col h-full">
        <h1 class="font-archangelsk text-62 text-black leading-62">
          Найт-Сити изменит тебя навсегда!
        </h1>

        <p class="font-18 max-w-900 block leading-34 pt-24">
          <span class="text-blue">Cyberpunk 2077</span> — приключенческая ролевая игра, действие
          которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся
          выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести
          бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа,
          исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>

        <div class="flex justify-between mt-70">
          <div class="flex flex-col justify-between mr-36">
            <ChipShapedDiv>
              <img alt="img" src="/public/img/desc_img_2.webp" />
            </ChipShapedDiv>

            <ChipShapedDiv>
              <img alt="img" src="/public/img/desc_img_3.webp" />
            </ChipShapedDiv>
          </div>

          <div class="flex">
            <ChipShapedDiv>
              <img alt="img" src="/public/img/desc_img_1.webp" />
            </ChipShapedDiv>
          </div>
        </div>
      </div>
    </div>
    <img alt="img" src="/public/img/desc_bottom.png" />
  </section>
</template>

<script setup lang="ts">
import ChipShapedDiv from '~/components/shared/ChipShapedDiv.vue';
</script>
