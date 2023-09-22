import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/template/css/styles.min.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const app = createApp(App);

app.use(router);

app.config.globalProperties.$api = 'https://anandadimmasbudiarto.my.id/kuliner';
app.use(VueToast);

app.mount('#app');
