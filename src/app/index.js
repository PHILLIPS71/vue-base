import Vue from 'vue';
import VueRouter from 'router';
import router from './routes';

Vue.use(VueRouter);
const app = new Vue({ router }).$mount('#app');