import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import LibraryList from './pages/LibraryList.vue';
import AboutUs from './pages/AboutUs.vue';
// import SingleProject from './pages/SingleProject.vue';


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
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    // {
    //   path: '/projects/:slug',
    //   name: 'singleProject',
    //   component: SingleProject
    // },

  ]
});



export { router };