<script>
import ProjectList from "../components/projects/ProjectList.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      projects: [],
      pagination: {
        next: null,
        prev: null,
        links: null,
      },
    };
  },

  components: { ProjectList },

  props: {},

  methods: {
    fetchProjects(uri = store.baseUrl + "projects") {
      // uso axios per recuperare la mia API
      axios.get(uri).then((response) => {
        this.projects = response.data.projects.data;

        // valorizzo le paginazioni
        this.pagination.prev = response.data.projects.prev_page_url;
        this.pagination.next = response.data.projects.next_page_url;
        this.pagination.links = response.data.projects.links;
      });
      this.renderkey++;
    },

    fetchProjectsType(
      uri = store.baseUrl + "projects/type/" + this.$route.params.type_id
    ) {
      axios
        .get(uri)
        .then((response) => {
          this.projects = response.data.projects.data;

          // valorizzo le paginazioni
          this.pagination.prev = response.data.projects.prev_page_url;
          this.pagination.next = response.data.projects.next_page_url;
          this.pagination.links = response.data.projects.links;
        })
        .catch((error) => {
          console.log("errore");
        });

      this.renderkey++;
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="">
    <div class="container my-3">
      <div
        v-for="link in pagination.links"
        class="btn btn-warning"
        @click="fetchProjects(link.url)"
        v-html="link.label"
      ></div>
    </div>

    <div class="container">
      <ProjectList :projects="projects" @clickType="fetchProjectsType()" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
