<template>
    <div class="ExecutionComponent">
        <v-container>
            <v-row>
            <v-col cols="12"
            xs="12"
            md="12"
            sm="12">
            
      
      <v-card>
        <v-card-title >
        <v-toolbar flat color="white">

        <v-btn color="primary" dark @click="ShowRegisterForm">New Activity</v-btn>
        

      
        <v-spacer></v-spacer>

         <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        color="blue"
      >
      
      </v-text-field>
        
        </v-toolbar>
        </v-card-title>

        <v-card-text>

           <v-pagination v-model="page" :length="pageCount"
              prev-icon="arrow_left"
              next-icon="arrow_right"
              circle
              class="mb-4">
            </v-pagination>

           <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span>{{formTitle}}</span>
            </v-card-title>
            <v-card-text >
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
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
           
             <v-data-table
             :search="search"
                :headers="headers"
                :items="desserts"
                :page.sync="page"
                  :items-per-page="itemsPerPage"
                class="elevation-1"
                hide-default-footer
                @page-count="pageCount = $event"
                
              >
    
            <template v-slot:item.actions="{ item }">  
               <v-icon
                small
                class="ml-2"
                color="info"
                @click="deleteItem(item)"
              >
                remove_red_eye
              </v-icon>
              <v-icon
                small
                class="mr-2"
                color="warning"
                @click="editItem(item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                color="error"
                @click="deleteItem(item)"
              >
                delete
              </v-icon>
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
  export default {
    name:'planingcomponent',
    data: () => ({
      search: '',
       page: 1,
        pageCount: 0,
        itemsPerPage: 6,
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'center',
          value: 'name',
        },
        { text: 'Owner', value: 'calories',  align: 'center' },
        { text: 'Status', value: 'fat',  align: 'center' },
        { text: 'Date', value: 'carbs',  align: 'center' },
        { text: 'Actions', value: 'actions', align: 'center' },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },
        ShowRegisterForm () {
        this.dialog = true
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>