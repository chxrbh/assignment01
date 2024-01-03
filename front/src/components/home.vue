<template>
  <p class="user">
    name <input type="text" v-model="user.name" class="inputBox" placeholder="enter your name">
    <br>age <input type="text" v-model="user.age" class="inputBox" placeholder="enter your age">
    <br><button v-on:click="addUser()" class="button-13">submit</button>
  </p>

  <p v-for="item in list" :key="item._id" class="user">
    <br>id : {{ item._id }}
    <br>name : {{ item.name }}
    <br>age : {{ item.age }}
    <br>status : {{ item.status }}
    <br><button v-on:click="updateUser(item._id)" class="button-13">update user</button>
    <button v-on:click="updateStatus(item._id, item.status)" class="button-13">update status</button>
    <button v-on:click="deleteUser(item._id)" class="button-13">delete</button>
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
      console.warn('delete succesfully')
    },
    async updateUser(id) {
      let result = await axios.patch(`http://localhost:8000/users/${id}`, {
        name: this.user.name,
        age: this.user.age,
      })
      window.location.reload()
      console.warn('user update succesfully')
    },
    async updateStatus(id, status) {
      status = !status
      let result = await axios.patch(`http://localhost:8000/users/${id}`, {
        status: status
      })
      window.location.reload()
      console.warn('status update succesfully')

    }
  },
}

</script>



<style>
.user {
  padding: 10px;
  font-family: 'Poppins';
  color: rgb(115, 62, 31);
}

.inputBox {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  line-height: 23px;
  padding: 0 10px 0 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 300px;
}

.button-13 {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  line-height: 23px;
  padding: 0 10px 0 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
}

.button-13:hover {
  background-color: #f7fafa;
}

.button-13:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}

.template {
  font-family: 'Poppins';
  /* max-width: 500px;
  margin: auto; */
}
</style>
