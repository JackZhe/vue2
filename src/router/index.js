
import VueRouter from "vue-router";
import Vue from 'vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
];
const router = new VueRouter({
  routes,
});
export default router;
