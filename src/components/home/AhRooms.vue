<template lang="pug">
  .container-fluid
    b-container
      b-row.mb-5.mt-5
        .col-lg-6.col-md-12
          h3.title {{ $t('home.rooms.title') }}
          p {{ $t('home.rooms.text1') }}
          p {{ $t('home.rooms.text2') }}
          a.btn.btn-warning.btn-lg.mr-2(
            @click="goTop"
            ) {{ $t('home.rooms.button') }}
        .col-lg-6.col-md-12
          .row
            .col
              img(:src='Image9', alt='')
            .col
              img(:src='Image11', alt='')
          .row
            .col
              img(:src='Image12', alt='')
            .col
              img(:src='Image13', alt='')
        

</template>

<script>
  export default {
    props: {
      Image9: { type: String, required: true },
      Image11: { type: String, required: true },
      Image12: { type: String, required: true },
      Image13: { type: String, required: true },
    },
    methods: {
      goTop() {
        window.scrollTo(0,0)
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
    background-color:#fefdeb;
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
  @media screen and (max-width: 992px){
    .btn {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 768px){
    .btn {
      margin: 30px 0;
    }
    .container-fluid {
      margin-bottom: 30px;
      margin-top: 50px;
      margin-bottom: 140px;
    }
  }
  @media screen and (max-width: 576px){
    h3 {
      font-size: 2.7em;
    }
  }
</style>