<script lang="ts" setup>
import { useRouter } from 'vue-router'

const logo = 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2FLogo-Huetor-White.png?alt=media&token=29b58139-00a4-49a7-be9d-6bc4079099f5'
const socialLinks = {
  phone: {
    url: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fphone.svg?alt=media&token=4e8a8e25-3b16-4582-94ff-57e30fdfbfd6',
    src: 'tel:+34659589562', text: '+34 659 589 562'
  },
  home: {
    url: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fhome.svg?alt=media&token=e1b3f244-7e9f-4574-8fbb-6e5e0d0ef82c',
    src: 'https://www.google.com/maps/place/Alojamientos+Huetor/@36.8786239,-4.1887103,1735m/data=!3m1!1e3!4m7!3m6!1s0xd7269d63c8dbefb:0x2f0a38fa3fbf8baa!5m1!1s2018-11-25!8m2!3d36.881525!4d-4.18549',
    text: 'Paraje la Rotura, 29712 La Viñuela, Málaga, España'
  },
  mail: {
    url: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fmail.svg?alt=media&token=b02d8d8d-5384-4d3f-bb70-92d663220d03',
    src: 'mailto:info@alojamientoshuetor.com', text: 'info@alojamientoshuetor.com'
  },
  instagram: {
    url: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Flogo-de-instagram.svg?alt=media&token=fb3bea32-d4f1-4c16-94ef-a8f9d8a5a03d',
    src: 'https://www.instagram.com/alojamientos_huetor/', text: 'alojamientos_huetor'
  },
  facebook: {
    url: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Ffacebook-logo.svg?alt=media&token=e26d9375-35a0-4aa1-ada9-316c7de423d2',
    src: 'https://www.facebook.com/alojamientoshuetor/', text: 'Alojamientos Huetor'
  },
}

const IGLinks = [
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F1_image.png?alt=media&token=11dac811-b53e-46b7-96d0-0894ed514d78',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F2_image.png?alt=media&token=22a96fd8-6d35-4bfb-9925-1572031f11fb',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F3_image.png?alt=media&token=01620dc3-851a-4464-a06c-397fb6996efc',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F4_image.png?alt=media&token=e9543d89-981d-48df-91cd-dd012c3248d9',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F5_image.png?alt=media&token=9b9e5ebb-0dcd-49bc-b8b3-b09d496ae3d0',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F6_image.png?alt=media&token=aa1732a5-2ec3-4d41-a722-16b299e5ab57',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F7_image.png?alt=media&token=8a519a34-7bb5-4852-86cf-700aa7e27d03',
  'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/Instagram%2F8_image.png?alt=media&token=397ec329-f948-4fe9-b90d-bf959731f160'
]

const activities = [
  { text: 'footer.links.malaga.text', url: 'footer.links.malaga.src' },
  { text: 'footer.links.cordoba.text', url: 'footer.links.cordoba.src' },
  { text: 'footer.links.sevilla.text', url: 'footer.links.sevilla.src' },
  { text: 'footer.links.cadiz.text', url: 'footer.links.cadiz.src' },
  { text: 'footer.links.granada.text', url: 'footer.links.granada.src' },
  { text: 'footer.links.jaen.text', url: 'footer.links.jaen.src' },
  { text: 'footer.links.almeria.text', url: 'footer.links.almeria.src' },
  { text: 'footer.links.andalucia.text', url: 'footer.links.andalucia.src' },
]

const goLegal = () => {
  window.scrollTo(0, 0);
  useRouter().push({ name: 'Legal' });
}
</script>

<template>
  <div class="wrapper pt-4 pb-5">
    <div class="container">
      <!-- Left column -->
      <div class="col-lg-4 col-md-12 text-white contact">
        <img class="logo" :src="logo" alt='Logo Huetor'/>
        <p>Comarca de la Axarquía - Málaga - España</p>
        <p>{{ $t('footer.text1') }}</p>
        <p v-for="({ url, src, text }, key) in socialLinks">
          <img :src="src" alt="phone-icon">
          <a :href="url" class="text-white" :target="key !== 'phone' ? '_blank' : ''">
            {{ text }}
          </a>
        </p>
      </div>

      <!-- Middle column -->
      <div class="col-lg-4 col-md-6 mb-4">
        <h4 class="mb-4 text-white">
          {{ $t('footer.titleInstagram') }}
        </h4>
        <div class="grid-container">
          <picture v-for="(imageURL, index ) in IGLinks">
            <img :src='imageURL' alt="" :key="index"/>
          </picture>
        </div>
      </div>

      <!-- Middle column -->
      <div class="col-lg-4 col-md-6">
        <h4 class="text-white">
          {{ $t('footer.titleLinks') }}
        </h4>
        <p class="text-white mt-4">
          <a :href="$t('footer.links.activities.src')" target="_blank" class="text-white">
            {{ $t('footer.links.activities.text') }}
          </a>
        </p>
        <p v-for="({ text, url }, index) in activities" class="text-white">
          <a :href="$t(url)" :key="index" target="_blank" class="text-white">
            {{ $t(text) }}
          </a>
        </p>
      </div>
    </div>

    <!-- Container 2 -->
    <div class="container">
      <div>
        <div class="col my-4">
          <img src='@/assets/images/banner2.jpg' alt="banner"/>
        </div>
      </div>
      <div class="lastFooter">
        <div class="col-sm-12 col-md-6">
          <p>
            | {{ $t('footer.made') }}
            <a href="mailto:info@danimm.com" target="_blank">
              info@danimm.com
            </a>
          </p>
        </div>
        <div class="col-sm-10 col-md-6 text-right">
          <a href="" class="nav-link" @click="goLegal">
            {{ $t('footer.legal') }}
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  background-color: #333a40;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 120px);
  grid-gap: 10px;
}

img {
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-position: left; */
}

.logo {
  max-width: 200px;
  height: auto;
}

.icon {
  max-width: 20px;
  height: auto;
  margin-right: 5px;
}

.lastFooter {
  margin-top: 30px;
  border-top: gray 2px solid;
  padding-top: 30px;
  color: white;
}

.lastFooter a {
  color: white;
  padding-right: 12px;
}

.lastFooter .col {
  padding-left: 0;
  padding-right: 0;
}

.nav-link {
  /* display: none; */
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  /* .grid-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 120px);
    } */
}

@media screen and (max-width: 768px) {
  h4 {
    margin-bottom: 0;
    margin-top: 20px;
  }

  .contact {
    margin-bottom: 30px;
  }

  /* .col-sm-12 p {
      display: none;
    } */
}

@media screen and (max-width: 576px) {
  .col-sm-10 {
    display: flex;
    justify-content: center;
  }

  .lastFooter p {
    display: none;
  }
}
</style>
