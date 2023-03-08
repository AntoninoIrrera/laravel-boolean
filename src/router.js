import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import LibraryList from './pages/LibraryList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import SingleBook from './pages/SingleBook.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryList
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/library/:id',
      name: 'singlebook',
      component: SingleBook
    },

  ]
});



export { router };