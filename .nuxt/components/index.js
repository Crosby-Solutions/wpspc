import { wrapFunctional } from './utils'

export { default as CardArticle } from '../../components/CardArticle.vue'
export { default as CrosbySolutions } from '../../components/CrosbySolutions.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'

export const LazyCardArticle = import('../../components/CardArticle.vue' /* webpackChunkName: "components/card-article" */).then(c => wrapFunctional(c.default || c))
export const LazyCrosbySolutions = import('../../components/CrosbySolutions.vue' /* webpackChunkName: "components/crosby-solutions" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
