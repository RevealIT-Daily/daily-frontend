<template>
    <div class="reset">
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
                                <h3> Reset Password</h3>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                                     <v-text-field label="New Password" hide-details="auto" type="password" 
                                     class="mt-6 pl-2 pr-2"
                                    prepend-inner-icon="lock"
                                    v-validate="'required|min:6'"

                                    ></v-text-field>  
                                     <v-text-field label="Confirm Password" hide-details="auto" type="password" 
                                     class="mt-6 pl-2 pr-2"
                                    prepend-inner-icon="lock"
                                    ></v-text-field>  
                                  
                                    <v-btn x-medium color="#1779ba" class="mt-10 mb-4">
                                    
                                    <span  class="white--text">Reset </span>
                                    </v-btn>
                                     
                             
                        </v-card-text>
                        
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