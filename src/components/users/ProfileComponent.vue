<template>
    <div class="ProfileComponent">
        <v-container
        class="fill-height"
        fluid >
            <v-row
            align="center"
            justify="center">
                <v-col
                cols="12"
            sm="9"
            md="9">
                    <v-card>
                        <v-card-title class="primary pa-0">
                             <v-row align="center"
                            justify="center">
                            <v-col>
                            <v-avatar class="mb-3" size="70">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John">
                            </v-avatar>
                            <h4 class="white--text">Marco Antonio García Velázquez</h4>
                            </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-text>

                                <div class="md-12 mt-2">
                                            <v-btn :class="ActiveInformacion" text x-large @click="EnablePersonalInformation">
                                                <v-icon  :color="iconColorInformacion">person_outline</v-icon>
                                               <h5 class="ml-3"> Personal Information </h5> 
                                            </v-btn>

                                            <v-btn  class="ml-12" :class="ActivePlans" text x-large @click="EnableMyPlans">
                                            <v-icon  :color="iconColorPlans">local_offer</v-icon>    
                                            <h5 class="ml-3"> My Plans </h5>
                                            </v-btn>

                                              <v-btn text x-large  class="ml-12" :class="ActivePassword" @click="EnablePassword">
                                                  <v-icon  :color="iconColorPassword">enhanced_encryption</v-icon>
                                               <h5 class="ml-3"> Password    </h5>
                                            </v-btn>
                                            </div>
                            <v-row
                            align="center"
                            justify="center">
                                <v-col
                                cols="9"
                                sm="9"
                                md="9" 
                                class="pa-0">
                                <template v-if="PersonalInformation">
                                       <v-text-field label="Phone" hide-details="auto" type="text"
                                        prepend-inner-icon="person" class="ma-6"
                                        value="7773763824">
                                        </v-text-field>
                                  <v-text-field label="Email" value="marco.antonio.gv98@gmail.com" hide-details="auto" 
                                         class="ma-6"
                                        prepend-inner-icon="mail">
                                        </v-text-field> 
                                         
                                        <v-text-field  label="BirthDay" value="Feb 2nd, 1998" class="ma-6"  hide-details="auto" type="text"
                                        prepend-inner-icon="cake">
                                        </v-text-field>  
                                          <v-divider
                                        class="mt-4"
                                        ></v-divider>

                                     <v-btn rounded color="#1779ba" class="mt-6">
                                    <!-- <v-icon  color="white">person_outline</v-icon> -->
                                    <span  class="white--text">Edit </span>
                                    </v-btn>
                                </template>
                                <template v-if="MyPlans">
                                      <h1 class="mt-8">My Plans</h1>
                                </template>
                                 <template v-if="Password">
                                           <v-text-field label="Actual Password" hide-details="auto" type="password"
                                     class="mt-8 pl-2 pr-2"
                                    prepend-inner-icon="enhanced_encryption"></v-text-field> 
                                    <v-text-field 
                                    label="New Password"  hide-details="auto" type="password"
                                     class="mt-8 pl-2 pr-2"
                                    prepend-inner-icon="enhanced_encryption"></v-text-field> 
                                     <v-text-field 
                                    label="Confirm Password"  hide-details="auto" type="password"
                                     class="mt-8 pl-2 pr-2"
                                    prepend-inner-icon="enhanced_encryption"></v-text-field>

                                      <v-divider
                                        class="mt-4"
                                        ></v-divider>

                                     <v-btn rounded color="#1779ba" class="mt-6">
                                    <!-- <v-icon  color="white">person_outline</v-icon> -->
                                    <span  class="white--text">Save </span>
                                    </v-btn>
                                    
                                </template>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:'profilecomponent',
    data(){
        return {
            PersonalInformation: true,
            ActiveInformacion: 'primary',
            iconColorInformacion: 'white',
            MyPlans:false,
            ActivePlans:String,
            iconColorPlans:String,
             Password:false,
            ActivePassword:String,
            iconColorPassword:String


        }
    },
    methods:{
        EnablePersonalInformation: function(){
            this.DisableMyPlans();
            this.DisablePassword();
            this.PersonalInformation=true;
          this.ActiveInformacion='primary';
          this.iconColorInformacion='white'
        },
        EnableMyPlans: function(){
          this.DisablePersonalInformation();
          this.DisablePassword();

          this.MyPlans=true;
          this.ActivePlans='primary';
          this.iconColorPlans='white'
        },
         EnablePassword: function(){
          this.DisableMyPlans();
          this.DisablePersonalInformation();

          this.Password=true;
          this.ActivePassword='primary';
          this.iconColorPassword='white'
        },
        DisablePersonalInformation: function(){
            this.PersonalInformation=false;
            this.ActiveInformacion='',
            this.iconColorInformacion='primary'
        },
         DisableMyPlans: function(){
            this.MyPlans=false;
            this.ActivePlans='',
            this.iconColorPlans='primary'
        },
         DisablePassword: function(){
            this.Password=false;
            this.ActivePassword='',
            this.iconColorPassword='primary'
        }

    }
}
</script>