import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _04eb4530 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _75f81444 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _544d5212 = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _c16bef64 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _1c047031 = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
const _7e2d027f = () => interopDefault(import('../pages/uniform/index.vue' /* webpackChunkName: "pages/uniform/index" */))
const _e5fc99c0 = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _744172fc = () => interopDefault(import('../pages/events/_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _7c766137 = () => interopDefault(import('../pages/uniform/_slug.vue' /* webpackChunkName: "pages/uniform/_slug" */))
const _254ea51a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3f62b783 = () => interopDefault(import('../pages/_categories.vue' /* webpackChunkName: "pages/_categories" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _04eb4530,
    name: "contact"
  }, {
    path: "/events",
    component: _75f81444,
    name: "events"
  }, {
    path: "/join",
    component: _544d5212,
    name: "join"
  }, {
    path: "/payment",
    component: _c16bef64,
    name: "payment"
  }, {
    path: "/thanks",
    component: _1c047031,
    name: "thanks"
  }, {
    path: "/uniform",
    component: _7e2d027f,
    name: "uniform"
  }, {
    path: "/articles/:slug?",
    component: _e5fc99c0,
    name: "articles-slug"
  }, {
    path: "/events/:slug",
    component: _744172fc,
    name: "events-slug"
  }, {
    path: "/uniform/:slug",
    component: _7c766137,
    name: "uniform-slug"
  }, {
    path: "/",
    component: _254ea51a,
    name: "index"
  }, {
    path: "/:categories",
    component: _3f62b783,
    name: "categories"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
