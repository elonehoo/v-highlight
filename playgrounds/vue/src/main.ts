import { VueHighlight } from '@v-highlight/vue'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'highlight.js/styles/agate.css'

const app = createApp(App)

VueHighlight.install(app)

app.mount('#app')
