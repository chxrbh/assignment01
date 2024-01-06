<template>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/search.css' rel='stylesheet'>
  <div class="body">
    <div class="wrapper">
      <div class="input-box">
        <input type="text" v-model="inputName" placeholder="search">
        <button v-on:click="search()" class="search-button">
          <i class="gg-search"></i>
        </button>
      </div>
      <div class="result">
        <div class="err-box">
          <h2 v-if="list == null" class="check">404 user not found</h2>
        </div>
        <p v-for="item in list" :key="item._id" class="userInfo">
          .id : {{ item._id }}
          <br>name : {{ item.name }}
          <br>age : {{ item.age }}
          <br>status : {{ item.status }}
          <br>date : {{ item.date }}

        <div class="update-box">
          <!-- <button v-on:click="updateUser(item._id)" class="update-button">update user</button> -->
          <button v-on:click="updateStatus(item._id, item.status)" class="update-button">update status</button>
          <button v-on:click="deleteUser(item._id)" class="update-button">delete user</button>
        </div>
        </p>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data() {
    return {
      inputName: '',
      list: [],
      empty: false,
    }
  },

  async mounted() {
    let result = await axios.get('http://localhost:8000/users/search')
    console.warn(result.data)
    this.list = result.data
  },   

  methods: {
    async search() {
      await axios.get(`http://localhost:8000/users/search/${this.inputName}`)
        .then(
          (result) => {
            console.log(result.data)
            this.list = result.data
          })
        .catch((err) => {
          console.log(err)
          if (err.response.status == 404) {
            this.list = null
          } else {
            console.log(err)
          }
        })

    },
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
    // async updateUser(id) {
    //   let result = await axios.patch(`http://localhost:8000/users/${id}`, {
    //     name: this.user.name,
    //     age: this.user.age,
    //   })
    //   window.location.reload()
    //   console.warn('user update succesfully')
    // },
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

<style scoped>
.wrapper {
  width: 60%;
  color: #fff;
  padding: 30px 30px;
}

.wrapper .input-box {
  position: relative;
  width: 100%;
  height: 40px;
  margin: 15px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: #FFF;
  border: 3px solid #FA7A53;
  border-radius: 40px;
  padding: 15px 45px 15px 15px;
  text-align: center;
  font-weight: 600;
  font-size: medium;
  color: #bbd444;
}

.input-box input::placeholder {
  color: #FBD743;
}

.input-box .search-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 40px;
}

.search-button {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  color: #FA7A53;
}

.input-box i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -35%);
}

.wrapper .result {
  width: 100%;
  height: 400px;
  margin: 20px 0;
}

.result {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 15px 0 15px 0;
  overflow: scroll
}

.result::-webkit-scrollbar {
  display: none;
}

.result .userInfo {
  width: 100%;
  border: 2px solid #FAF4E4;
  border-radius: 15px;
  padding: 15px;
  max-height: 100%;
  margin: 10px 0;
  color: black;
}

.update-box {
  width: 100%;
  height: 35px;
  margin: 5px 0px 0px 0px;
}

.update-box .update-button {
  height: 100%;
}

.update-button {
  cursor: pointer;
  border-radius: 40px;
  padding: 5px 15px;
  text-align: center;
  margin: 0 6px 0 0;
  background-color: #bbd444;
  border: 0;
  color: #fff;
  font-weight: 600;
}

.update-button:hover {
  background-color: #FBD743;
}

.err-box {
  text-align: center;
  color: #FA7A53
}
</style>