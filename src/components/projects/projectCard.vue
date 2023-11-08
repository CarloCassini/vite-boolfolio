<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class="col-8">
        {{ project.name }}
      </div>
      <div class="btn-detail col-3 text-center">
        <router-link
          class="router-link-color"
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
        >
          <font-awesome-icon icon="fa-solid fa-eye" />
        </router-link>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ project.description }}</li>

      <!-- collego i type -->
      <!-- ricorda: per bindare in vue usa solo una parentesi grafa
        gli attributi dell css sono senza lineette, attaccati e in camelcase -->
      <li
        class="list-group-item"
        :style="{ backgroundColor: project.type.color }"
        v-if="project.type_id"
      >
        <router-link
          :to="{
            name: 'portfolio-by-type',
            params: { type_id: project.type.id },
          }"
        >
          <!-- todo: sono a lezione 86B minuto 00:14 -->
          type: {{ project.type.label }}
        </router-link>
      </li>

      <!-- collego le tecnologie -->
      <li class="list-group-item" v-if="project.tecnologies[0]">
        <div class="fw-bold">tecnologie:</div>
        <div
          class="div"
          v-for="tecnology in project.tecnologies"
          :style="{ backgroundColor: tecnology.color }"
        >
          {{ tecnology.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
