<template>
    <div class="login">
    <v-container
        class="fill-height"
        fluid>
        <v-row
          align="center"
          justify="center">
            <v-col
            cols="12"
            sm="8"
            md="4">
            <v-card width="500" class="mt-6 pb-6">
                    <v-card-title class="primary white--text">
                        <v-row justify="center">
                                <h3> Log into your account</h3>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        
                         <v-text-field label="Email"
                         class="mt-6 pl-2 pr-2"
                        prepend-icon="mail"
                         ></v-text-field>   
                        
                        
                        <v-text-field label="Password"   type="password"
                         class="mt-8 pl-2 pr-2"
                        prepend-icon="enhanced_encryption"></v-text-field>

                        
                        <v-btn x-medium color="#1779ba"  v-on:click="login" class="mt-8 mb-6">
                        <v-icon  color="white">person_outline</v-icon>
                        <span  class="white--text">Login </span>
                        </v-btn>
                        
                    </v-card-text>
                     <div class="text-center">
                        <b> Don't have an account yet? </b> 
                        <router-link to="/signup">
                            <span class="blue--text"><b>Sign up</b></span>
                        </router-link>
                    </div>
            </v-card>
            </v-col>
        </v-row>
        <v-row>
                <v-col class="mt-12">
                <div class="text-center">
                        <span>@Copyright - RevealitMx business 2020</span> 
                    </div>
                </v-col>
            </v-row>
    </v-container>
       
     <v-content>
    <router-view :key="$route.fullPath"/>
    </v-content>
    </div>
</template>

<script>
export default {
    methods:{
        login: function (){
            
            localStorage.setItem('auth',true);
            localStorage.getItem('auth')
            this.$router.push('/Loggedin');
                

        }
    }
}
</script>