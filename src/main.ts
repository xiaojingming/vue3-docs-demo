import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './style/reset.css';
import 'vue-scroll-picker/lib/style.css';
import focus from './directives/focus';

const app = createApp(App);
app.directive('focus', focus);
app.use(router).mount('#app');
