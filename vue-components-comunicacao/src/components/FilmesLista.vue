<template>
  <div class="row">
    <div class="col-8">
      <h2>Filmes</h2>
      <ul class="list-group list-group-flush">
        <FilmesListaIten v-for="filme in filmes" :key="filme.id" :filmeTitulo="filme.titulo"/>
      </ul>
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
    FilmesListaItenInfo
  },
  data(){
    return {
      filmes:[
        {id:1, titulo: 'Vingadores: Guerra Infinita'},
        {id:2, titulo: 'Homem Formiga e a Vespa'},
        {id:3, titulo: 'Pantera Negra'},
        {id:4, titulo: 'DeadPool 2'},
      ]
    }
  }
}
</script>