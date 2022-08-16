import MagazineView from '@/views/MagazineView.vue';
import NewsViewVue from '@/views/NewsView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import MagazineEditView from '@/views/MagazineEditView.vue';
import HomeView from '../views/HomeView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/magazine',
      name: 'magazine',
      component: MagazineView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsViewVue,
    },
    {
      path: '/magazine/:id',
      name: 'editMagazine',
      component: MagazineEditView,
    },
  ],
});
