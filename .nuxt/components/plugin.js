import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CardArticle: () => import('../../components/CardArticle.vue' /* webpackChunkName: "components/card-article" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NavBar: () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
