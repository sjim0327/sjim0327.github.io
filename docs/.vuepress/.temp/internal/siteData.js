export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"sjim0327 的博客\",\"description\":\"记录思考，分享技术\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"sjim0327 的博客\",\"description\":\"记录思考，分享技术\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
