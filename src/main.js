import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  thickness: '3px'
};
Vue.use(VueProgressBar, options);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
