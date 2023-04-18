<template>
  <div class="card" v-for="card in cards" :key="card" :id="card">
    <img src="@/assets/remove.svg" class="card__remove" @click="removeCard" />
    <p class="card__number">{{ card }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cards = computed(() => {
  return store.getters.getCard
})

const removeCard = (event) => {
  store.commit('removeCard', () => {
    return cards.value.filter(
      (item) => item !== +event.target.parentNode.getAttribute('id')
    )
  })
  sessionStorage.setItem('cards', JSON.stringify(cards.value))
}
onMounted(() => {
  store.commit('restoreCards', JSON.parse(sessionStorage.getItem('cards')))
})
</script>

<style scoped lang="scss" src="../scss/newCard.scss">

</style>
