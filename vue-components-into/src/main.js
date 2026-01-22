import Vue from 'vue'

/*Vue.component('br-component', {
    data() {
        return {
            titulo: "Curso de Vue Js",
            contador: 0
        }
    },
    methods: {
        incrementar() {
            this.contador++
        }
    },
    template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">
        Clicado {{ contador }} vezes
      </button>
    </div>
  `
})*/

const brComponent = {

    data() {
        return {
            titulo: "Curso de Vue Js",
            contador: 0
        }
    },
    methods: {
        incrementar() {
            this.contador++
        }
    },
    template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">
        Clicado {{ contador }} vezes
      </button>
    </div>
  `
}

new Vue({
    el: '#app1',
    components: {
        'br-component': brComponent
    }
})

new Vue({
    el: '#app2'
})
