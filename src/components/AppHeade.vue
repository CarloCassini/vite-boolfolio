<script>
export default {
  data() {
    return {};
  },
  props: {},
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <div class="d-flex g-3">
        <div class="container-fluid">
          <router-link :to="{ name: 'home' }">
            <span class="navbar-brand mb-0 h1">homepage</span>
          </router-link>
        </div>
        <div class="container-fluid">
          <router-link :to="{ name: 'altro' }">
            <span class="navbar-brand mb-0 h1">Altro</span>
          </router-link>
        </div>
        <div class="container-fluid">
          <router-link :to="{ name: 'portfolio' }">
            <span class="navbar-brand mb-0 h1">portfolio</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
