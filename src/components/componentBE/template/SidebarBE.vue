<template>
  <!-- Sidebar Start -->
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <a href="./index.html" class="text-nowrap logo-img">
          <img
            src="../../../assets/template/images/logos/dark-logo.svg"
            width="180"
            alt=""
          />
        </a>
        <div
          class="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item">
            <router-link
              class="sidebar-link"
              to="/dashboard"
              exact
              aria-expanded="false"
              active-class="active-link"
            >
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">CMS</span>
          </li>
          <li class="sidebar-item">
            <router-link
              class="sidebar-link"
              to="/product"
              exact
              aria-expanded="false"
              active-class="active-link"
            >
              <span>
                <i class="ti ti-article"></i>
              </span>
              <span class="hide-menu">Product</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
  <!--  Sidebar End -->
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
