<template>

  <div id="app">
  
      <div class="header">
        <img src="./assets/logo_carb.png">
        <h1>Asados Carbón de Leña</h1>
        <nav>
          <button v-on:click="init" v-if="is_auth">Inicio</button>
          <button v-on:click="getCliente" v-if="is_auth" > Cliente </button>
          <button v-on:click="getInventario">Inventario</button>
          <button v-if="is_auth">Ventas</button>
          <button v-if="is_auth">Cerrar Sesión</button>
        </nav>

      </div>
      <div class="main-component">
        <router-view></router-view>
      </div>
      <div class="footer">
        <p>Calle 48 # 27-01. Barrancabermeja, Colombia<br>
          Teléfonos: +57 323 590 9805 - 6220238 - 6021901<br>
          E-mail: carbonlena@hotmail.com</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false
      }
    },

    methods: {

      init: function(){
        if(this.$route.name != "user"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "user", params:{ username: username }})
        }
      },

      getCliente: function(){
        if(this.$route.name != "cliente"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "cliente", params:{ username: username }})
        }
      },
      getInventario: function(){
        if(this.$route.name != "inventario"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name:"inventario", params:{username:username}
          })
        }
      }

    },

    beforeCreate: function(){
      localStorage.setItem('current_username', 'Admin')
      localStorage.setItem('isAuth', true)

      this.$router.push({name: "cliente", params:{ username: 'Admin' }})
    }
  }
</script>

<style>
  body{
    margin: 0%;
    background-image: url("./assets/carne.jpg");
    background-position: center;
  }
  .header{
    margin: 0%;
    margin-right: -3px;
    padding: 0%;
    width: 100%;
    height: 15vh;
    min-height: 100px;

    background-color: #19191a;
    color:#f5a018;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f5a018;
  }
  .header img{
    height: 95%;
    margin: 2rem
  }
  .header h1{
    width: 40%;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .header nav {
    height: 100%;
    width: 55%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 80%;
  }
  .header nav button{
    color: #E5E7E9;
    background: #19191a;
    border: 1px solid #19191a;
    border-radius: 5px;
    padding: 5px 30px;
    height: 45%;
    margin: 0.2rem;
  }
  .header nav button:hover{
    color: #19191a;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: auto;
    min-height: 80vh;
    margin: 0%;
    padding: 0%;
    margin-bottom: 0%;
    background: rgba(0,0,0,0.8);
  }
  .footer{
    margin: 0;
    padding: 0;
    margin-bottom: 0%;
    width: 100%;
    height: 13vh;
    min-height: 100px;
    background-color: #181818;
    color: #f5a018;
    border-top: 1px solid #f5a018;
    display: flex;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer p {
    width: 100%;
    height: 100%;
    justify-content: center;
    justify-items: center;
    vertical-align: middle;
    text-align: center;
    padding: 1%;
  }
</style>
