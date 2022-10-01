<script setup lang="ts">
import { ref } from 'vue'
import AhHeader from '@/components/layout/AhHeader.vue'
import AhFooter from '@/components/layout/AhFooter.vue'
import Loader from '@/components/misc/Loader.vue'

const isLoaded = ref(false)
const isLoading = ref(true)

addEventListener("load", () => {
  isLoaded.value = true
})
</script>

<template>
  <div id="app">
    <div class="loader-container" :class="{ 'hideLoader': isLoaded }">
      <Loader/>
    </div>
    <div class="content" :class="{ 'showContent': isLoaded }">
      <AhHeader/>
      <RouterView/>
      <!--      <AhFooter/>-->
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy');

#app {
  font-family: system-ui;
  font-weight: 400;
  line-height: 1.8;
  font-size: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Satisfy', cursive;
}

.content {
  display: none;
}

.loader-container {
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.showContent {
  display: block;
}

.hideLoader {
  display: none;
}
</style>
