import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import highlightJS from "highlight.js"


createApp(App).use(store).use(router).use(highlightJS).mount('#app')



