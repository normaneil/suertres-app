<script>
import DeviceUser from '@/components/DeviceUser'
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'DeviceUsers',
  components: {
    DeviceUser,
  },
  data () {
    return {
      title: 'List of Device Users',
      toastOptions: {
        position: 'bottom-center'
      },
      search: ''
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      deviceusers: 'getDeviceUsers',
    })
  }),

  methods: {
    async getDeviceUsers () {
      let result = await this.$store.dispatch('deviceusers')
    }
  },
  mounted () {
    console.log(this.user)
    if(this.user._id == null) {
      this.$router.push({ path: '/' })
    }
    this.getDeviceUsers()
  }
}
</script>

<template>
  <section class="section section-white">
    <div class="container">
      <div class="content">
        <h3 class="is-uppercase">{{ title }}</h3>
      </div>
    </div>

    <div class="container">
      <div v-for="(deviceuser, key) in deviceusers" :key="key">
        <device-user :deviceuser="deviceuser"></device-user>
        <p>&nbsp;</p>
      </div>
    </div>

  </section>
</template>



<style lang="scss" scoped>

</style>
