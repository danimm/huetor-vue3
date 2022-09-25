<template>
  <div class="d-block text-left">
    <p><b>Responsable:</b> CONSTRUCCIONES HUETOR 2001, S.L. con domicilio social en LA LOMILLA, 8A 29713 LOS ROMANES</p>
    <p>En la presente Política de Cookies encontrarás la descripción y finalidad de cada una de las cookies utilizadas,
      así como su Nombre, el servidor de envío, su caducidad y en su caso la existencia de transferencia internacional
      de datos.</p>
    <p>
      Cuando visitas un sitio web, éste puede almacenar o recuperar información en su navegador, principalmente en forma
      de cookies. Esta
      información puede ser sobre ti, tus preferencias o tu dispositivo y se utiliza principalmente para lograr que el
      sitio funcione como se espera.
      La información generalmente no te identifica de forma directa, pero puede brindarte una experiencia web más
      personalizada.
      En CONSTRUCCIONES HUETOR 2001, S.L. utilizamos cookies con el objetivo de prestar un mejor servicio y
      proporcionarte una mejor
      experiencia en tu navegación.
    </p>
    <p>
      Queremos informarte de manera clara y precisa sobre las cookies que utilizamos, detallando a continuación; qué es
      una
      cookie, para qué sirve, qué tipos de cookies utilizamos, cuál es su finalidad y cómo puedes configurarlas o
      deshabilitarlas si así lo deseas.
      Los usuarios podrán seleccionar qué tipo de cookies aceptan o rechazan desde <b>configuración de cookies,</b> de
      conformidad con lo indicado
      en la presente Política.
    </p>
    <p><b>¿Qué es una cookie y para qué sirve?</b></p>
    <p>Este sitio web utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En
      general, estas tecnologías pueden servir para finalidades muy diversas, como, por ejemplo, reconocerte como
      usuario, obtener información sobre tus hábitos de navegación, o personalizar la forma en que se muestra el
      contenido. Los usos concretos que hacemos de estas tecnologías se describen a continuación.</p>
    <h4>TIPOS DE COOKIES</h4>
    <h5>SEGÚN SU TITULARIDAD</h5>
    <p><b>Cookies propias:</b> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio
      gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</p>
    <p><b>Cookies de terceros:</b> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio
      que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</p>
    <h5>SEGÚN SU DURACIÓN</h5>
    <p><b>Cookies de sesión:</b> son aquellas diseñadas para recabar y almacenar datos mientras el usuario accede a una
      página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del
      servicio solicitado por el usuario en una sola ocasión y desaparecen al terminar la sesión.</p>
    <p><b>Cookies persistentes:</b> son aquellas en las que los datos siguen almacenados en el terminal y pueden ser
      accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a
      varios años.</p>
    <h5>SEGÚN SU FINALIDAD</h5>
    <p><b>Cookies técnicas:</b> son aquéllas que permiten a los usuarios navegar a través de las páginas web de
      CONSTRUCCIONES HUETOR 2001, S.L. y de las herramientas que CONSTRUCCIONES HUETOR 2001, S.L. pone a disposición de
      sus clientes, permitiendo su gestión y operativa, como por ejemplo, controlar el tráfico y la comunicación de
      datos, identificar la sesión o realizar el proceso de compra de los productos y servicios, por lo que conforme al
      artículo 22.2 de la LSSICE su uso no requiere el consentimiento del usuario.</p>
    <p><b>Cookies de análisis o medición:</b> son las cookies que permiten a CONSTRUCCIONES HUETOR 2001, S.L. realizar
      un seguimiento y análisis en relación al comportamiento de los usuarios que visitan sus sitios web o que utilizan
      sus herramientas de gestión. CONSTRUCCIONES HUETOR 2001, S.L. analiza dicha información para introducir mejoras,
      tanto en sus sitios web como en sus herramientas, basadas en los datos de uso obtenidos.</p>
    <p><b>Cookies de publicidad comportamental:</b> son aquellas que almacenan información del comportamiento de los
      usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar
      un perfil específico para mostrar publicidad en función del mismo.</p>
    <p>El tiempo de conservación de las cookies dependerá del tipo de que se trate, siendo siempre el mínimo
      indispensable para cumplir su finalidad de uso.</p>
    <b-button class="mt-3" block @click="goBack()">Volver</b-button>
    
  </div>
</template>

<script>
export default {
  name: 'CookieText',
  methods: {
    goBack() {
      this.$emit('back')
    }
  }
}
</script>

<style scoped>

</style>
