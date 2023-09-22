<template>
  <!-- <indexBE /> -->
  <router-view />
</template>
<script>
import indexBE from "./components/componentBE/template/Index.vue";
export default {
  name: "App",
  components: {
    indexBE,
  },
};
</script>

<style>
.active-link {
  background-color: #dfe3ec;
  color: #fff;
}

/* CSS untuk menampilkan/menyembunyikan sidebar */

.left-sidebar {
  transform: translateX(
    -10
  ); /* Nilai yang lebih besar untuk menyembunyikan sidebar */
  transition: transform 0.3s ease;
}
</style>
