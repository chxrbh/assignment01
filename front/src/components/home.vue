<template>
  <br>name <input type="text" v-model="user.name" class="username">
  <br>age<input type="text" v-model="user.age" class="subject">
  <br><button v-on:click="addUser()">submit</button>
  <br><button v-on:click="allform = []">clear</button>

  <p v-for="item in list" :key="item._id">
    {{ item._id }} : {{ item.name }} : {{ item.age }}
    <button v-on:click="updateUser(item._id)">update</button>
    <button v-on:click="deleteUser(item._id)">delete</button>
  </p>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      user: {
        name: '',
        age: ''
      },
      list: []
      // responseFromServer: undefined
      
    }
  },
  async mounted() {
    let result = await axios.get('http://localhost:8000/users')
    //console.warn(result.data)
    this.list = result.data
    
  },
  methods: {
    async addUser() {
      let result = await axios.post('http://localhost:8000/users', {
        name: this.user.name,
        age: this.user.age
      })
      window.location.reload()
      console.warn(result)
    },
    async deleteUser(id) {
      let result = await axios.delete(`http://localhost:8000/users/${id}`)
      window.location.reload()
    },
    async updateUser(id) {
      let result = await axios.patch(`http://localhost:8000/users/${id}`, {
        name: this.user.name,
        age: this.user.age
      })
      window.location.reload()
    }
    },
  }

</script>



<style scoped></style>
