<template>
<v-app id="app">
  <div v-if="session === null">
        <HeaderPrincipal></HeaderPrincipal>
      
      <v-content>
    <router-view/>
    </v-content>
  </div>

   <div v-else>
    <v-row>
        <HeaderLogged ></HeaderLogged>
      <v-col cols="xs-3  sm-4  md-8 pa-0 pl-3">
        <v-row>
    <v-toolbar class="primary">
    <v-spacer></v-spacer>
     <v-toolbar-title class="mr-10 mt-3">
        <img src='./assets/logoEmpresa.jpg' width="230" height="40  ">
      </v-toolbar-title>
    </v-toolbar>
        </v-row>
        <v-row>
          <v-col cols="xs-3  sm-5  md-8">
          <v-content>
              <router-view/>
              </v-content>
          </v-col>
     
        </v-row>
      </v-col>
    </v-row>
  </div>
  </v-app>
</template>

<script>
import HeaderPrincipal from './views/HeaderPrincipal';
import HeaderLogged from './views/users/HeaderLogged';
export default {
  name:'App',
  data(){
    return{
      session:Boolean
    }
  },
  created(){
     console.log(localStorage.getItem('auth'));
    this.session=localStorage.getItem('auth');
    console.log('App',this.session);
  },
  updated(){
    console.log(localStorage.getItem('auth'));
    this.session=localStorage.getItem('auth');
    console.log('App',this.session);
  },
  components:{
    HeaderPrincipal,
    HeaderLogged
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}



#nav a.router-link-exact-active{
  background-color: #1779ba;
}

 a:link, a:visited, a:active {
            text-decoration:none;
        }
</style>
