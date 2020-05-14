<template>
  <div class="signup">
    <v-container class="fill-height" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card width="500" class="mt-6">
            <v-card-title class="primary white--text">
              <v-row justify="center">
                <h3>Join to Daily</h3>
              </v-row>
            </v-card-title>
            <v-form ref="signUpForm">
              <v-card-text>
                <v-text-field
                  label="Email"
                  hide-details="auto"
                  class="mt-6 pl-2 pr-2"
                  prepend-inner-icon="mail"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  hide-details="auto"
                  type="password"
                  class="mt-8 pl-2 pr-2"
                  prepend-inner-icon="enhanced_encryption"
                  v-model="password"
                  :rules="passwordRules"
                ></v-text-field>
                <v-text-field
                  label="Confirm Password"
                  hide-details="auto"
                  type="password"
                  class="mt-8 pl-2 pr-2"
                  prepend-inner-icon="enhanced_encryption"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                ></v-text-field>

                <v-btn x-medium color="#1779ba" class="mt-10 mb-4" @click="submit()">
                  <v-icon color="white">supervisor_account</v-icon>
                  <span class="white--text">Sign Up</span>
                </v-btn>
              </v-card-text>
            </v-form>
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
import api from "./functions/signup.js";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password must be more than 8 characters"
      ],
      confirmPassword: "",
      confirmPasswordRules: [
        v => !!v || "Confirm password is required",
        v => (v && v.length >= 8) || "Password must be more than 8 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.password !== this.confirmPassword)
        return alert("Please, write the same password");

       this.registerAccount();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    },
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    registerAccount() {
      let userAccount = {
        email: this.email,
        password: this.confirmPassword
      };
      api.createUserAccount(userAccount).then(response => {
        if (response.status === 201) {
          alert("User account created");
          this.resetForm();
        }
      });
    }
  }
};
</script>