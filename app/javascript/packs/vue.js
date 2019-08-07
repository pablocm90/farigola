

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
  })
})
