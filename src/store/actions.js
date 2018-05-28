import apios from '../api'
// import axios from 'axios'

export default {
  async getreport({
    commit,
    state,
    dispatch
  }) {
    try {
      let result = await apios.get('/admin/getreport')
      console.log(result)
      if(result.data.success == true) {
        commit('applyGame', result.data.game)
        commit('applyTickets', result.data.tickets)
        return {
          success: true
        }
      } else {
        return {
          success: false
        }
      }
    }
    catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async signin ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/login', data)
      // console.log(result.data.success)
      // console.log(result.data.response.message)
      // console.log(result.data.response.user)

      if(result.data.success == true) {
        commit('applyUser', {
          _id: result.data.response.user._id,
          username: result.data.response.user.username,
          email: result.data.response.user.email,
          name: result.data.response.user.name
        })
        return {
          success: true
        }
      } else {
        return {
          success: false
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async createdeviceuser ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/createdeviceuser', data)
      // console.log(result.data.success)
      // console.log(result.data.response.message)
      // console.log(result.data.response.user)

      if(result.data.success == true) {

        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async deviceusers({
    commit,
    state,
    dispatch
  }) {
    try {
      let result = await apios.get('/admin/deviceusers')
      console.log(result)
      if(result.data.success == true) {
        commit('applyDeviceUsers', result.data.deviceusers)
        return {
          success: true
        }
      } else {
        return {
          success: false
        }
      }
    }
    catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async adduserdevice ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/adduserdevice', data)

      if(result.data.success == true) {
        await dispatch('deviceusers')
        // commit('applyDeviceUserId', null)
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async updateuserdevice ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/updateuserdevice', data)

      if(result.data.success == true) {
        await dispatch('deviceusers')
        // commit('applyDeviceUserId', null)
        commit('applyDevice', null)
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async addblocknumber ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/addblocknumber', data)

      if(result.data.success == true) {
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async getblocknumbers ({
    commit,
    state,
    dispatch
  }) {
    try {
      let result = await apios.get('/admin/getblocknumbers/?id='+state.game._id)
      if(result.data.success == true) {
        commit('applyBlockNumbers', result.data.ticketblock)
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async getticketbets ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/getticketbets', data)

      if(result.data.success == true) {
        commit('applyTicketBets', result.data.ticketbets)
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
  async getgametickets ({
    commit,
    state,
    dispatch
  }, data) {
    try {
      let result = await apios.post('/admin/getgametickets', data)

      if(result.data.success == true) {
        commit('applyGameTickets', result.data.gametickets)
        return {
          success: true
        }
      } else {
        return {
          success: false,
          errors: result.data.errors
        }
      }

    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  },
}
