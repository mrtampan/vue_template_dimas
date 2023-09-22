import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/template/libs/jquery/dist/jquery.min.js";
import "./assets/template/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/template/js/sidebarmenu.js";
import "./assets/template/js/app.min.js";
import "./assets/template/libs/apexcharts/dist/apexcharts.min.js";
// import ApexCharts from "./assets/template/libs/apexcharts/dist/apexcharts.min.js";
import "./assets/template/libs/simplebar/dist/simplebar.js";
import "./assets/template/js/dashboard.js";
import "./assets/template/css/styles.min.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
const app = createApp(App);

app.use(router);

app.config.globalProperties.$api = "http://localhost:8000";
app.use(VueToast);

app.mount("#app");
