<template>
<v-app>
  <v-row>
     <v-toolbar color="primary">
      <v-toolbar-title class="ml-6">
        Logobussines
      </v-toolbar-title>
       
       <router-link to="/">
       <v-btn text color="white" x-large class="ml-6">
       Home
      </v-btn>
      </router-link>
      <v-btn text color="white" x-large class="ml-6">
      About
      </v-btn>
      <v-btn text  color="white" x-large class="ml-6">
      Corportive
      </v-btn>
      <v-btn text  color="white" x-large class="ml-6">
      Plans
      </v-btn>

    <v-spacer></v-spacer>
      <v-btn rounded color="#1779ba" class="mr-6">
        <router-link to="/login">
      <v-icon  color="white">person_outline</v-icon>
      <span  class="white--text">Login </span>
        </router-link>
      </v-btn>

    </v-toolbar>
    </v-row> 
   
    <v-content>
    <router-view/>
    </v-content>
  </v-app>
</template>

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
