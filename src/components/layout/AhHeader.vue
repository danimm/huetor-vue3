<template>
  <div class="container">
    <div class="b-navbar">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    Logo: {type: String}
  },
  computed: {
    link() {
      const locale = this.$i18n.locale;
      const links = {
        es: {
          eviivo: 'https://via.eviivo.com/es-ES/alojamientoshuetor',
          hellehollis: 'https://www.hellehollis.com/booking-cargroup.aspx?affiliate_id=292&langID=es'
        },
        en: {
          eviivo: 'https://via.eviivo.com/en-GB/alojamientoshuetor',
          hellehollis: 'https://www.hellehollis.com/booking-cargroup.aspx?affiliate_id=292&langID=en'
        },
        de: {
          eviivo: 'https://via.eviivo.com/de-DE/alojamientoshuetor',
          hellehollis: 'https://www.hellehollis.com/booking-cargroup.aspx?affliate_id=292&langID=de'
        },
        fr: {
          eviivo: 'https://via.eviivo.com/fr-FR/alojamientoshuetor',
          hellehollis: 'https://www.hellehollis.com/booking-cargroup.aspx?affliate_id=292&langID=fr\n'
        },
      }
      return links[locale];
    }
  },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    }
  },
  beforeRouteLeave() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.nav-link {
  text-align: center;
}

img {
  max-width: 180px;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  padding-top: 40px;
}

.icon {
  width: 35px;
  position: absolute;
  right: 10%;
}

@media screen and (max-width: 992px) {
  /* .container {
      height: 50px;
    }
    .navbar {
      position: fixed;
      z-index: 10;
      background-color: white;
      width: 95vw;
    } */
}

@media screen and (max-width: 576px) {
  img {
    max-width: 140px;
    object-fit: contain;
    /* height: ; */
  }

  .navbar-brand {
    margin-right: 0;
  }

  .navbar-light {
    padding: 0;
    padding-right: 0.5em;
  }
}
</style>
