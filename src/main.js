import './assets/styles/styles.css'
import './assets/styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the FontAwesome CSS file
import './assets/css/all.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
