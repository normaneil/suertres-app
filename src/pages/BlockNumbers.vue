<script>
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'BlockNumbers',
  data () {
    return {
      title: 'Block Numbers',
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      game: 'getGame',
      blocknumbers: 'getBlockNumbers'
    })
  }),
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('llll')
      }
    }
  },
  async mounted () {
    console.log(this.user)
    if(this.user._id == null) {
      this.$router.push({ path: '/' })
    }
    this.$store.dispatch('getblocknumbers')
  }
}
</script>

<template>
  <section class="section section-white">
    <div class="container">
      <div class="content">
        <h3 class="is-uppercase">{{ title }}</h3>
        <div v-if="game">
          <p>Date : {{ game.gameDate | formatDate }} </p>
          <p>Time : {{ game.gameTime }} </p>
        </div>
      </div>
    </div>
    <div class="container ticket-container">
      <div class="columns" v-for="(ticket, key) in blocknumbers" :key="key">
        <div class="column is-half is-offset-one-quarter has-background-white-ter has-text-centered is-multiline is-mobile ticket_number">{{ ticket.ticket_num }}</div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@import '../scss/variables';

.ticket-container {
  margin-top: 40px;
}


.ticket_number {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
}

</style>
