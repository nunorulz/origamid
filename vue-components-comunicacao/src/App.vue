<template>
  
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Lista de Filmes</h1>
      <p class="lead">Treiando comunicação entre Componentes no VUE</p>
    </div>
  </div>

  <div class="container">
    <FilmeLista/>
  </div>

</template>

<script>
import FilmeLista from "./components/FilmeLista.vue";
export default {
  components: {
    FilmeLista
  }
}
</script>
