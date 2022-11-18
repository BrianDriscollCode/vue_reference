import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      NavBar: () => import('@/components/NavBar.vue'),
      default: () => import('@/views/HomeView.vue'),
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      NavBar: () => import('@/components/NavBar.vue'),
      default: () => import('@/views/AboutView.vue'),
    }
  },
  {
    path: '/documentation',
    name: 'documentation',
    components: {
      default: () => import('@/views/DocumentationView.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),
      TopBar: () => import('@/components/TopBar.vue'),
    }
  },
  //********** Documentation Subjects **********
  //uses dynamic route @param: documentationPage
  {
    path: '/documentation/:documentationPage',
    name: 'documentationPages',
    components: {
      default: () => import('@/views/DocumentationView.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),
      TopBar: () => import('@/components/TopBar.vue'),
    }
  },
  //********** Components **********
  //uses dynamic route @param: documentationPage
  {
    path: '/documentation/components/:documentationPage',
    name: 'componentExamples',
    components: {
      default: () => import('@/views/DocumentationView.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),
      TopBar: () => import('@/components/TopBar.vue'),
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
