import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Vue.http.options.root = 'https://public-api.wordpress.com/rest/v1.1/sites/publicvoidfilhow.wordpress.com/';
// console.log(Vue.http.options)
/* eslint-disable no-new */
Vue.filter('html', function (value) {
	console.log(value)
  	return $.parseHTML(value);
});

new Vue({
  el: 'body',
  components: { App }
})
