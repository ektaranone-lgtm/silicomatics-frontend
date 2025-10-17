import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Handle GitHub Pages SPA redirect
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== location.href) {
  router.replace(redirect.split('/silicomatics-frontend')[1] || '/')
}

const app = createApp(App)
app.use(router)
app.mount('#app')
