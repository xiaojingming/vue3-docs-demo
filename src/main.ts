import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './style/reset.css';
import 'vue-scroll-picker/lib/style.css';

createApp(App).use(router).mount('#app');
