import Vue from 'vue'
import App from "@/App.vue";
//import Contador from './ContadorBase.vue'

//import AppHeader from "@/AppHeader.vue";


//Vue.component('AppHeader', AppHeader)

new Vue({
    el: '#app',
    render: h => h(App)
})

/* Outra maneira de renderizar o app
new Vue({
   render: h => h(App)
}).$mount('#app')
*/
