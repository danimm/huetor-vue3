<template>
  <div class="container">
    <div class="col-lg-6 col-md-12 text-center"></div>
    <AhReviews/>
    <div class="col-lg-6 col-md-12">
      <AhNotes/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AhReviews from '@/components/reviews/AhReviews.vue'
import AhNotes from '@/components/reviews/AhNotes.vue'
</script>

<style scoped>

.container {
  padding-top: 40px;
  display: flex;
  flex-direction: wrap;
  /* margin-top: 50px; */
  margin-bottom: 150px;
}

@media screen and (max-width: 992px) {
  .container {
    flex-direction: column;
    margin-bottom: 30px;
  }
}
</style>