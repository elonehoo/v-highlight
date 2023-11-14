# v-highlight

> Provide highlight.js instruction operation for Vue

## Install

```bash
npm install -D @v-highlight/vue highlight.js

#or

pnpm install -D @v-highlight/vue highlight.js
```

## Usage

```ts
// main.ts
import { createApp } from 'vue'
import { VueHighlight } from '@v-highlight/vue'
import App from './App.vue'
import 'highlight.js/styles/agate.css'

const app = createApp(App)

VueHighlight.install(app)

app.mount('#app')
```

```vue
<script setup lang="ts">
import { ref } from 'vue'

const code = ref('<div>111</div>')
</script>

<template>
  <div>
    <code v-highlight>
      {{ code }}
    </code>
  </div>
</template>
```
