<template>
<div class="ExecutionComponent">
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" xs="12" md="12" sm="12" class="mr-5">

                <v-card>
                    <v-card-title>
                        <v-toolbar flat color="white">

                            <v-btn color="primary" dark @click="ShowRegisterForm">New Project</v-btn>

                            <v-spacer></v-spacer>

                            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details color="blue">

                            </v-text-field>

                        </v-toolbar>
                    </v-card-title>

                    <v-card-text>

                        <v-pagination v-model="page" :length="pageCount" prev-icon="arrow_left" next-icon="arrow_right" circle class="mb-4">
                        </v-pagination>

                        <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    <span>{{formTitle}}</span>
                                </v-card-title>
                                <v-card-text>
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

                        <v-data-table :search="search" :headers="headers" :items="desserts" :page.sync="page" :items-per-page="itemsPerPage" class="elevation-1" hide-default-footer @page-count="pageCount = $event">

                            <template v-slot:item.actions="{ item }">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small class="mr-2" color="info" v-on="on" @click="sendActivities(item)">remove_red_eye</v-icon>
                                    </template>
                                    <span>View Project</span>
                                </v-tooltip>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small class="mr-2" v-on="on" color="warning" @click="editItem(item)">edit</v-icon>
                                    </template>
                                    <span>Edit</span>
                                </v-tooltip>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small color="error" v-on="on" @click="deleteItem(item)">delete</v-icon>
                                    </template>
                                    <span>Delete</span>
                                </v-tooltip>
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
import api from "./functions/myprojects.js";
export default {
    name: 'MyProjects',
    data: () => ({
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 6,
        dialog: false,
        headers: [{
                text: 'Name',
                align: 'center',
                value: 'name',
            },
            {
                text: 'Description',
                value: 'description',
                align: 'center'
            },
            {
                text: 'Members',
                value: 'members',
                align: 'center'
            },
            {
                text: 'Status',
                value: 'status_id',
                align: 'status_id'
            },
            {
                text: 'Actions',
                value: 'actions',
                align: 'center'
            },
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
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },
    methods: {
        initialize() { 
            
            api.getMyProjects().then(response => {
                this.desserts = response.data.data;
            });
        },
        ShowRegisterForm() {
            this.dialog = true
        },
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },
        sendActivities(item) {

            this.$router.push({
                name: 'start',
                params: {
                    project: Object.assign({}, item)
                },
                query: {
                    q: '3'
                }

            });
        },

        close() {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
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
