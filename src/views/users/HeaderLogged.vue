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
          <div class="text-center">
            <v-list-item link to="/">
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4> Home </h4></v-list-item-title>
            </v-list-item>
            
            <v-list-item link to="/users/profile">
              <v-list-item-icon>
                <v-icon>person</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>Profile</h4></v-list-item-title>
            </v-list-item>
    
      <v-list-item  link to="/users/myprojects">
              <v-list-item-icon>
                <v-icon>assignment</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>My Projects</h4></v-list-item-title>
              </v-list-item>
      
      <v-menu
        offset-y>
      <template v-slot:activator="{ on }">
      <v-list-item v-on="on">
              <v-list-item-icon>
                <v-icon>settings</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>Manage</h4></v-list-item-title>
              </v-list-item>
      </template>

      
       <v-list>
       <div class="text-center">
            <v-list-item link to="/admin/status">
              <v-list-item-icon>
                <v-icon>assignment</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4> Status </h4></v-list-item-title>
            </v-list-item>
            
            <v-list-item link to="/admin/account_type">
              <v-list-item-icon>
                <v-icon>assignment</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>Account Type</h4></v-list-item-title>
            </v-list-item>
            <v-list-item link to="/users/execution">
              <v-list-item-icon>
                <v-icon>assignment</v-icon>
              </v-list-item-icon>
              <v-list-item-title><h4>Default Roles</h4></v-list-item-title>
            </v-list-item>
       </div>
      </v-list>
    </v-menu>
            <v-list-item link @click="logout" >
              <v-list-item-icon>
                <v-icon>logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title> <h4>Logout</h4> </v-list-item-title>
            </v-list-item>
            </div>
          </v-list>
        </v-navigation-drawer>
</template>



<script>
export default {
    name:'HeaderLogged',
    methods:{
        logout: function(){
                
          localStorage.removeItem('auth');
            this.$router.push('/login');
        }
    },
     data () {
      return { 
        items: [
        { title: 'inicio' },
        { title: 'Planeación' },
        { title: 'Ejecución' },
        { title: 'Control' },
        { title: 'Cierre' },
      ],
      }
    },

}
</script>