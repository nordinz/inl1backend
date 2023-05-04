import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Chat from '../views/ChatView.vue';
import AllBooks from '../views/AllBooksView.vue';
import UpdateView from '../views/UpdateView.vue';

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
      path: '/search',
      name: 'books',
      component: AllBooks,
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
    },
  ],
});

export default router;
