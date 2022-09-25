<template>
  <div class="d-block text-left">
    <h4>CONFIGURACIÓN DE LAS COOKIES</h4>
    <p>
      A la hora de configurar las cookies, bien sea a través de <b>configuración de cookies</b> o bien a través del navegador utilizado por el usuario,
      es necesario tener en cuenta que existen determinadas cookies, como las técnicas, que resultan necesarias para posibilitar la utilización de
      los sitios web y herramientas de CONSTRUCCIONES HUETOR 2001, S.L., no existiendo la posibilidad de rechazar las mismas.
    </p>
    <p>
      Por otro lado, respecto a aquellas cookies que permitan ser rechazadas por el usuario, éste debe tener en cuenta que dicho rechazo puede ocasionar que la experiencia de uso de algunos servicios se vea limitada.
    </p>
    <p>
      <b>Firefox: </b><a href="https://support.mozilla.org/es/kb/proteccion-de-rastreo-mejorada-en-firefox-para-esc">https://support.mozilla.org/es/kb/proteccion-de-rastreo-mejorada-en-firefox-para-esc</a>
    </p>
    <p>
      <b>Chrome: </b><a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es">https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es</a>
    </p>
    <p>
      <b>Internet Explorer:</b><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</a>
    </p>
    <p>
      <b>Safari: </b><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a>
    </p>
    <p>
      Al navegar por el sitio web podemos tratar sus datos personales. Para más información sobre nuestra <b>Política de Protección de datos</b> pulsa
      <b><a class="link" @click="goDataProtect()">aquí.</a></b>
    </p>
    <p>
      Puedes obtener más información sobre las cookies de publicidad de dichos terceros en sus respectivas Políticas de cookies: (en su caso)
    </p>
    <p>
      Puedes obtener información sobre si existen transferencias a terceros países, por parte de los terceros identificados en esta Política de cookies, en sus correspondientes políticas: (en su caso)
    </p>
    <h5>FINALIDAD DE LAS COOKIES UTILIZADAS</h5>
    <!--    <h6>TÉCNICAS</h6>-->
    <!--    <b-form-checkbox-->
    <!--        v-model="analytics"-->
    <!--        name="google_analytics"-->
    <!--        disabled-->
    <!--    >-->
    <!--      Google Analytics-->
    <!--    </b-form-checkbox>-->
    <b-table small :items="items" class="text-center">
      <template #head(duration)="data">
        <span>Duración</span>
      </template>
      <template #cell(aceptar)="row">
        <b-form-checkbox
            v-model="analytics"
            name="google_analytics"
            disabled
        />
      </template>
    </b-table>
    <p class="pt-4">
      CONSTRUCCIONES HUETOR 2001, S.L. puede modificar esta Política de Cookies en función de nuevas exigencias legislativas,  reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Autoridad competente.
    </p>
    <p>
      Cuando se produzcan cambios significativos en esta Política de Cookies se comunicará al usuario y, en caso necesario, se solicitará su  consentimiento.
    </p>

    <b-button class="mt-3" block @click="goBack()">Volver</b-button>
  </div>
</template>

<script>
export default {
  name: 'CookieConfig',
  data() {
    return {
      analytics: true,
      fields: [
        'Aceptar',
        'Nombre',
        'Duración',
        'Finalidad'
      ],
      items: [{
        aceptar: '',
        Nombre: 'Google Analytics',
        duration: 'Ilimitada',
        Finalidad: 'Técnica'
      }]
    }
  },
  methods: {
    goBack() { this.$emit('back') },

    goDataProtect() {
      // this.$emit('closeModal')
      this.$router.push('legal');
    }
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
