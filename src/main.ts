import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/vue-router';
import store from './plugins/vuex';
import ElementPlus from './plugins/element-plus';
import './plugins/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import i18n from './plugins/vue-i18n';

const app = createApp(App).use(store).use(router).use(i18n).use(ElementPlus);

router.isReady().then(() => {
    app.mount('#app');
});
