import { createApp } from 'vue'
import './style.css'
import { VueHighlight } from '@v-highlight/vue'
import App from './App.vue'
import 'highlight.js/styles/agate.css'

const app = createApp(App)

VueHighlight.install(app)

app.mount('#app')
