import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CardArticle: () => import('../../components/CardArticle.vue' /* webpackChunkName: "components/card-article" */).then(c => wrapFunctional(c.default || c)),
  CrosbySolutions: () => import('../../components/CrosbySolutions.vue' /* webpackChunkName: "components/crosby-solutions" */).then(c => wrapFunctional(c.default || c)),
  FBEmbed: () => import('../../components/FBEmbed.vue' /* webpackChunkName: "components/f-b-embed" */).then(c => wrapFunctional(c.default || c)),
  FBRootEmbed: () => import('../../components/FBRootEmbed.vue' /* webpackChunkName: "components/f-b-root-embed" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NavBar: () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
