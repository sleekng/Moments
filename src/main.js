import './assets/styles/styles.css'
import './assets/styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Axios
import axios from 'axios'

// Import the FontAwesome CSS file
import './assets/css/all.css';

// Create your Vue app instance
const app = createApp(App)

// Make Axios globally available
app.config.globalProperties.$axios = axios

// Use the router
app.use(router)

// Mount the app to the DOM
app.mount('#app')
