<template lang="pug">
  .grid-container
    b-card.mb-2(tag='article')
      h2 {{ $t('reservations.card.title') }}
      h3.date {{ $t('reservations.card.season') }}
      h3.date {{ $t('reservations.card.date') }}, 
      h3.date {{ $t('reservations.card.fest') }}
      ul
        li(v-for="(item, index) in items") {{ item }}
        //- li {{ $t('reservations.card.list.item2') }}
        //- li {{ $t('reservations.card.list.item3') }}
        //- li {{ $t('reservations.card.list.item4') }}
        //- li {{ $t('reservations.card.list.item5') }}
        //- li {{ $t('reservations.card.list.item6') }}
        //- li {{ $t('reservations.card.list.item7') }}
        //- li {{ $t('reservations.card.list.item8') }}
        //- li {{ $t('reservations.card.list.item9') }}
        //- li {{ $t('reservations.card.list.item10') }}
        //- li {{ $t('reservations.card.list.item11') }}
        //- li {{ $t('reservations.card.list.item12') }}
</template>

<script>
export default {
  computed: {
    items() {
      return this.$i18n.messages[this.$i18n.locale].reservations.card.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-container {
  /* margin: 0 50px; */
  grid-gap: 20px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr) / 1fr;
  justify-content: space-between;
}

.card {
  padding: 0 20px 0 20px;
  border-radius: 10px;
  background-color: #fefdeb;
  margin: 0 10px;

  h2 {
    font-family: 'Satisfy', cursive;
    text-align: left;
    font-size: 3em;
  }

  h3 {
    font-size: 1.5em;
    text-decoration: underline;
    padding: 5px 0;
  }
}

@media screen and (max-width: 992px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 768px) {
  .grid-container {
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 576px) {
  h2 {
    font-size: 1.9em;
  }
  .grid-container {
    margin-bottom: 40px;
  }
  .date {
    font-size: 1em;
    padding: 5px;
  }
  ul {
    padding-left: 10px;
  }
}
</style>
