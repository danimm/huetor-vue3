<template lang="pug">
  .container.text-center
    h2 ¿ Qué ofrece Alojamientos Huetor ?
    .grid-container
      .item(v-for="img in images")
        img(:src="img.src")
        h4 {{ img.title }}
</template>

<script>
  export default {
    data() {
      return {
        images: [
          {
            title: 'Aire Acondicionado',
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
            title: 'Piscina',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fpiscina.svg?alt=media&token=2495184d-08ce-482e-8796-ba4b5a86a507'
          },
          {
            title: 'Wifi',
            src: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fwifi.svg?alt=media&token=d87a77de-6f71-40bd-a470-73e33940897d'
          }

        ]
      }
    }
  }
</script>

<style scoped>
  .grid-container {
    margin: 50px 0;
    display: grid;
    grid-template: repeat(2, 150px) / repeat(4, 1fr);
    grid-gap: 20px;
  }
  h2 {
    font-size: 3.5em;
  }
  h4 {
    margin-top: 20px;
  }
  img {
    width: 20%;
  }
</style>