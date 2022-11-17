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
  {
    path: '/documentation/rendering-lists',
    name: 'RenderingLists',
    components: {
      default: () => import('@/views/subjects/RenderingListsLesson.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),
      TopBar: () => import('@/components/TopBar.vue'),
    }
  },
  //********** Components **********
  {
    path: '/documentation/components/banner-example',
    name: 'BannerComponentExample',
    components: {
      default: () => import('@/views/componentExamples/BannerExample.vue'),
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
