<script>
import AppHeader from "./components/AppHeade.vue";

export default {
  data() {
    return {};
  },
  components: { AppHeader },
};
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container debug">
    * si parla di passare i parametri alla vista al minuto 00.28 della lezione
    85A
  </div>
  <router-view></router-view>
</template>

<style lang="scss"></style>
