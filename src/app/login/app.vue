<template>
  <div class="login">
    <form action="">
      <label for="account">Account:</label>
      <input type="text" v-model="account" name="account" @keyup.enter="checkLogin">
      <label for="password">Password:</label>
      <input type="password" v-model="password" name="password" @keyup.enter="checkLogin">
      <button type="button" @click="checkLogin">Login</button>
      <a href="javascript:void(0)">Forgot</a>
    </form>
    <xt-input></xt-input>
  </div>
</template>

<script>
  import md5 from 'md5'
  import xt from 'xt'
  import {common} from 'utils'
  export default {
    data() {
      return {
        account: '',
        password: '',
        redirect: ''
      }
    },
    methods: {
      checkLogin() {
        let param = {
          value: 'SF001',
          password: md5('12345678')
        }
        xt.post('/base/acl/lts/login', param).then(data => {
          console.log(data)
          location.href = this.redirect
        }, err => {
          console.log(err)
        })
      },
      login() {
      }
    },
    created () {
      this.redirect = common.getQueryParam('redirect')
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .login {
    form{
      width:240px;
      margin:48px auto;
      input{
        display: block;
        margin:12px 0;
      }
      button{
        text-align: center;
      }
    }
  }
</style>
