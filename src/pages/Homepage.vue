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
    <h1>home home home home</h1>
    <h3>from pages</h3>
    <div class="btn-detail">
      <router-link class="router-link-color" :to="{ name: 'portfolio' }">
        vai al portfolio
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
