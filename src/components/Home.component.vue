<template>
  <v-container>
    <v-layout align-center column>
      <v-flex xs6>
        <br>
      <h1 class="teal--text display-1">Administrar proyectos nunca fue</h1>
      <h1 class="teal--text display-1">TAN FÁCIL</h1>
       </v-flex>
   
    <v-container>  
    <v-row class="justify-center">
       <v-flex xs1 sm3>
      <v-card>
        <v-container>
        <v-card-title class="primary">
          <v-flex xs12 align-end flexbox>
          <span class="headline white--text">Básico</span>
            </v-flex>
          </v-card-title>
        </v-container>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                
                  <span class="headline bluedarken--text">Gratis</span>
              
         <v-card-text class="left">
          <p class="subtitle-1 primary--text"><v-icon  color="primary" >check_circle</v-icon>Gestión de 2 proyectos</p>
         <p class="subtitle-1 primary--text"><v-icon  color="primary">check_circle</v-icon>5 integrantes por proyecto  </p>
         <p class="subtitle-1 primary--text"><v-icon  color="primary">check_circle</v-icon>Asignación de 10 tareas por fase</p>
       
        </v-card-text>
        <br>
        <v-card-actions class="justify-center">
          <v-btn  class="ma-2" outlined color="bluedarken">Adquirir</v-btn>
        </v-card-actions>
        <br>
        
    </v-flex>
                </v-layout>
          </v-container>
    
      </v-card>
      </v-flex>
      
         <v-flex xs2 sm3>
      <v-card>
        <v-container>
        <v-card-title class="bluedarken">
          <v-flex xs12 align-end flexbox>
          <span class="headline white--text">Estándar</span>
            </v-flex>
          </v-card-title>
        </v-container>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline bluedarken--text">$ 70.00 MX</span><br>
                  <span class="bluedarken--text">Usuario / Mes</span>
              
         <v-card-text class="justify">
          <p class="subtitle-1 bluedarken--text"><v-icon  color="bluedarken">check_circle</v-icon>Gestión de 6 proyectos</p>
        <p class="subtitle-1 bluedarken--text"><v-icon  color="bluedarken">check_circle</v-icon>5 integrantes por proyecto</p>
        <p class="subtitle-1 bluedarken--text"><v-icon  color="bluedarken">check_circle</v-icon>Asignación de 10 tareas por fase</p>
         <br> 
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn  class="ma-2" outlined color="bluedarken">Adquirir</v-btn>
        </v-card-actions>
    </v-flex>
                </v-layout>
          </v-container>
           
      </v-card>
      </v-flex>
      
     
     
         <v-flex xs2 sm3>
      <v-card>
        <v-container>
        <v-card-title class="indigo">
          <v-flex xs12 align-end flexbox>
          <span class="headline white--text">Premium</span>
            </v-flex>
          </v-card-title>
        </v-container>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline indigo--text">$ 140.00 MX</span><br>
                  <span class="indigo--text">Usuario / Mes</span>
              
         <v-card-text>
         <p class="subtitle-1 indigo--text"><v-icon  color="indigo">check_circle</v-icon>Gestión de proyectos ilimitados</p>
         <p class="subtitle-1 indigo--text"><v-icon  color="indigo">check_circle</v-icon>Integrantes ilimitados</p>
         <p class="subtitle-1 indigo--text"><v-icon  color="indigo">check_circle</v-icon>Asignación de tareas ilimitadas</p>
        </v-card-text>
       
        <v-card-actions class="justify-center">
          
          <v-btn  class="ma-2" outlined color="indigo">Adquirir</v-btn>
        </v-card-actions>
    </v-flex>
                </v-layout>
          </v-container>
    
      </v-card>
      </v-flex>
      
      
    </v-row>
  </v-container>
    </v-layout>  
  </v-container>  
</template>

<script>
export default {
  name: 'home',
}
</script>



