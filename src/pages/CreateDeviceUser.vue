<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'CreateDeviceUser',
  data () {
    return {
      formData: {
        username: '',
        password: '',
        name: '',
        password2: ''
      },
      isLoading: false,
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  validations: {
    formData: {
      name: {
        required
      },
      username: {
        required
      },
      password: {
        required
      },
      password2: {
        required
      }
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser'
    })
  }),
  methods: {
    async createdeviceuser () {
      this.formData.id= this.user._id
      // console.log(this.formData)
      this.$v.formData.$touch()
      if (this.$v.formData.$error) {
        this.$toasted.show('Please review fields.', this.toastOptions).goAway(1500)
        return
      }
      this.isLoading = true
      let result = await this.$store.dispatch('createdeviceuser', this.formData)
      if (!result.success) {
        this.$toasted.show(result.errors, this.toastOptions).goAway(2000)
        this.isLoading = false
      }
      else {
        this.$toasted.show("New Device User Created", this.toastOptions).goAway(2000)
        this.$router.push({ path: 'tickets' })
      }
    }
  },
  mounted () {
    console.log(this.user)
    if(this.user._id == null) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
            <h3 class="title has-text-grey">Create Device User</h3>

            <div class="box">
                <form>
                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="Name"
                              autofocus=""
                              v-model="formData.name"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="User Name"
                              v-model="formData.username"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="password"
                              placeholder="Password"
                              autofocus=""
                              v-model="formData.password"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="password"
                              placeholder="Confirm Password"
                              autofocus=""
                              v-model="formData.password2"
                            >
                        </div>
                    </div>

                    <button
                      class="button is-block is-primary is-large is-fullwidth"
                      :class="isLoading ? 'is-loading' : '' "
                      @click.prevent="createdeviceuser"
                      :disabled="isLoading"
                    >
                    Create
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
