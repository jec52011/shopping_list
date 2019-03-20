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
    <DeleteItem></DeleteItem>

  </b-container>
</template>

<script>

import AddItem from './AddItem'
import DeleteItem from './DeleteItem'
import axios from 'axios'

export default {
  name: 'MainV2',
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
    }
  }
}
</script>

<style>
  table { border-collapse: collapse; }
  td { position: relative; }
  tr.table-danger td:before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 0;
  border-bottom: 1px solid #111;
  width: 100%;
  }
  .table-danger, .table-danger > th, .table-danger > td {
    background-color: transparent;
  }
  .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .table-hover .table-danger:hover {
  	background-color: rgba(0, 0, 0, 0.05);
  }
  .table-danger th, .table-danger td, .table-danger thead th, .table-danger tbody + tbody {
    border-color: rgb(222, 226, 230);
  }
  .table-title {
    padding-top: 30px;
  }
</style>

<!-- table-basic-1.vue -->
