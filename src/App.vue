<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
      projects: [],
    };
  },
  components: { ProjectList },

  methods: {
    fetchProjects() {
      // uso axios per recuperare la mia API
      axios.get("http://localhost:8000/api/projects").then((response) => {
        this.projects = response;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">hello world</h1>
    {{ projects }}
    <ProjectList />
  </div>
</template>

<style lang="scss"></style>

<!-- ARRIVATO AL MINUTO 00:18 DELLA LEZIONE 83B -->
