<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      project: null,
    };
  },
  props: {},

  methods: {
    srchProject(uri = store.baseUrl + "projects/" + this.$route.params.slug) {
      // uso axios per recuperare la mia API
      console.log(uri);
      axios
        .get(uri)
        .then((response) => {
          this.project = response.data;
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
        });
    },
  },

  created() {
    this.srchProject();
  },
};
</script>

<template>
  <div class="container my-3 debug" v-if="project">
    <h1>ProjectDetail</h1>
    <h3>from subpage pages</h3>
    <!-- {{ project }} -->
    <br />
    {{ project.id }}
    <br />
    {{ project.name }}
    <div v-for="tecnology in project.tecnologies">{{ tecnology.label }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
