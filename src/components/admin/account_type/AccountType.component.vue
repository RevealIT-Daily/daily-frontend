<template>
<div class="AccountType">
    <v-container>
         <v-row align="center" justify="center">
            <v-col cols="12" xs="12" md="12" sm="12" class="mr-5">
                {{$route.params.id}}
                <v-card>
                    <v-card-title>
                        <v-toolbar flat color="white">
                            <v-btn color="primary" dark @click="ShowRegisterForm">New Account Type</v-btn>

                            <v-spacer></v-spacer>

                            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details color="blue"></v-text-field>
                        </v-toolbar>
                    </v-card-title>

                    <v-card-text>
                        <v-pagination v-model="page" :length="pageCount" prev-icon="arrow_left" next-icon="arrow_right" circle class="mb-4"></v-pagination>

                        <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    <span>{{formTitle}}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                            </v-col>
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
                                                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="blue" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue" text @click="updateAccountType">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-data-table :search="search" :headers="headers" :items="accountType" :page.sync="page" :items-per-page="itemsPerPage" class="elevation-1" hide-default-footer @page-count="pageCount = $event">
                            <template v-slot:item.actions="{ item }">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon small class="mr-2" color="info" v-on="on" @click="deleteItem(item)">remove_red_eye</v-icon>
                                    </template>
                                    <span>Details</span>
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
import api from "./functions/account_type.js";
export default {
    name: "AccountType",
    data: () => ({
        search: "",
        page: 1,
        pageCount: 0,
        itemsPerPage: 6,
        dialog: false,
        dialogEdit: false,
        headers: [{
                text: "ID",
                value: "id",
                align: "center"
            },
            {
                text: "Name",
                value: "name",
                align: "center"
            },
            {
                text: "Description",
                value: "description",
                align: "center"
            },
            {
                text: "Actions",
                value: "actions",
                align: "center"
            }
        ],
        accountType: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            description: "",
            status_id: "1"

        },
        defaultItem: {
            description: ""
        }
    }),

    mounted() {
        this.getAccountType();
    },

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Account Type" : "Edit Account Type";
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
            this.accountType;
        },
        ShowRegisterForm() {
            this.dialog = true;
        },
        editItem(item) {
            this.editedIndex = this.accountType.indexOf(item);
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
            api.createAccountType(this.editedItem).then(response => {
                if (response.status === 201) {
                    alert("AccountType added");
                    this.getAccountType();
                    this.close();
                } else {
                    alert("Error with the request");
                }
            });
        },

        getAccountType() {
            api.getAccountType().then(response => {
                this.accountType = response.data.data;
            });
        },

        updateAccountType() {
            api
                .updateAccountType(this.editedItem.id, this.editedItem)
                .then(response => {
                    if (response.status === 200) {
                        alert("AccountType updated");
                        this.getAccountType();
                        this.close();
                    } else {
                        alert("Error with the request");
                    }
                });
        }
    }
};
</script>
