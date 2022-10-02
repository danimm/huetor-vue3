<template>
  <div>
    <q-carousel
        id="carousel"
        v-model="slide"
        animated
        height="750px"
        arrows
        swipeable
        navigation
        transition-prev="jump-right"
        transition-next="jump-left"
        :transition-duration="800"
        infinite
    >
      <q-carousel-slide :name="1">
        <q-img
            :src="image1"
            height="100%"
            width="100%"
            fit="cover"
            position="50% 37%"
        >
          <div class="absolute-full">
            <div class="text-container text-right">
              <h1 class="display-3">
                Alojamientos Huetor
              </h1>
              <p class="">
                {{ $t('home.main.text1') }}
              </p>
            </div>
          </div>
        </q-img>
      </q-carousel-slide>
      <q-carousel-slide :name="2" :img-src="image2"/>
      <q-carousel-slide :name="3" :img-src="image3"/>
    </q-carousel>
  </div>
  <div class="overlay">
    <div class="container">

    </div>
  </div>
  <div class="row align-items-center">
    <div class="col-md-6 offset-md-6 text-center text-md-right description-container">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const slide = ref(1)
const image1 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FDJI_0482.JPG?alt=media&token=674fd592-29c7-4e86-84c1-c71b4115d4e5')
const image2 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FIMG_3224.JPG?alt=media&token=46c9946b-939f-42fe-b328-47d8e5dcb59d')
const image3 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2FSlide3.JPEG?alt=media&token=cf5b1f96-c846-400e-ae37-ac15c4717bd7')
</script>

<style scoped>
h1 {
  font-family: 'Satisfy', cursive;
}

.absolute-full {
  /*margin-left: 50%;*/
  /*margin-bottom: 200px;*/
  background-color: rgba(0, 0, 0, 0.27);
}

/*article {*/
/*  display: none;*/
/*}*/

/*.showContent {*/
/*  display: block;*/
/*}*/

/*#carousel {*/
/*  position: relative;*/
/*}*/

/*#carousel .overlay {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  right: 0;*/
/*  background-color: rgba(0, 0, 0, 0.25);*/
/*  color: #f1f1f1;*/
/*}*/

/*#carousel .overlay .container,*/
/*#carousel .overlay .row {*/
/*  height: 100%;*/
/*}*/

/*img {*/
/*  max-height: 80vh;*/
/*  object-fit: cover;*/
/*}*/

/*:nth-of-type(1) img {*/
/*  object-position: 50% 37%;*/
/*}*/

/*:nth-of-type(2) img {*/
/*  object-position: 0 50%;*/
/*}*/

/*:nth-of-type(3) img {*/
/*  object-position: center 64%;*/
/*}*/

/*p {*/
/*  margin-bottom: 20px;*/
/*}*/

/*.btn {*/
/*  margin-left: 20px;*/
/*}*/

/*.description-container {*/
/*  margin-bottom: 200px;*/
/*}*/

/*@media screen and (max-width: 992px) {*/
/*  .showContent {*/
/*    display: none;*/
/*  }*/
/*}*/
</style>
