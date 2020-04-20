<template>
<v-app>
  <div v-if="session">
<HeaderLogged></HeaderLogged>
  </div>
  <div v-else>
<Header></Header>
  </div>
    
    
    <v-content>
    <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      session:Boolean
    }
  },
  updated(){
    console.log('updates');
    this.session=this.getSession();
    console.log('App',this.session);
  },
  components:{
    Header: () => import('./views/Header'),
    HeaderLogged: () => import('./views/users/Header')
  },
  methods:{
    getSession:function(){
      return localStorage.getItem('auth');
    }
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

 a:link, a:visited, a:active {
            text-decoration:none;
        }
</style>
