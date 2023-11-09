<script>
import ProjectList from "../components/projects/ProjectList.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      projects: [],
      types: [],
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
    fetchProjectsType(
      uri = store.baseUrl + "projects/type/" + this.$route.params.type_id
    ) {
      // todo: bisogna ricevere un array con tutti i Type del progetto. interrogando il DB. quindi bisogna fare una API del dei Type da chiamare qui
      // è possibile anche invocarla all'apertura del progetto e inserirla nello store senza chiamare continuamente axios.
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
          console.log(uri);
        });
    },
  },

  computed: {
    findTypes(
      uri = store.baseUrl + "projects/type/" + this.$route.params.type_id
    ) {
      console.log(uri);

      axios
        .get(uri)
        .then((response) => {
          this.types = response.data.projects.data;

          // valorizzo le paginazioni
          this.pagination.prev = response.data.projects.prev_page_url;
          this.pagination.next = response.data.projects.next_page_url;
          this.pagination.links = response.data.projects.links;
        })
        .catch((error) => {
          console.log(uri);
        });

      return this.types;
    },
  },

  created() {
    this.fetchProjectsType();
  },
};
</script>

<template>
  <div class="container my-3 debug">
    inserisco la lista dei type {{ findTypes }}
  </div>
  <div class="">
    <div class="container my-3">
      <div
        v-for="link in pagination.links"
        class="btn btn-warning"
        @click="fetchProjectsType(link.url)"
        v-html="link.label"
      ></div>
    </div>

    <div class="container">
      <ProjectList
        :key="renderkey"
        :projects="projects"
        @clickType="fetchProjectsType()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
