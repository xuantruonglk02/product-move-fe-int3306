import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/vue-router';
import store from './plugins/vuex';
import ElementPlus from './plugins/element-plus';
import './plugins/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';

const app = createApp(App).use(store).use(router).use(ElementPlus);

router.isReady().then(() => {
    app.mount('#app');
});
