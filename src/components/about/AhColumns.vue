<template lang="pug">
  .container-fluid
    .container
      .grid-container
        .text-container
          h2 Todo a tu alcance
          h4 En el interior pero a la vez cerca de todo: Restaurantes, playa, montaña..
          p Vive una experiencia inolvidable con nosotros y disfruta de la tranquilidad, el bienestar y la naturaleza de este maravilloso lugar.
        .img-container-1
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage15.jpg?alt=media&token=bc972bb4-dec6-4d06-9a0b-847980c9c4c5")
        .img-container-2
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage7.JPG?alt=media&token=bab52def-ba59-4c40-97f7-d40917ec38c6")
        .text-container-2
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container-fluid {
    /* background-color: lightslategrey; */
    padding: 30px 0;
    /* color: white; */
  }
  .grid-container {
    display: grid;
    grid-template: 1fr 200px / repeat(3, 1fr);
    grid-gap: 10px;
    grid-template-areas:  "text1 img1 img2"
                          "text2 text2 img2";
    /* height: 800px; */
    margin-bottom: 50px;
  }
  h5 {
    padding: 20px 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .text-container {
    grid-area: text1;
    /* background-color: lightgreen; */
    padding: 20px;
  }
  .img-container-1 {
    grid-area: img1;
  }
  .img-container-1 img {
    width: 371px;
    height: 418px;
    object-fit: cover;
  }
  .img-container-2 {
    grid-area: img2;
  }
  .img-container-2 img {
    object-fit: cover;
    object-position: center;
  }
  .text-container-2 {
    grid-area: text2;
    /* background-color: lightgoldenrodyellow; */
    padding: 20px;
  }

</style>