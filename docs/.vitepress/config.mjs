import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vite Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: "Data Structures", link: "/data-structures/" },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "Data Structures",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/data-structures/" },
          { text: "Arrays", link: "/data-structures/arrays" },
          { text: "Linked Lists", link: "/data-structures/linked-lists" },
          { text: "Trees", link: "/data-structures/trees" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
