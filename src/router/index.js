import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Dashboard from '../views/Dashboard.vue';
import Cards from '../views/Cards.vue';
import Exchange from '../views/Exchange.vue';
import Setting from '../views/Setting.vue';

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cards', name: 'Cards', component: Cards },
  { path: '/exchange', name: 'Exchange', component: Exchange },
  { path: '/setting', name: 'Setting', component: Setting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
