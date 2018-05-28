<script>
export default {
  name: 'top-nav',
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    openPage (page) {
      console.log(page)
      this.$router.push({ path: page })
      this.showNav= false
    }
  }
}
</script>

<template>
  <section>
    <nav class="navbar nav-header is-primary is-fixed-top"  >
      <div class="navbar-brand">
        <!-- <figure class="image is-48x48">
          <img src="../assets/suertres300.png">
        </figure> -->
        <a class="navbar-item" href="https://bulma.io">
          <h1>SMALL TOWN LOTTERY</h1>
        </a>

        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu has-text-right" :class="{ 'is-active': showNav }" >
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <strong>MENU</strong>
            </a>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/tickets" @click.native="showNav=false" >Current Report</router-link>
              <hr class="navbar-divider">
              <router-link class="navbar-item" to="/deviceusers" @click.native="showNav = false"  >List Devices</router-link>
              <router-link class="navbar-item" to="/createdeviceuser" @click.native="showNav = false"  >Create Device User</router-link>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Current Game
              </a>
              <a class="navbar-item">
                Finished Games
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Create Admin
              </a>
              <a class="navbar-item">
                List Admin
              </a>
            </div>
          </div>
          <a class="navbar-item"><strong>LOGOUT</strong></a>
          <a class="navbar-item">&nbsp;</a>
        </div>
      </div>
    </nav>
  </section>
</template>
