import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import TicketsPage from  '@/pages/Tickets'
import CreateDeviceUserPage from '@/pages/CreateDeviceUser'
import DeviceUsersPage from '@/pages/DeviceUsers'
import AddUserDevicePage from '@/pages/AddUserDevice'
import UpdateUserDevicePage from '@/pages/UpdateUserDevice'
import AddBlockNumberPage from '@/pages/AddBlockNumber'
import BlockNumbersPage from '@/pages/BlockNumbers'
import TicketBetsPage from '@/pages/TicketBets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'lome',
      component: HomePage
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsPage
    },
    {
      path: '/createdeviceuser',
      name: 'createdeviceuser',
      component: CreateDeviceUserPage
    },
    {
      path: '/deviceusers',
      name: 'deviceusers',
      component: DeviceUsersPage
    },
    {
      path: '/adduserdevice',
      name: 'adduserdevice',
      component: AddUserDevicePage
    },
    {
      path: '/updateuserdevice',
      name: 'updateuserdevice',
      component: UpdateUserDevicePage
    },
    {
      path: '/addblocknumber',
      name: 'addblocknumber',
      component: AddBlockNumberPage
    },
    {
      path: '/blocknumbers',
      name: 'blocknumbers',
      component: BlockNumbersPage
    },
    {
      path: '/ticketbets',
      name: 'ticketbets',
      component: TicketBetsPage
    }
  ]
})
