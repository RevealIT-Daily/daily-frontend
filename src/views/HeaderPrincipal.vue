<template>
    <div>
         <v-row>
     <v-toolbar color="primary">
      <v-toolbar-title class="ml-5 mt-3">
        <img src='../assets/logoEmpresa.jpg' width="230" height="45">
      </v-toolbar-title >
       <v-btn text color="white" class="ml-5"  x-large to="/">
       Home
      </v-btn>
      <v-btn text color="white" x-large class="ml-6" to="/about">
      About
      </v-btn>
      <v-btn text  color="white" x-large class="ml-6">
      Corportive
      </v-btn>
      <v-btn text  color="white" x-large class="ml-6">
      Plans
      </v-btn>
       

    <v-spacer></v-spacer>
      <v-btn rounded color="#1779ba" class="mr-6" to="/login">
      <v-icon  color="white">person_outline</v-icon>
      <span  class="white--text">Login </span>
      </v-btn>
    </v-toolbar>
    </v-row>
    </div>
    
</template>

<script>
export default {
    name:'headerprincipal'
}
</script>
<style scoped>
#sheetHeight{
    width: 100%;
}


</style>