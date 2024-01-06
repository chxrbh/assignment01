<template>
  <div class="body">
    <div class="wrapper">
      <form action="">
        <h1>Hello !</h1>

        <div class="input-box">
          <input type="text" v-model="user.name" placeholder="enter your name">
        </div>
        <div class="input-box">
          <input type="number" v-model.number="user.age" placeholder="enter your age">
        </div>

        <button v-on:click="addUser()">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "home",
  data() {
    return {
      user: {
        name: '',
        age: ''
      },
    }
  },
  // async mounted() {
  //   let result = await axios.get('http://localhost:8000/users/search')
  //   //console.warn(result.data)
  //   this.list = result.data
  // },
  methods: {
    async addUser() {
      let result = await axios.post('http://localhost:8000/users', {
        name: this.user.name,
        age: this.user.age
      })
      console.alert(result)
      // window.location.reload()
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 329px;
  background: #FA7A53;
  color: #fff;
  border-radius: 15px;
  padding: 93px 58px;
}

.wrapper h1 {
  font-size: 32px;
  text-align: center;
}

.wrapper .input-box {
  width: 100%;
  height: 40px;
  /* background-color: greenyellow; */
  margin: 15px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: #FFF;
  border: 3px solid #FAF4E4;
  border-radius: 40px;
  padding: 15px;
}

.input-box input::placeholder {
  color: #bbd444;
}

.wrapper button {
  width: 100%;
  height: 40px;
  background: #FBD743;
  border: none;
  border-radius: 40px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
}

.wrapper button:hover {
  border-color: #faf4e4;
  border: 2px #FAF4E4 solid ;
  background-color: #bbd444;
}
</style>