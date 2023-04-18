<template>
  <div class="container">
    <div class="container__main">
      <the-header></the-header>
      <main class="container__mainContent">
        <div class="container__cards">
          <new-card></new-card>
        </div>
      </main>
      <the-footer></the-footer>
    </div>
    <aside class="container__aside">
      <p class="container__instruction">
        Press the "add card" button to add tne new Card. Use the "sort cards"
        button to sort the Cards by the increase. Press an X icon on the top
        right to delete them.
      </p>
    </aside>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import NewCard from '@/components/NewCard'
</script>

<style lang="scss" src="./scss/global.scss"></style>
