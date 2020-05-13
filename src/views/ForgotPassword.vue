<template>
    <div class="forgot">
        <v-container
        class="fill-height"
        fluid>
            <v-row 
            justify="center">
                <v-col
                cols="12"
                sm="8"
                md="4">
                    <v-card
                    width="500"
                    class="mt-6">
                        <v-card-title class="primary white--text">
                            <v-row justify="center">
                                <h3> Reset your Password</h3>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                                     <v-text-field label="Email" hide-details="auto" 
                                     class="mt-6 pl-2 pr-2"
                                    prepend-inner-icon="mail"
                                    ></v-text-field>  
                                    
                                  <router-link to="/ResetPassword">
                                    <v-btn x-medium color="#1779ba" class="mt-10 mb-4">
                                    
                                    <span  class="white--text">Reset </span>
                                    </v-btn>
                                  </router-link> 
                             
                        </v-card-text>
                        <span class="dark--text">Not Registered? </span>
                        <router-link to="/signup">
                          <span class="dark"><b>Create account now</b></span>  
                    </router-link>
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
        
    </div>
</template>

<script>
export default {
    name: 'forgot',
    components:{

    }
}
</script>