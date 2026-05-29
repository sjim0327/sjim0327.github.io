import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'sjim0327 的博客',
  description: '记录思考，分享技术',
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/sjim0327' }
    ]
  })
})