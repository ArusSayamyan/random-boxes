import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
const app = createApp(App)

const store = createStore({
  state() {
    return {
      cards: [],
    }
  },
  mutations: {
    restoreCards(state, cards) {
      state.cards = cards || []
    },
    addNewCard(state, payload) {
      state.cards.push(payload)
    },

    sortCards(state, payload) {
      state.cards = payload
    },

    removeCard(state, payload) {
      state.cards = payload()
    },
  },
  getters: {
    getCard(state) {
      return state.cards
    },
  },
})

app.use(store)

app.mount('#app')
