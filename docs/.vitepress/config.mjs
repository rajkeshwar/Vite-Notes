import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
const vitepressConfig =  defineConfig({
  title: "Vite Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: "Data Structures", link: "/data-structures/" },
      { text: "Core Java", link: "/core-java/" },
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "Data Structures",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/data-structures/" },
          { text: "Arrays", link: "/data-structures/arrays" },
          { text: "Linked Lists", link: "/data-structures/linked-lists" },
          { text: "Trees", link: "/data-structures/trees" },
        ],
      },
      {
        text: "Core Java",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/core-java/" },
          { text: "Java Language", link: "/core-java/m2-java-language" },
          { text: "Java OOP", link: "/core-java/m3-java-oop" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

// https://github.com/emersonbottero/vitepress-plugin-mermaid
export default withMermaid(vitepressConfig);