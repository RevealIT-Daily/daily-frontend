<template>
  <div class="DefaultRole">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" md="12" sm="12">
          {{$route.params.id}}
          <v-card>
            <v-card-title>
              <v-toolbar flat color="white">
                <v-btn color="primary" dark @click="ShowRegisterForm">New Default Role</v-btn>

                <v-spacer></v-spacer>

                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                  color="blue"
                ></v-text-field>
              </v-toolbar>
            </v-card-title>

            <v-card-text>
              <v-pagination
                v-model="page"
                :length="pageCount"
                prev-icon="arrow_left"
                next-icon="arrow_right"
                circle
                class="mb-4"
              ></v-pagination>

              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span>{{formTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        
                        <v-col cols="12">
                          <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="blue" text @click="close">Cancel</v-btn>
                    <v-btn color="blue" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogEdit" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span>{{formTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                          
                        <v-col cols="12">
                          <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="blue" text @click="close">Cancel</v-btn>
                    <v-btn color="blue" text @click="updateDefaultRole">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-data-table
                :search="search"
                :headers="headers"
                :items="defaultRole"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                class="elevation-1"
                hide-default-footer
                @page-count="pageCount = $event"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="ml-2" color="info" @click="deleteItem(item)">remove_red_eye</v-icon>
                  <v-icon small class="mr-2" color="warning" @click="editItem(item)">edit</v-icon>
                  <v-icon small color="error" @click="deleteItem(item)">delete</v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import api from "./functions/default_role.js";
export default {
  name: "DefaultRole",
  data: () => ({
    search: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 6,
    dialog: false,
    dialogEdit: false,
    headers: [
      { text: "ID", value: "id", align: "center" },
      { text: "Description", value: "description", align: "center" },
      { text: "Actions", value: "actions", align: "center" }
    ],
    defaultRole: [],
    editedIndex: -1,
    editedItem: {
      
      description: "",
      status_id: "1"

    },
    defaultItem: {
      description: ""
    }
  }),

  mounted() {
    this.getDefaultRole();
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Default Role" : "Edit Default Role";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.defaultRole;
    },
    ShowRegisterForm() {
      this.dialog = true;
    },
    editItem(item) {
      this.editedIndex = this.defaultRole.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogEdit = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.dialogEdit = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
        console.log("Aqui esta");
      api.createDefaultRole(this.editedItem).then(response => {
        if (response.status === 201) {
          alert("DefaultRole added");
          this.getDefaultRole();
          this.close();
        } else {
          alert("Error with the request");
        }
      });
    },

    getDefaultRole() {
      api.getDefaultRole().then(response => {
        this.defaultRole = response.data.data;
      });
    },

    updateDefaultRole() {
      api
        .updateDefaultRole(this.editedItem.id, this.editedItem.description)
        .then(response => {
            if(response.status === 200){
                alert("DefaultRole updated");
                this.getDefaultRole();
                this.close();
            }else{
                alert("Error with the request");
            }
        });
    }
  }
};
</script>