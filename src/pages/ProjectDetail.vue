<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      project: {},
    };
  },
  props: {},

  methods: {
    srchProject(uri = store.baseUrl + "projects/" + this.$route.params.id) {
      // uso axios per recuperare la mia API
      axios.get(uri).then((response) => {
        this.project = response.data;
        console.log(this.project);
        // todo - collegare il metodo show di api
      });
    },
  },

  created() {
    this.srchProject();
  },
};
</script>

<template>
  <div class="container my-3 debug">
    <h1>ProjectDetail</h1>
    <h3>from subpage pages</h3>
  </div>
</template>

<style lang="scss" scoped></style>
