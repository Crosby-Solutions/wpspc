import { uuidv1 } from 'vue-uuid'
export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  async postStripeFunction ({ getters, commit }, payload) {
    commit('updateCartUI', 'loading')

    try {
      await this.$axios
        .post(
          'https://willettonprimarypandc.netlify.com/.netlify/functions/stripePayment',
          {
            stripeEmail: payload.stripeEmail,
            stripeAmt: Math.floor(getters.cartTotal * 100), // it expects the price in cents
            stripeToken: 'tok_visa', // testing token, later we would use payload.data.token
            stripeIdempotency: uuidv1() // we use this library to create a unique id
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((res) => {
          if (res.status === 200) {
            commit('updateCartUI', 'success')
            setTimeout(() => commit('clearCart'), 3000)
          }
        })
    } catch { }
  }
}
