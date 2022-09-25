<template lang="pug">
  .container-fluid
    .container.text-center
      h2 {{ $t('home.offer.title') }}
      .grid-container
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Faire.svg?alt=media&token=884f40c0-3df3-4acf-bb45-806bebf227e4")
          h4 {{ $t('home.offer.item1') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fbbq.svg?alt=media&token=a9826acd-342b-493b-b6f0-3ab3a5a7b21c")
          h4 {{ $t('home.offer.item2') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fchimenea.svg?alt=media&token=5cb1e6e2-eb1e-4f31-b74d-bf99b2d32a3e")
          h4 {{ $t('home.offer.item3') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fcocina.svg?alt=media&token=0533dc39-541b-4d63-8aa4-cc957f3eebb2")
          h4 {{ $t('home.offer.item4') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fterraza.svg?alt=media&token=4f7752dd-0ab2-4ba6-8bc6-349f67f414d6")
          h4 {{ $t('home.offer.item5') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fparking.svg?alt=media&token=550c8aaf-6235-4c52-a924-ea8a9a8eee05")
          h4 {{ $t('home.offer.item6') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fwifi.svg?alt=media&token=d87a77de-6f71-40bd-a470-73e33940897d")
          h4 {{ $t('home.offer.item7') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fpiscina.svg?alt=media&token=2495184d-08ce-482e-8796-ba4b5a86a507")
          h4 {{ $t('home.offer.item8') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Ftumbona.svg?alt=media&token=47288bf1-355f-4be2-b251-79fb29cd0b9d")
          h4 {{ $t('home.offer.item9') }}
        .item
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Farbol.svg?alt=media&token=c2f1888b-8d00-462b-8a7a-b88c5d847539")
          h4 {{ $t('home.offer.item10') }}
</template>

<script>
  export default {
    data() {
      return {
        images: [
          {
            title: this.$t('home.offer.item1'),
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Faire.svg?alt=media&token=884f40c0-3df3-4acf-bb45-806bebf227e4'
          },
          {
            title: 'Barbacoa',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fbbq.svg?alt=media&token=a9826acd-342b-493b-b6f0-3ab3a5a7b21c'
          },
          {
            title: 'Chimenea',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fchimenea.svg?alt=media&token=5cb1e6e2-eb1e-4f31-b74d-bf99b2d32a3e'
          },
          {
            title: 'Cocina completa',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fcocina.svg?alt=media&token=0533dc39-541b-4d63-8aa4-cc957f3eebb2'
          },
          {
            title: 'Terraza',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fterraza.svg?alt=media&token=4f7752dd-0ab2-4ba6-8bc6-349f67f414d6'
          },
          {
            title: 'Parking',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fparking.svg?alt=media&token=550c8aaf-6235-4c52-a924-ea8a9a8eee05'
          },
          {
            title: 'Wifi',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fwifi.svg?alt=media&token=d87a77de-6f71-40bd-a470-73e33940897d'
          },
          {
            title: 'Piscina',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fpiscina.svg?alt=media&token=2495184d-08ce-482e-8796-ba4b5a86a507'
          },
          {
            title: 'Tumbonas',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Ftumbona.svg?alt=media&token=47288bf1-355f-4be2-b251-79fb29cd0b9d'
          },
          {
            title: 'Jardín',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Farbol.svg?alt=media&token=c2f1888b-8d00-462b-8a7a-b88c5d847539'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h2, h4 {
    font-family: 'Satisfy', cursive;
  }
  .container-fluid {
    background-color:#fefdeb;
    padding: 30px 0 10px 0;
    /* margin-bottom: 50px; */
  }
  .container {
    margin-top: 50px;
  }
  .grid-container {
    margin: 100px 0 50px 0;
    display: grid;
    grid-template: repeat(2, 150px) / repeat(5, 1fr);
    grid-gap: 20px;
  }
  h2 {
    font-size: 3.5em;
  }
  h4 {
    margin-top: 20px;
  }
  img {
    width: 30%;
  }
  @media screen and (max-width: 992px){
    .grid-container {
      grid-template: repeat(2, 150px) / repeat(5, 1fr);
    }
  }

  @media screen and (max-width: 768px){
    .grid-container {
      grid-template: repeat(2, 150px) / repeat(2, 1fr);
      grid-gap: 40px;
    }
    h2 {
      font-size: 3em;
    } 
  }
  @media screen and (max-width: 576px){
    .grid-container {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
</style>