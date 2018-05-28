<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'AddBlockNumber',
  data () {
    return {
      formData: {
        num1: '',
        num2: '',
        num3: '',
      },
      isLoading: false,
      toastOptions: {
        position: 'bottom-center'
      }
    }
  },
  validations: {
    formData: {
      num1: {
        required,
        minLength: minLength(1),
        between: between(0, 9)
      },
      num2: {
        required,
        minLength: minLength(1),
        between: between(0, 9)
      },
      num3: {
        required,
        minLength: minLength(1),
        between: between(0, 9)
      }
    }
  },
  computed: mapState({
    ...mapGetters({
      user: 'getUser',
      game: 'getGame'
    })
  }),
  methods: {
    async addblocknumber () {
      this.formData.id = this.game._id
      this.formData.userid = this.user._id
      console.log(this.formData)
      this.$v.formData.$touch()
      if (this.$v.formData.$error) {
        this.$toasted.show('Please review fields.', this.toastOptions).goAway(1500)
        return
      }
      this.isLoading = true
      let result = await this.$store.dispatch('addblocknumber', this.formData)
      if (!result.success) {
        this.$toasted.show(result.errors, this.toastOptions).goAway(2000)
        this.isLoading = false
      }
      else {
        this.$toasted.show("New Block Number Added", this.toastOptions).goAway(2000)
        this.$router.push({ path: 'blocknumbers' })
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
            <h3 class="title has-text-grey">Block this Number Combination</h3>

            <div class="box">
                <form>
                  <div class="flex-container">
                    <div>
                      <input
                        class="input is-large"
                        type="number"
                        placeholder=""
                        autofocus=""
                        min="0"
                        max="9"
                        v-model="formData.num1"
                      >
                    </div>
                    <div>
                      <input
                        class="input is-large"
                        type="number"
                        placeholder=""
                        autofocus=""
                        min="0"
                        max="9"
                        v-model="formData.num2"
                      >
                    </div>
                    <div>
                      <input
                        class="input is-large"
                        type="number"
                        placeholder=""
                        autofocus=""
                        min="0"
                        max="9"
                        v-model="formData.num3"
                      >
                    </div>
                  </div>



                    <button
                      class="button is-block is-primary is-large is-fullwidth"
                      :class="isLoading ? 'is-loading' : '' "
                      @click.prevent="addblocknumber"
                      :disabled="isLoading"
                    >
                    Block
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  text-align: right;
  color: #000 !important;
}

input {
  width: 5rem;
}
</style>
