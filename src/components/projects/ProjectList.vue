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
  <h1 class="container my-1">lista dei progetti:</h1>
  <div class="container row justify-content-start">
    <projectCard
      class="col-4 m-2"
      v-for="project in projects"
      :project="project"
      @clickType="$emit('clickType')"
    />
  </div>
</template>

<style lang="scss" scoped></style>
