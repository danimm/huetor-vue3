<template>
  <div class="container">

    <h2 class="text-center">
      {{ $t('home.map.title') }}
    </h2>
    <div class="row">
      <div class="col">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.079347035487!2d-4.188710275192489!3d36.87862388613888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7269d63c8dbefb%3A0x2f0a38fa3fbf8baa!2sAlojamientos+Huetor!5e1!3m2!1ses!2sch!4v1541329889000"
            frameborder="0"
            style="border:0"
            allowfullscreen/>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Satisfy', cursive;
}

h2 {
  font-size: 4em;
  margin: 50px 0;
}

iframe {
  width: 100%;
  height: 650px;
  margin-bottom: 100px;
}

@media screen and (max-width: 576px) {
  h2 {
    font-size: 2.8em;
  }
}
</style>