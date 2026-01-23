<template>
  <div>
    <app-header/>
    <ContadorInfo/>
    <contador-base/>
  </div>
</template>

<script>
import AppHeader from "@/components/shared/AppHeader.vue";
import ContadorBase from "./components/contador/ContadorBase.vue";
import ContadorInfo from '@/components/contador/ContadorInfo.vue'


export default {
  components: {
    ContadorBase,
    AppHeader,
    ContadorInfo,
  }
}
</script>