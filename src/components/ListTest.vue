<template>
  <b-row>
    <b-col cols="12">
      <h2>
        List Test
        <b-link href="#/add-item">(Add Item)</b-link>
      </h2>
      <b-table striped hover :items="items" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ItemList',
  data () {
    return {
      fields: {
        name: { label: 'Item', sortable: true, 'class': 'text-center' },
        store: { label: 'Store', sortable: true },
        location: { label: 'Location', 'class': 'text-center' },
        strike: { label: 'Striked'}
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
    details (item) {
      this.$router.push({
        name: 'ShowItem',
        params: { id: item._id }
      })
    }
  }
}
</script>
