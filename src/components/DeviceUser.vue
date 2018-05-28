<script>
export default {
  name: 'DeviceUser',
  props: ['deviceuser'],
  methods: {
    gotoAddDevice (deviceuserid) {
      this.$store.commit('applyDeviceUserId', deviceuserid)
      this.$router.push({ path: 'adduserdevice' })
    },
    gotoUpdateDevice (deviceuserid, device) {
      this.$store.commit('applyDeviceUserId', deviceuserid)
      this.$store.commit('applyDevice', device)
      this.$router.push({ path: 'updateuserdevice' })
    },
    gotoDeleteDevice (deviceuserid) {
      this.$store.commit('applyDeviceUserId', deviceuserid)
    }
  }
}
</script>
<template>
  <section>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ deviceuser.name }}</p>
            <div class="subtitle is-6">{{ deviceuser.username }}</div>
          </div>
        </div>

        <div class="content">
          <p class="has-text-right">
            <button class="button is-primary" @click="gotoAddDevice(deviceuser)" >Add Device</button>
          </p>
          <div v-for="(device, key) in deviceuser.devices" :key="key">
            <div class="flex-container has-background-white-ter" :class="{'is-mobile': $mq.phone}">
              <div>PHONE : {{ device.number }}</div>
              <div>IMEI : {{ device.imei }}</div>
              <div>UID : {{ device.uid }}</div>
              <div>
                <div class="buttons has-addons is-centered">
                  <span class="button is-info is-outlined" @click="gotoUpdateDevice(deviceuser, device)">Edit</span>
                  <span class="button is-danger is-outlined" >Delete</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="deviceuser.devices.length == 0" class="flex-container has-background-white-ter" :class="{'is-mobile': $mq.phone}" >
            <div class="subtitle is-6 has-text-danger">No devices registered</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/variables';

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px;
  text-align: left;
  border: #ccc solid 1px;

}

@media #{$extra-small-devices} {
  .flex-container {
    flex-direction: column;
  }
}

@media #{$small-devices} {
  .flex-container {
    flex-direction: column;
  }
}

@media #{$large-devices} {
  .flex-container {
    flex-direction: row;
    text-align: right;
  }
}
</style>
