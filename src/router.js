import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import NewEmployee from './views/NewEmployee.vue'
import EditEmployee from './views/EditEmployee.vue'
import ViewEmployee from './views/ViewEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/view/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
  ]
})
