<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
    <span>{{ filmeTitulo }}</span>
    <button class="btn btn-secondary ">Selecionar</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['filmeTitulo']
}
</script>