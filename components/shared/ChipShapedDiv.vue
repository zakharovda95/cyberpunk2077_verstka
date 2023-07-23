<template>
  <div class="chip-shaped-div min-w-300">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.chip-shaped-div {
  clip-path: polygon(10% 0, 100% 0, 100% 83%, 90% 100%, 0 100%, 0 17%);
}
</style>
