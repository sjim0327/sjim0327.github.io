export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/coolcat/myblog/docs/README.md"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/coolcat/myblog/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
  ["/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E7%AF%87%E5%8D%9A%E5%AE%A2.html", { loader: () => import(/* webpackChunkName: "我的第一篇博客.html" */"C:/Users/coolcat/myblog/docs/我的第一篇博客.md"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
