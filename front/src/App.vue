<script setup>
  import home from './components/home.vue'
  import search from './components/search.vue'
</script>

<template>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <div id="wrapper">
    <search />
    <home />
  </div>
</template>

<style>
.wrapper {
  font-family: 'Poppins';
  max-width: 500px;
  margin: auto;
}
</style>
