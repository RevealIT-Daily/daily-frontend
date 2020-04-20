<template>
    <div>
        <h1>Logueado</h1>
         <v-btn rounded color="#1779ba" @click="logout" class="mr-6">
      <v-icon  color="white">person_outline</v-icon>
      <span  class="white--text">Logout </span>
      </v-btn>
    </div>
</template>


<script>
export default {
    name:'HeaderLogued',
    methods:{
        logout: function(){
            localStorage.removeItem('auth');
            this.$router.push('/');
        }
    }

}
</script>