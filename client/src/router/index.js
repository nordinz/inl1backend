import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Chat from '../views/ChatView.vue';
import AllBooks from '../views/AllBooksView.vue';
import CreateView from '../views/CreateView.vue';
import UpdateView from '../views/UpdateView.vue';
import SearchView from '../views/SearchView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
    {
      path: '/all',
      name: 'books',
      component: AllBooks,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
  ],
});

export default router;
