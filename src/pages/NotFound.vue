<script>
export default {
  data() {
    return {};
  },
  props: {},
};
</script>

<template>
  <div class="container my-3 debug">
    <h1>404</h1>
    <h3>pagina non trovata</h3>
    <router-link :to="{ name: 'home' }">
      <div class="btn btn-ptrimary">torna alla home</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
