import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import router from './router.js'
import store from './store.js'


document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
    store
  })
})