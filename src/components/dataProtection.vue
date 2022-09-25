<template>
  <div class="container-fluid">
    <!--    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>-->
    <b-modal
        ref="modal"
        id="bv-modal-example"
        hide-footer
        scrollable
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
    >
      <template #modal-title>
        Política de cookies
      </template>
      <template v-if="!showCookieText && !showCookieConfig">
        <div class="d-block text-left">
          <p>
            CONSTRUCCIONES HUETOR 2001, S.L. utiliza cookies propias y de terceros para posibilitar y mejorar tu
            experiencia de
            navegación, mostrarte publicidad personalizada así como para realizar análisis estadísticos.
          </p>
          <p>Obtendrás más información en nuestra
            <b>Política de cookies.</b> pulsando <a class="link" @click="showCookieText =true">aquí</a>
          </p>
          <p>Para administrar o deshabilitar estas cookies haz click en Configuración de Cookies.</p>
        </div>
        <b-button class="mt-3" block @click="openCookieConfig()">Configuración de Cookies</b-button>
        <b-button variant="success" class="mt-3" block @click="acceptCookies()">Aceptar</b-button>
      </template>
      <template v-if="showCookieConfig && !showCookieText">
        <cookie-config @back="closeCookieConfig" @closeModal="hideModal"/>
      </template>
      <cookie-text v-if="showCookieText" @back="closeCookieText"/>
    </b-modal>
  </div>
</template>

<script>
import cookieText from "@/components/cookieText";
import cookieConfig from "@/components/cookieConfig";

export default {
  name: 'DataProtection',
  components: {cookieText, cookieConfig},
  data() {
    return {
      showCookieText: false,
      showCookieConfig: false,
    }
  },
  mounted() {
    const cookiesJSON = window.localStorage.getItem('UserCookies')
    // const googleAnalytics = JSON.parse(cookiesJSON)
    // todo: route name
    if (!cookiesJSON) {
      this.$refs.modal.show()
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/legal') this.hideModal()
      if (from.path === '/legal') {
        this.closeCookieConfig()
        this.$refs.modal.show()
      }
    }
  },
  methods: {
    acceptCookies() {
      window.localStorage.setItem('UserCookies', JSON.stringify({
        GoogleAnalytics: {
          accepted: true
        }
      }))
      this.hideModal()
    },
    hideModal() {
      this.$refs['modal'].hide()
    },
    closeCookieText() {
      this.showCookieText = false
    },
    closeCookieConfig() {
      this.showCookieConfig = false
    },
    openCookieConfig() {
      this.showCookieConfig = true
    },
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;
  color: blue;
  font-weight: bold;
  text-decoration: underline;
}
</style>
