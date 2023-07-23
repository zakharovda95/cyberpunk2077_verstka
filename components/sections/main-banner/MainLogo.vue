<template>
  <NuxtLink id="main-logo" class="cursor-pointer" to="/">
    <img class="hover:scale-110 transition-[1s]" alt="logo" src="/img/m_logo.svg" />
  </NuxtLink>
</template>

<style scoped lang="scss">
#main-logo:hover {
  animation: logo_animate;
  animation-duration: 1s;
}

@keyframes logo_animate {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(5deg);
  }

  75% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>
