import Vue from 'vue'

Vue.component('br-component', {
    data: function() {
        return {
            titulo: "Curso de Vue Js"
        }
    },
    template: '<h1>{{titulo}}</h1>'
})

new Vue({
    el: '#app',
})
