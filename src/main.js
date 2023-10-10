import App from './App.vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { registerPlugins } from '@/plugins'


const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(vuetify)

app.use(store)

app.mount('#app')