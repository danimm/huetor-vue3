<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center col-md-6">
        <h3>
          Isabel Hijano Pérez
        </h3>
        <h4>
          Alojamientos Huetor
        </h4>
        <p>
          {{ $t('contact.text1') }}
        </p>
        <img :src="img.src" alt="Isa photo"/>
      </div>
      <div class="col-sm-12 col-md-6">
        <h2>
          {{ $t('contact.text2') }}
        </h2>

      </div>
      <form
          method="POST"
          action="https://formspree.io/huetor@gmail.com"
      >
        <div class="form-group">
          <label for="nombre">
            {{ $t('contact.form.name') }}
          </label>
          <input
              id="nombre"
              name="nombre"
              type="text"
              class="form-control"
              :placeholder="$t('contact.form.namePH')"
              required
          />
        </div>

        <div class="form-group">
          <label for="email">
            {{ $t('contact.form.email') }}
          </label>
        </div>
        <input
            id="email"
            name="email"
            type="email"
            class="form-control"
            :placeholder="$t('contact.form.emailPH')"
            required
        />
        <div class="form-group">
          <label for="message">
            {{ $t('contact.form.message') }}
          </label>
        </div>
        <textarea
            id="mensaje"
            name="mensaje"
            :placeholder="$t('contact.form.messagePH')"
            class="form-control"
            cols="30"
            rows="10"
            required
        />
        <p>
          {{ $t('contact.privacity') }}
        </p>
        <a @click="goPrivacity">
          {{ $t('contact.link') }}
        </a>

        <button class="btn btn-primary" type="submit">
          {{ $t('contact.button') }}
        </button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      img: {
        src:
            'https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/profile%2F3_profile.jpg?alt=media&token=20ffce68-639e-469d-a63b-ba291aeabfa3'
      }
    };
  },
  methods: {
    goPrivacity() {
      window.scrollTo(0, 0);
      this.$router.push('privacity');
    }
  },
  computed: {
    locale() {
      if (this.$i18n.locale == 'es') {
        return true;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: 'Satisfy', cursive;
}

a {
  cursor: pointer;
  display: inline-block;
  padding: 0;
  color: blue !important;
  text-decoration: underline !important;
}

.container {
  margin-top: 60px;
  margin-bottom: 60px;
}

.btn {
  margin-right: 20px;
}

h4 {
  margin-bottom: 20px;
}

img {
  width: 50%;
  object-fit: cover;

  border: 5px solid #2d3338ed;
  border-radius: 20px;
}

@media screen and (max-width: 767px) {
  .col-sm-12 {
    margin-bottom: 40px;
  }

  img {
    max-width: 50%;
  }
}
</style>
