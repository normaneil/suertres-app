<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'UpdateUserDevice',
  data () {
    return {
      formData: {
        number: '',
        uid: '',
        imei: '',
      },
      isLoading: false,
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  validations: {
    formData: {
      number: {
        required
      },
      uid: {
        required
      },
      imei: {
        required
      }
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      deviceuserid: 'getDeviceUserId',
      device: 'getDevice'
    })
  }),
  methods: {
    async updateuserdevice () {
      this.formData.id = this.device._id
      this.formData.usernumber = this.device.number
      this.formData.useruid = this.device.uid
      this.formData.userimei = this.device.imei

      console.log(this.formData)
      this.$v.formData.$touch()
      if (this.$v.formData.$error) {
        this.$toasted.show('Please review fields.', this.toastOptions).goAway(1500)
        return
      }
      this.isLoading = true
      let result = await this.$store.dispatch('updateuserdevice', this.formData)
      if (!result.success) {
        this.$toasted.show(result.errors, this.toastOptions).goAway(2000)
        this.isLoading = false
      }
      else {
        this.$toasted.show("Device for User Updated", this.toastOptions).goAway(2000)
        this.$router.push({ path: 'deviceusers' })
      }
    }
  },
  mounted () {
    this.formData.number = this.device.number
    this.formData.uid = this.device.uid
    this.formData.imei = this.device.imei

    if(this.user._id == null) {
      this.$toasted.show("No Current User Session Setected", this.toastOptions).goAway(2000)
      this.$router.push({ path: '/' })
    }
    if(this.deviceuserid == null) {
      this.$toasted.show("Please select a Device User", this.toastOptions).goAway(2000)
      this.$router.push({ path: 'deviceusers' })
    }
  }
}
</script>

<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
            <h3 class="title has-text-grey">Edit Device</h3>
            <p class="subtitle has-text-grey">{{ deviceuserid.name }}</p>
            <div class="box">
                <form>
                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="Sim Card Number"
                              autofocus=""
                              v-model="formData.number"
                              value="device.number"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="Phone UID"
                              v-model="formData.uid"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="Phone IMEI"
                              autofocus=""
                              v-model="formData.imei"
                            >
                        </div>
                    </div>


                    <button
                      class="button is-block is-primary is-large is-fullwidth"
                      :class="isLoading ? 'is-loading' : '' "
                      @click.prevent="updateuserdevice"
                      :disabled="isLoading"
                    >
                    Update
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
