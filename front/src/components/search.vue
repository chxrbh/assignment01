<template>
  <input type="text" v-model="inputName" class="inputBox" placeholder="search by name">
  <button v-on:click="search()" class="button-13">search</button>
  <p v-for="item in list" :key="item._id" class="user">
    <br>.id : {{ item._id }}
    <br>name : {{ item.name }}
    <br>age : {{ item.age }}
    <br>status : {{ item.status }}
    <br>date : {{ item.date }}
  </p>
</template>

<script>
import axios from 'axios'
export default {

  name: 'search',
  data() {
    return {
      inputName: '',
      list: []
    }
  },
  methods: {
    async search() {
      let result = await axios.get(`http://localhost:8000/users/search/${this.inputName}`)
      console.warn(result.data)
      this.list = result.data
    }
  }
}
</script>

<style></style>