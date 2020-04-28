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
                                                <v-icon :color="iconColorInformacion" >person_outline</v-icon>
                                               <h5 class="ml-3"> Personal Information </h5> 
                                            </v-btn>

                                            <v-btn  class="ml-12" :class="ActivePlans" text x-large @click="EnableMyPlans">
                                            <v-icon :color="iconColorPlans" >local_offer</v-icon>    
                                            <h5 class="ml-3"> My Plans </h5>
                                            </v-btn>

                                              <v-btn text x-large  class="ml-12" :class="ActivePassword" @click="EnablePassword">
                                                  <v-icon :color="iconColorPassword">enhanced_encryption</v-icon>
                                               <h5 class="ml-3"> Password    </h5>
                                            </v-btn>
                                            </div>

                            <v-row
                            align="center"
                            justify="center">
                                <v-col
                                cols="9"
                                sm="9"
                                md="8" 
                                class="pa-0">
                                <template v-if="PersonalInformation">
                                <v-row align="center"
                                justify="center">
                                    <v-col cols="10"
                                        sm="10"
                                        md="10" >
                                     <v-text-field label="Phone" hide-details="auto" type="text"
                                        prepend-inner-icon="person" class="ml-12"
                                        value="7773763824"
                                        disabled >
                                        
                                          </v-text-field>
                                    </v-col>
                                        <v-col 
                                        cols="2"
                                        sm="2"
                                        md="2"
                                        class="mt-8 pa-0 text-left" >
                                         <v-dialog v-model="dialog2" width="400px" persistent>
                                    <template v-slot:activator="{ on }">
                                            <v-btn text v-on="on">
                                                <v-icon left color="primary">edit</v-icon>
                                            </v-btn>
                                        </template>
                                         <v-card>
                                            <v-card-title class="primary">
                                            <span class="headline white--text" >Phone</span>
                                            <v-row justify="end">
                                             <v-btn  icon dark @click="dialog2 = false">
                                                    <v-icon left color="white">close</v-icon>
                                                </v-btn>
                                            </v-row>
                                            </v-card-title>
                                            <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-text-field label="Phone" value="7773763824"></v-text-field>
                                                    <v-text-field label="Mobile"></v-text-field>
                                                    
                                                </v-row>
                                                </v-container>
                                                </v-card-text>
                                                <v-card-actions>
                                                <v-spacer></v-spacer>
                                                
                                                <v-btn rounded color="blue darken-1"  @click="dialog2 = false">Save</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                         </v-dialog>
                                    </v-col>
                                </v-row>
                                   <v-row >
                                    <v-col cols="10"
                                        sm="10"
                                        md="10" >
                                        
                                         <v-text-field label="Email" value="marco.antonio.gv98@gmail.com" hide-details="auto"
                                         class="ml-12"
                                        prepend-inner-icon="mail"
                                        disabled>
                                        </v-text-field> 
                                         </v-col>
                                             <v-col 
                                        cols="2"
                                        sm="2"
                                        md="2"
                                        class="mt-8 pa-0 text-left" 
                                        >
                                        
                                         <v-dialog v-model="dialog" width="400px" persistent>
                                         <template v-slot:activator="{ on }" >
                                            <v-btn text v-on="on">
                                                <v-icon left color="primary">edit</v-icon>
                                            </v-btn>
                                             </template>
                                              <v-card>
                                            <v-card-title  class="primary">
                                            <span class="headline white--text">Email Address</span>
                                            <v-row justify="end">
                                             <v-btn  icon dark @click="dialog = false">
                                                    <v-icon left color="white">close</v-icon>
                                                </v-btn>
                                            </v-row>
                                            </v-card-title>
                                            <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-text-field label="Current Email" value="marco.antonio.gv98@gmail.com" disabled></v-text-field>
                                                    <v-text-field label="New Email" hint="example of helper text only on focus" require></v-text-field>
                                                    <v-text-field label="Current Password" hint="example of helper text only on focus"></v-text-field>
                                                </v-row>
                                                </v-container>
                                                </v-card-text>
                                                <v-card-actions>
                                                <v-spacer></v-spacer>
                                                
                                                <v-btn rounded color="blue darken-1"  @click="dialog = false">Save</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                         </v-dialog>
                                    </v-col>
                                </v-row>
                                <v-row class="mb-6">
                                    <v-col cols="10"
                                        sm="10"
                                        md="10" >
                                        
                                         <v-text-field label="BirthDay" :value="date" hide-details="auto"
                                         class="ml-12"
                                        prepend-inner-icon="cake"
                                        disabled>
                                       
                                       
                                       
                                        </v-text-field> 
                                         </v-col>
                                             <v-col 
                                        cols="2"
                                        sm="2"
                                        md="2"
                                        class="mt-8 pa-0 text-left" 
                                        >
                                    <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="date"
                                        persistent
                                        width="290px"
                                    >
                                        <template v-slot:activator="{ on }" >
                                            <v-btn text v-on="on">
                                                <v-icon left color="primary">edit</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-date-picker v-model="date" type="date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-dialog>
                                    </v-col>
                                </v-row>
                                </template>


                                <template v-if="MyPlans">
                                      <h1 class="mt-8">My Plans</h1>
                                </template>
                                 <template v-if="Password">
                                  <v-row
                                    align="center"
                                    justify="center">
                                        <v-col
                                        cols="12"
                                    sm="9"
                                    md="9" 
                                    class="pa-0">
                                      <v-text-field label="Current Password" hide-details="auto" type="password"
                                     class="pl-2 pr-2"
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
                                    </v-col>
                                 </v-row>
                                         
                                    
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
            iconColorPlans:'black',
             Password:false,
            ActivePassword:String,
            iconColorPassword:'black',
            dialog:false,
            dialog2:false,
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,


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
            this.iconColorInformacion='blue'
        },
         DisableMyPlans: function(){
            this.MyPlans=false;
            this.ActivePlans='',
            this.iconColorPlans='blue'
        },
         DisablePassword: function(){
            this.Password=false;
            this.ActivePassword='',
            this.iconColorPassword='blue'
        }

    }
}
</script>