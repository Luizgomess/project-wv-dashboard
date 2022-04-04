import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TransactionsDashboard from '../views/TransactionsDashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Transactions",
    component: TransactionsDashboard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
