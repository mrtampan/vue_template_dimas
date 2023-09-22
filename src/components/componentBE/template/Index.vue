<template>
  <div
    class="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin6"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed">
    <sidebarBEComponent />
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <navbarBEComponent />
      <div class="container-fluid">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import sidebarBEComponent from "./SidebarBE.vue";
import footerBEComponent from "./FooterBE.vue";
import navbarBEComponent from "./Navbar.vue";

export default {
  name: "indexBE",
  components: {
    sidebarBEComponent,
    footerBEComponent,
    navbarBEComponent,
  },
};
</script>
