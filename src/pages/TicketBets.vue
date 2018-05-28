<script>
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'TicketBets',
  data () {
    return {
      num: '',
      game:'',
      title: 'Ticket Number Bets'
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      gametickets: 'getGameTickets'
    })
  }),
  methods: {
    async getgametickets () {
      let data={}
      data.ticket_num = this.num
      data._gameid= this.game
      console.log(data)
      let result = await this.$store.dispatch('getgametickets', data)
      if (!result.success) {
        this.$toasted.show(result.errors, this.toastOptions).goAway(2000)
        this.isLoading = false
      }
    }
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('llll')
      }
    },
    moneyFormat(n) {
      if (n) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    }
  },
  mounted () {
    // console.log(this.$route.query.num)
    this.num = this.$route.query.num
    this.game = this.$route.query.game
    this.getgametickets()
  }
}
</script>

<template>
  <section class="section section-white">
    <div class="container">
      <div class="content">
        <h3 class="is-uppercase">{{ title }}</h3>
        <div v-if="gametickets">
          <p>Ticket Number : {{ this.num }} </p>
          <p>Date : {{ gametickets.game.gameDate | formatDate }} </p>
          <p>Time : {{ gametickets.game.gameTime }} </p>
        </div>
      </div>
    </div>
    <div class="container ticket-container">
      <div class="flex-container has-background-grey-lighter" v-if="!$mq.phone" >
        <div class="has-text-right"><strong>#</strong></div>
        <div class="has-text-right"><strong>Ticket Number</strong></div>
        <div class="has-text-right"><strong>Total</strong></div>
      </div>
      <div v-for="(ticket, key) in gametickets.ticketbets" :key="key">
        <div class="flex-container has-background-white-ter link-container" :class="{'is-mobile': $mq.phone}" @click.prevent="betdetails(ticket._id)" >
          <div >{{ ++key }}</div>
          <div >{{ ticket.number }}</div>
          <div >&#8369;{{ ticket.amount | moneyFormat }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/variables';

.link-container {
  cursor: pointer;
}

.ticket-container {
  margin-top: 40px;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px;
  text-align: right;
  color: #000 !important;
  border: #ccc solid 1px;
}

.ticket_number {
  font-size: 2rem;
  font-weight: bold;
}

@media #{$extra-small-devices} {
  .flex-container {
    flex-direction: column;
    text-align: center;
  }
}

@media #{$small-devices} {
  .flex-container {
    flex-direction: column;
    text-align: center;
  }
}

@media #{$large-devices} {
  .flex-container {
    flex-direction: row;
    text-align: right;
  }
}
</style>
