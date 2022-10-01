<template>
  <div>
    <div>
      <b-col cols="6">
        <b-img :src="Image14" height="690"/>
      </b-col>
    </div>
  </div>
  <b-col>
    <div class="content">
      <h2>Aquí encontrarás paz y descanso. Ven a conocernos</h2>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet sagittis magna. Quisque eu pretium nisi.
      Quisque vitae auctor lectus, at ultricies ligula. Donec sollicitudin lorem vitae arcu ornare, et pulvinar mauris
      sollicitudin. Nam lacinia tincidunt lacus eu egestas. Nulla ornare, arcu et aliquet consectetur, risus lectus
      tincidunt lorem.
    </p>
    <button class="btn btn-warning">
      Reservar
    </button>
  </b-col>
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