// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './module/index/header'
import Section from './module/index/section'
import Footer from './module/index/footer'
import './assets/css/reset.css'
import './assets/css/bootstrap.css'
import './assets/css/basice.css'
import router from './module/router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ 
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})
new Vue({ 
  el: '#section',
  router,
  components: { Section },
  template: '<Section/>'
})
new Vue({ 
  el: '#footer',
  router,
  components: { Footer },
  template: '<Footer/>'
})