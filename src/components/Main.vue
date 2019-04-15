<template>
  <b-container fluid>
    <h1 class="table-title">Shopping List</h1>
    <b-row>
      <b-table striped hover :items="items" :fields="fields">
        <template slot="strike" slot-scope="data">
          <b-form-checkbox v-model="data.item.strike" :checked="changeVariant(data.item)">{{data.value}}</b-form-checkbox>
        </template>

        <template slot="name" slot-scope="data">
          {{ data.value }}
        </template>

        <template slot="store" slot-scope="data">
          {{ data.value }}
        </template>

        <template slot="location" slot-scope="data">
          {{ data.value }}
        </template>

      </b-table>
    </b-row>

    <AddItem></AddItem>
    <DeleteItem @delete-stricken-items="removeItems()"></DeleteItem>

  </b-container>
</template>

<script>

import AddItem from './AddItem'
import DeleteItem from './DeleteItem'
import axios from 'axios'

export default {
  name: 'Main',
  components: { AddItem, DeleteItem },
  data () {
    return {
      fields: {
        name: { key: 'name', label: 'Item', sortable: true, 'class': 'text-center' },
        store: { key: 'store', label: 'Store', sortable: true },
        location: { key: 'location', label: 'Location', 'class': 'text-center' },
        strike: { key: 'strike', label: 'Check'}
      },
      items: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/item`)
    .then(response => {
      this.items = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    changeVariant (row) {
      if (row.strike == true) {
        row._rowVariant = 'danger'
      }
      else {
        row._rowVariant = ''
      }

      axios.put(`http://localhost:3000/item/` + row._id, row)
      .then(response => {
        // for now this is empty
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    removeItems () {
      for (var i = this.items.length - 1; i >= 0; i--) {
        if (this.items[i].strike === true) {
          this.items.splice(i, 1);
        }
      }
    }
  }
}
</script>

<style>
  table { border-collapse: collapse; }
  .table-danger, .table-danger > th, .table-danger > td {
    background-color: #ffffcc;
  }
  .table-hover .table-danger:hover, .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {
  	background-color: #ffff99;
    /*box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);*/
  }
  .table-danger th, .table-danger td, .table-danger thead th, .table-danger tbody + tbody {
    border-color: rgb(222, 226, 230);
  }
  .table-title {
    padding-top: 30px;
  }
</style>

<!-- table-basic-1.vue -->
