import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'

import Vue from 'vue'
import App from './App.vue'

const $ = require("jquery")
window.$ = $
import 'bootstrap/dist/js/bootstrap.bundle.min'
require('bootstrap-select')

import BootstrapSelect from './../packages/index'
Vue.use(BootstrapSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
