import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MainV2 from '@/components/MainV2'
import ItemList from '@/components/ListTest'
import CreateItem from '@/components/CreateTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainV2',
      component: MainV2
    },
    // {
    //   path: '/add-item',
    //   name: 'ShowItem',
    //   component: CreateItem
    // },
    // {
    //   path: '/',
    //   name: 'Main',
    //   component: ItemList
    // }
  ]
})
