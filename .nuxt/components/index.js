import { wrapFunctional } from './utils'

export { default as CardArticle } from '../../components/CardArticle.vue'
export { default as CrosbySolutions } from '../../components/CrosbySolutions.vue'
export { default as FBEmbed } from '../../components/FBEmbed.vue'
export { default as FBRootEmbed } from '../../components/FBRootEmbed.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as NavBar } from '../../components/NavBar.vue'

export const LazyCardArticle = import('../../components/CardArticle.vue' /* webpackChunkName: "components/card-article" */).then(c => wrapFunctional(c.default || c))
export const LazyCrosbySolutions = import('../../components/CrosbySolutions.vue' /* webpackChunkName: "components/crosby-solutions" */).then(c => wrapFunctional(c.default || c))
export const LazyFBEmbed = import('../../components/FBEmbed.vue' /* webpackChunkName: "components/f-b-embed" */).then(c => wrapFunctional(c.default || c))
export const LazyFBRootEmbed = import('../../components/FBRootEmbed.vue' /* webpackChunkName: "components/f-b-root-embed" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
