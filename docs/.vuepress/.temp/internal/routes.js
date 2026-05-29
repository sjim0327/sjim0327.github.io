export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/jim chen/vuepress-blog/docs/README.md"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/jim chen/vuepress-blog/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
