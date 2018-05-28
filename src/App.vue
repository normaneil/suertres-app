<script>
import { mapState, mapGetters } from 'vuex'
import TopNav from '@/components/TopNav'
import User from '@/components/User'
export default {
  name: 'App',
  data () {
    return {
      toastedOptions: {
        position: 'bottom-center'
      }
    }
  },
  components: {
    TopNav,
    User
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser'
    })
  }),
  mounted () {
    console.log('READY')
    socket.on('new ticket', (ticket)=>{
      console.log('SOCKET IS ON')
      this.$store.dispatch('getreport')
      this.$toasted.show("New Ticket Created : " + ticket.ticket_num, this.toastedOptions).goAway(5000)
    });
  }
}
</script>

<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <user :user="user"></user>
  </div>
</template>
