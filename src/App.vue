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

  <router-view></router-view>
</template>

<style lang="scss"></style>
