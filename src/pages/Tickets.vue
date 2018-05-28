<script>
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'Tickets',
  data () {
    return {
      title: 'Current Game Report',
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      game: 'getGame',
      tickets: 'getTickets'
    })
  }),
  methods: {
    addBlockNumber () {
      this.$router.push({ path: 'addblocknumber' })
    },
    viewBlockNumbers () {
      this.$router.push({ path: 'blocknumbers' })
    },
    betdetails (ticket_number) {
      console.log(ticket_number)
      this.$router.push({ path: 'ticketbets', query: { num: ticket_number, game: this.game._id }})
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
  async mounted () {
    console.log(this.user)
    if(this.user._id == null) {
      this.$router.push({ path: '/' })
    }
    this.$store.dispatch('getreport')
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
            <div class="buttons has-addons is-right">
              <span class="button is-danger" @click="addBlockNumber">Add Block Number</span>
              <span class="button is-info" @click="viewBlockNumbers" >View Block Number</span>
            </div>
        </div>
      </div>
    </div>
    <div class="container ticket-container">
      <div class="flex-container has-background-grey-lighter" v-if="!$mq.phone" >
        <div class="has-text-right"><strong>#</strong></div>
        <div class="has-text-right"><strong>Ticket Number</strong></div>
        <div class="has-text-right"><strong>Total</strong></div>
      </div>
      <div v-for="(ticket, key) in tickets" :key="key">
        <div class="flex-container has-background-white-ter link-container" :class="{'is-mobile': $mq.phone}" @click.prevent="betdetails(ticket._id)" >
          <div v-if="!$mq.phone">{{ ++key }}</div>
          <div :class="{'ticket_number': $mq.phone}">{{ ticket._id }}</div>
          <div class="total">&#8369;{{ ticket.total | moneyFormat }}</div>
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
