<template lang="pug">
  .wrapper
    b-container.mt-5.mb-5
      b-row.justify-content-center
        b-col.text-center(cols='8')
          h2 Bienvenido a Alojamientos Huetor
          h3 Nº Registro: A/MA/1065
          p
            | En el corazón de la Axarquía, Málaga, a sólo 15 minutos de la playa, rodeado de pintorescos pueblos blancos y el Parque Natural de Sierra Tejeda y Almijara.
    b-container(fluid='')
      b-row
        b-col.p-5.text-center(align-self='center')
          p Naturaleza
          p Playa, vistas culturales:
          p Todo lo que puedes encontrar y disfrutar
        b-col
          img.d-block.img-fluid.w-100(:src='Image1')
        b-col.p-5.text-center(align-self='center')
          p Ubicado junto
          p al embalse de la viñuela
          p lugar perfecto para relajarse
        b-col
          img.d-block.img-fluid.w-100(:src='Image2')
      b-row#img-bottom
        b-col
          b-img-lazy(:src='Image2', fluid-grow='', blank-color='#bbb', alt='img')
        b-col
          b-img-lazy(:src='Image3', fluid-grow='', blank-color='#bbb', alt='img')
        b-col.p-5.text-center(cols='2', align-self='center')
          p Enlace video promocional de la Axarquia
</template>

<script>
  export default {
    props: {
      Image1: { type: String },
      Image2: { type: String },
      Image3: { type: String },
    }
  }
</script>

<style scoped>
  #img-bottom {
    height: 400px;
  }
  #img-bottom img {
    height: 100%;
    /* width: 100%; */
    object-fit: cover;
    object-position: center bottom;
  }
  .container-fluid{
    padding: 0;
  }
  .col, .col-2 {
    padding: 0;
  }
  .row {
    max-width: 100%;
    margin-left: 0;
  }
</style>