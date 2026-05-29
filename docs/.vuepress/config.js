import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  // 打包器：使用 Vite（也可以换成 webpack，但推荐 Vite）
  bundler: viteBundler(),
  
  // 主题：使用默认主题
  theme: defaultTheme(),
  
  // 站点配置
  lang: 'zh-CN',
  title: 'sjim0327 的博客',
  description: '记录思考，分享技术',
  
  // 主题配置
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/sjim0327' }
    ]
  })
})