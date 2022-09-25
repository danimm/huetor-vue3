<template>
  <main>
    <AhMain
      Slide1="Slide1"
      :Slide2="Slide2"
      :Slide3="Slide3"
    />
    <AhDescription />
    <AhColumns />
    <AhRooms
      :Image9="Image9"
      :Image11="Image11"
      :Image12="Image12"
      :Image13="Image13"
    />
    <AhCards
      :Image4="Image4"
      :Image7="Image7"
      :Image10="Image10"
    />
    <AhOffer />
    <AhMap />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AhMain from '@/components/home/AhMain.vue'
import AhDescription from '@/components/home/AhDescription.vue'
import AhCards from '@/components/home/AhCards.vue'
import AhRooms from '@/components/home/AhRooms.vue'
import AhColumns from '@/components/home/AhColumns.vue'
import AhOffer from '@/components/home/AhOffer.vue'
import AhMap from '@/components/home/AhMap.vue'

const Slide1 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FDJI_0482.JPG?alt=media&token=674fd592-29c7-4e86-84c1-c71b4115d4e5')
const Slide2 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/slides%2FIMG_3224.JPG?alt=media&token=46c9946b-939f-42fe-b328-47d8e5dcb59d')
const Slide3 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2FSlide3.JPEG?alt=media&token=cf5b1f96-c846-400e-ae37-ac15c4717bd7')
const Image1 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage1.JPG?alt=media&token=248ab0a9-bcda-4c97-9cd3-c55575236369')
const Image2 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage2.JPG?alt=media&token=8e846eb0-c9d2-4311-af38-8032ce2c6faa')
const Image3 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage3.jpg?alt=media&token=0a7a27d1-6ed6-4118-99ea-ea9ef0b497b2')
const Image4 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2FH-15124650640%20(1).JPEG?alt=media&token=881c0af6-c33f-44f1-b774-c6b6f9ea0ac4')
const Image7 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage6.JPG?alt=media&token=a415151c-b85d-4e17-8775-c3df616c57b2')
const Image9 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162952392.JPEG?alt=media&token=e64a688a-6b23-4cf7-b2f5-468b5664d20b')
const Image10 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-81162951850.JPEG?alt=media&token=efb5f15b-8e01-4bd9-bae5-0373d68f872a')
const Image11 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FIMG_1159%202.JPG?alt=media&token=d6e1f203-36c4-46f2-bd3c-997d6bedb853')
const Image12 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage12.jpg?alt=media&token=ad6d81a1-74df-4817-aecc-031c1ce3690b')
const Image13 = ref('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage23.JPG?alt=media&token=08bc4ed2-82ae-488e-af1d-dc8ebc014033)
</script>

