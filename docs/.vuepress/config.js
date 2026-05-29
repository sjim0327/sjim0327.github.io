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