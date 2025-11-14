import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        mediumZoom('.mermaid svg', { background: 'rgba(0,0,0,0.8)' })
      }
    }
  }
}
