<script>
import projectCard from "./projectCard.vue";
export default {
  data() {
    return {};
  },
  props: {
    projects: Object,
  },

  components: { projectCard },
};
</script>

<template>
  <h1 class="container my-5 debug">hello postlist</h1>
  <div class="debug">
    <div class="container row justify-content-between">
      <projectCard
        class="col-4 m-2"
        v-for="project in projects"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
