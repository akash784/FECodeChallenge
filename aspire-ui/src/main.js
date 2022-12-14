import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
const eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  provide: { eventBus }
}).$mount('#app')
