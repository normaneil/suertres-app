<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      isLoading: false,
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  validations: {
    formData: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    async login () {

      this.$v.formData.$touch()
      if (this.$v.formData.$error) {
        this.$toasted.show('Please review fields.', this.toastOptions).goAway(2000)
        return
      }
      this.isLoading = true
      let result = await this.$store.dispatch('signin', this.formData)
      if (!result.success) {
        this.$toasted.show("Authentication Failed", this.toastOptions).goAway(2000)
        this.isLoading = false
      }
      else {
        this.$router.push({ path: 'tickets' })
      }
    }
  }
}
</script>

<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">ACCOUNT LOGIN</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box">
                <!-- <figure class="avatar">
                    <img src="../assets/lock.png" >
                </figure> -->
                <form>
                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="Your User Name"
                              autofocus=""
                              v-model="formData.username"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input
                              class="input is-large"
                              type="password"
                              placeholder="Your Password"
                              v-model="formData.password"
                            >
                        </div>
                    </div>

                    <button
                      class="button is-block is-primary is-large is-fullwidth"
                      :class="isLoading ? 'is-loading' : '' "
                      @click.prevent="login"
                      :disabled="isLoading"
                    >
                    Login
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
