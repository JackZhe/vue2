
// import VueRouter from "vue-router";
import VueRouter from "../plugins/router";
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
const router = new VueRouter({
  mode: 'hash',
  routes,
});
export default router;
