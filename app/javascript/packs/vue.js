

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


import './custom.scss'

Vue.use(BootstrapVue)


document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
  })
})
