<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
    <span>{{ filmeTituloConcatenado }}</span>
    <button class="btn btn-secondary">Selecionar</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    filmeTitulo:{
    type: String,
      required: true
    },
    filmeAno:{
      type: Number,
      required: true
    }
  },
  computed: {
    filmeTituloConcatenado(){
      return `Título: ${this.filmeTitulo}`
    }
  },
  created(){
    console.log(typeof this.filmeTitulo)
  }
}
</script>