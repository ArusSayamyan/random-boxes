<template>
  <header class="header">
    <div class="header__btnContent">
      <button class="header__btn" @click="addNewCard">add card</button>
      <button class="header__btn" @click="sortCards">sort cards</button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cards = computed(() => {
  return store.getters.getCard
})

const addNewCard = () => {
  let random = Math.floor(Math.random() * 1000)
  store.commit('addNewCard', random)
  sessionStorage.setItem('cards', JSON.stringify(cards.value))
}

const sortCards = () => {
  let sortedCards = store.getters.getCard.sort((a, b) => a - b);
  store.commit('sortCards', sortedCards)
  sessionStorage.setItem('cards', JSON.stringify(cards.value))
}
</script>

<style scoped lang="scss" src="../scss/theHeader.scss">
</style>
