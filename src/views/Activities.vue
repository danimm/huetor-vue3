<template>
  <div class="row">
    {{ $i18n.locale }}
    <div class="col">
      <iframe
          class='civitatis-iframe'
          :src='`${url[$i18n.locale === "de" ? "en" : $i18n.locale]}`'
          frameborder='0'
          data-maxwidth='100%'
          style='max-width: 100%'
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: {
        fr:
            'https://www.civitatis.com/widget-activities/?affiliated=12010&display=cosy&cant=9&lang=fr&currency=EUR&zone=8&activities=17029,27667,27616,7781,19189,7381,45631,23872,53476&transfer=0&width=100%&typeSelection=manual&removeBackground=1',
        es:
            'https://www.civitatis.com/widget-activities/?affiliated=12010&display=cosy&cant=9&lang=es&currency=EUR&zone=8&activities=1272,15041,4768,3727,755,668,265,264,17329&transfer=0&width=100%&typeSelection=manual&removeBackground=1',
        en:
            'https://www.civitatis.com/widget-activities/?affiliated=12010&display=cosy&cant=9&lang=en&currency=EUR&zone=8&activities=15369,23158,27844,15655,27790,4506,26713,27166,50986&transfer=0&width=100%&typeSelection=manual&removeBackground=1'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  height: 1400px;
}

.col {
  width: 100%;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
