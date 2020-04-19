<template>
    <div class="signup">
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
                                <h3> Join to Daily</h3>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                                     <v-text-field label="Email" :rules="rules" hide-details="auto" 
                                     class="mt-6 pl-2 pr-2"
                                    prepend-inner-icon="mail"
                                    ></v-text-field>  
                                    <v-text-field label="Password" :rules="rules" hide-details="auto" type="password"
                                     class="mt-8 pl-2 pr-2"
                                    prepend-inner-icon="enhanced_encryption"></v-text-field> 
                                    <v-text-field 
                                    label="Confirm Password" :rules="rules" hide-details="auto" type="password"
                                     class="mt-8 pl-2 pr-2"
                                    prepend-inner-icon="enhanced_encryption"></v-text-field> 

                                    <v-btn x-medium color="#1779ba" class="mt-10 mb-4">
                                    <v-icon  color="white">supervisor_account</v-icon>
                                    <span  class="white--text">Sign Up </span>
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
    name: 'signup',
    components:{

    }
}
</script>