import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  // 如果你的站点将部署在 https://<USERNAME>.github.io，可以省略 base 选项
  // 如果部署在 https://<USERNAME>.github.io/<REPO>，则设置 base: '/<REPO>/'
  base: '/',
})

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'sjim0327 的博客',
  description: '记录技术成长的点点滴滴',
  
  theme: defaultTheme({
    // 导航栏 Logo
    logo: '/images/logo.png',
    
    // 顶部导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/sjim0327' }
    ],
    
    // 侧边栏
    sidebar: {
      '/blog/': [
        {
          text: '前端',
          collapsible: true,
          children: [
            '/blog/frontend/vue.md',
            '/blog/frontend/react.md'
          ]
        },
        {
          text: '后端',
          collapsible: true,
          children: [
            '/blog/backend/node.md'
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sjim0327' }
    ],
    
    // 最后更新时间
    lastUpdated: true,
    
    // 贡献者
    contributors: true,
    
    // 编辑此页链接
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页'
  })
})