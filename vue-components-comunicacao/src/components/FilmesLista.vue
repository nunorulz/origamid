<template>
  <div class="row">
    <div class="col-8">
      <h2>Filmes</h2>
      <div class="list-group list-group-flush">
        <FilmesListaIten filmeTitulo="Vingadores: Guerra Infinita"/>
        <FilmesListaIten filmeTitulo="Homem Formiga e a Vespa"/>
        <FilmesListaIten filmeTitulo="Pantera Negra"/>
      </div>
    </div>
    <div class="col-4">
      <FilmesListaItenInfo/>
    </div>
  </div>
</template>
<script>
import FilmesListaIten from "@/components/FilmesListaIten.vue";
import FilmesListaItenInfo from "@/components/FilmesListaItenInfo.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
  }
}
</script>