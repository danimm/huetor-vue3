<template>
  <div class="container-fluid">
    <div class="container">
      <h2> {{ $t('home.columns.title') }} </h2>
    </div>
    <div class="grid-container">
      <div class="img-container-1">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Ffotopiscina.jpg?alt=media&token=40102798-cac4-4f11-a29d-9520c6043aea"
            alt="piscina"/>
      </div>

      <div class="text-container">
        <p>{{ $t('home.columns.text1') }}</p>
        <p>{{ $t('home.columns.text2') }}</p>
      </div>

      <div class="img-container-2">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage15.jpg?alt=media&token=bc972bb4-dec6-4d06-9a0b-847980c9c4c5"
            alt="piscina"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Satisfy', cursive;
}

.container-fluid {
  margin-top: 100px;
  padding: 30px 0;
}

.grid-container {
  display: grid;
  grid-template: 1fr 500px / repeat(3, 1fr);
  grid-gap: 10px;
  grid-template-areas:  "text text img2"
                          "img1 img1 img2";
  margin-bottom: 50px;
}

h5 {
  padding: 20px 0;
}

h2 {
  font-size: 3.5em;
}

h2:nth-of-type(2) {
  margin-bottom: 30px;
}

img {
  width: 100%;
  height: 100%;
}

.text-container {
  grid-area: text1;
}

.text-container p {
  padding-bottom: 50px;
}

.img-container-1 {
  grid-area: img1;
}

.img-container-1 img {
  object-fit: cover;
  object-position: 15% center;
}

.img-container-2 {
  grid-area: img2;
}

.img-container-2 img {
  object-fit: cover;
  object-position: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  grid-area: text;
  padding: 0 20px 0 0;
}

@media screen and (max-width: 992px) {
  .grid-container {
    grid-template: 240px 1fr / repeat(2, 1fr);
    grid-gap: 10px;
    grid-template-areas:  "text text"
                            "img1 img2";
  }

  .container {
    margin-top: 80px;
  }

  h2 {
    padding-bottom: 0.8em;
  }

  .img-container-1 img {
    height: 100%;
    width: 100%;
  }

  .text-container {
    display: block;
  }

  p {
    margin: 0;
    padding: 0;
  }

  img {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    /* grid-template: 1fr 0.5fr 1fr / 1fr;
    grid-gap: 10px;
    grid-template-areas:  "img1"
                          "text"
                          "img2"; */
    display: block;
  }

  .text-container {
    padding-bottom: 40px;
  }

  .text-container p {
    padding-bottom: 0;
  }

  .container {
    margin-top: 0;
  }

  .container-fluid {
    margin-top: 0;
  }
}

@media screen and (max-width: 576px) {
  h2 {
    font-size: 2.5em;
  }

  .grid-container {
    margin-bottom: 0;
    /* grid-template: 1fr 1fr 1fr / 1fr; */
  }

  .text-container {
    padding: 20px 0 30px 0;
  }

  .container-fluid {
    margin-top: 50px;
  }
}
</style>