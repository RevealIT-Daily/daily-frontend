<template >
        <v-navigation-drawer
          permanent
          expand-on-hover
          height="100vh"
          class="primary"
          
        >
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            nav
            dense
          >
          
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4> Home </h4></v-list-item-title>
            </v-list-item>
            <router-link to="/users/profile">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>person</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>Profile</h4></v-list-item-title>
            </v-list-item>
            </router-link>
            <v-list-item link @click="logout">
              <v-list-item-icon>
                <v-icon>logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title> <h4>Logout</h4> </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>



<script>
export default {
    name:'HeaderLogged',
    methods:{
        logout: function(){
            console.log('Aqui entra',this.$session);
          localStorage.removeItem('auth');
            this.$router.push('/login');
        }
    },
     data () {
      return {
        // items: [
        //   { title: 'Home', icon: 'dashboard' },
        //   { title: 'About', icon: 'question_answer' },
        //   { title: 'Logout', icon: 'logout' },
        // ],
      }
    },

}
</script>