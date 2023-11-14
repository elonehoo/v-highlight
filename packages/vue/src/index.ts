import type { App } from 'vue'
import hljs from 'highlight.js'

const VueHighlight = {
  install(vue: App) {
    vue.directive('highlight', (el: HTMLElement, binding) => {
      highlight(el, binding)
    })
  },
}

function highlight(el: HTMLElement, binding: any) {
  if (el.tagName !== 'CODE') {
    const blocks = el.querySelectorAll('code')

    blocks.forEach((block) => {
      highlight(block, binding)
    })
  }
  else {
    if (typeof binding.value === 'string')
      el.textContent = binding.value

    hljs.highlightElement(el)
  }
}

export {
  VueHighlight,
  highlight,
}
