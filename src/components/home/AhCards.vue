<template>
  <div class="container-fluid">
    <h2 class="text-center">
      {{ $t('home.cards.title') }}
    </h2>
    <div class="mt-5 mb-5" align-h='center'>
      <div class="col-lg-3 col-sm-12 col-md-12">
        <div
            class="text-center"
            :title="$t('home.cards.card1.title')"
            :img-src='Image7'
            img-top
        >
          <p class="card-text">
            {{ $t('home.cards.card1.text') }}
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-12 col-md-12">
        <div
            class="text-center"
            :title="$t('home.cards.card2.title')"
            :img-src='Image4'
            img-top
        >
          <p class="card-text mb-4">
            {{ $t('home.cards.card2.text') }}
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-12 col-md-12">
        <div
            class="text-center"
            :title="$t('home.cards.card3.title')"
            :img-src='Image10' img-top>
          <p class="card-text">
            {{ $t('home.cards.card3.text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Image4: {type: String, required: true},
    Image7: {type: String, required: true},
    Image10: {type: String, required: true},
  }
}
</script>

<style scoped>
h2, h4 {
  font-family: 'Satisfy', cursive;
}

.container-fluid {
  margin-bottom: 120px;
  margin-top: 120px;
}

.row {
  max-width: 100%;
}

h2 {
  font-size: 4em;
}

@media screen and (max-width: 992px) {
  .row {
    margin: 0;
  }

  .col-md-12 {
    margin-bottom: 50px;
  }

  .card-title {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 768px) {
  .container-fluid {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 576px) {
  h2 {
    font-size: 3em;
  }

  h4.card-title {
    font-size: 2em;
  }

  .container-fluid {
    margin-bottom: 0;
  }
}

</style>