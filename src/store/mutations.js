import { stat } from "fs";

// import moment from 'moment'
export default {
  applyUser (state, payload) {
    state.user = payload
  },
  applyGame (state, payload) {
    state.game = payload
  },
  applyTickets (state, payload) {
    state.tickets = payload
  },
  applyDeviceUsers (state , payload) {
    state.deviceusers = payload
  },
  applyDeviceUserId (state, payload) {
    state.deviceuserid = payload
  },
  applyDevice (state, payload) {
    state.device = payload
  },
  applyBlockNumbers (state, payload) {
    state.blocknumbers = payload
  },
  applyTicketBets (state, payload) {
    state.ticketbets = payload
  },
  applyGameTickets (state, payload) {
    state.gametickets = payload
  }
}
