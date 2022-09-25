<template>
  <div class="container-fluid">
    <b-container>
      <b-row class="mb-5 mt-5">
        <div class="col-lg-6 col-md-12">
          <h3 class="title">
            {{ $t('home.rooms.title') }}
          </h3>
          <p>
            {{ $t('home.rooms.text1') }}
          </p>
          <p>
            {{ $t('home.rooms.text2') }}
          </p>
          <a @click="goTop" class="btn btn-warning btn-lg mr-2">
            {{ $t('home.rooms.button') }}
          </a>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col">
              <img :src='Image9' alt=''/>
            </div>
            <div class="col">
              <img :src='Image11' alt=''/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img :src='Image12' alt=''/>
            </div>
            <div class="col">
              <img :src='Image13' alt=''/>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>


</template>

<script>
export default {
  props: {
    Image9: {type: String, required: true},
    Image11: {type: String, required: true},
    Image12: {type: String, required: true},
    Image13: {type: String, required: true},
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0)
      this.$router.push('gallery')
    }
  }
}
</script>

<style scoped>
h3 {
  font-family: 'Satisfy', cursive;
}

.container-fluid {
  background-color: #fefdeb;
  padding: 20px 0;
  margin-top: 40px;
}

img {
  width: 100%;
  border-radius: 5px;
  /* height: 100%; */
  margin-bottom: 10px;
}

.col-5 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  align-self: flex-start;
}

h3 {
  font-size: 4em;
}

@media screen and (max-width: 992px) {
  .btn {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 768px) {
  .btn {
    margin: 30px 0;
  }

  .container-fluid {
    margin-bottom: 30px;
    margin-top: 50px;
    margin-bottom: 140px;
  }
}

@media screen and (max-width: 576px) {
  h3 {
    font-size: 2.7em;
  }
}
</style>