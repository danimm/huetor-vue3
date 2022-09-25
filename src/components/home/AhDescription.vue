<template lang="pug">
  .container
    b-row.mt-4(align-h='center')
      .col-lg-6.col-md-12
        img(
          src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage14.jpg?alt=media&token=d0f5d820-81b5-4cec-ab90-2dd5201f55d7")
      .col-lg-6.col-md-12
        .content
          h2 {{ $t('home.description.title') }}
          a.link-eviivo.btn.btn-warning.d-block.d-lg-none(
            :href="link", target="_blank") {{ $t('header.reservations') }} 
          p {{ $t('home.description.text1') }}
          p {{ $t('home.description.text2') }}
          p {{ $t('home.description.text3') }}
          p {{ $t('home.description.text4') }}

</template>

<script>
export default {
  computed: {
    link() {
      switch (this.$i18n.locale) {
        case 'es':
          return 'https://via.eviivo.com/es-ES/alojamientoshuetor';
          break;
        case 'en':
          return 'https://via.eviivo.com/en-GB/alojamientoshuetor';
          break;
        case 'de':
          return 'https://via.eviivo.com/de-DE/alojamientoshuetor';
          break;
        case 'fr':
          return 'https://via.eviivo.com/fr-FR/alojamientoshuetor';
          break;

        default:
          return 'https://via.eviivo.com/AlojamientosHuetor';
          break;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: 'Satisfy', cursive;
  font-size: 3em;
  margin-bottom: 20px;
}
.container {
  margin-top: 150px !important;
  height: 690px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
p {
  line-height: 1.75rem;
}
.link-eviivo {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 15px;
  color: #0d0c0c;
  font-size: 1.8em;
}
.container {
  margin-bottom: 60px;
  margin-top: 60px;
}
@media screen and (max-width: 991px) {
  .container {
    margin-top: 0 !important;
    height: 100%;
  }
  h2 {
    margin-top: 50px;
  }
}

@media screen and (max-width: 768px) {
  .link-eviivo {
    font-size: 1.4em;
  }
}

@media screen and (max-width: 576px) {
  h2 {
    font-size: 2.5em;
  }
}
</style>
