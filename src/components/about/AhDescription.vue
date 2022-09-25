<template lang="pug">
  b-container
      b-row
        b-col(cols="6")
          b-img(:src="Image14", height="690")
        b-col
          .content
            h2 Aquí encontrarás paz y descanso. Ven a conocernos
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet sagittis magna. Quisque eu pretium nisi. Quisque vitae auctor lectus, at ultricies ligula. Donec sollicitudin lorem vitae arcu ornare, et pulvinar mauris sollicitudin. Nam lacinia tincidunt lacus eu egestas. Nulla ornare, arcu et aliquet consectetur, risus lectus tincidunt lorem.
            button.btn.btn-warning Reservar
</template>

<script>
  export default {
    data() {
      return {
        Image14: 'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage14.jpg?alt=media&token=d0f5d820-81b5-4cec-ab90-2dd5201f55d7',

      }
    }
  }
</script>

<style scoped>
  img {
      object-fit: cover;
      width: 100%;
  }
  h2 {
    font-size: 42px;
    margin-bottom: 60px;
  }
  p {
    line-height: 1.75rem;
  }
  .container {
    margin-bottom: 60px;
    margin-top: 60px;
  }
</style>