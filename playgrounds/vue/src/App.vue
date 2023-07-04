<script setup lang="ts">
import {ref} from 'vue'
const code = ref('<div>111</div>')
</script>

<template>
  <div>
    <code v-highlight>
      {{ code }}
    </code>
  </div>
</template>
