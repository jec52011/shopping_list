<template>
  <div>
    <h1>Shopping List</h1>
    <b-table striped hover :items="items" :fields="fields">
      <template slot="strike" slot-scope="data">
        <b-form-checkbox v-model="data.item.strike" :checked="changeVariant(data.item)">{{data.value}}</b-form-checkbox>
      </template>

      <template slot="item" slot-scope="data">
        {{ data.value }}
      </template>

      <template slot="store" slot-scope="data">
        {{ data.value }}
      </template>

      <template slot="location" slot-scope="data">
        {{ data.value }}
      </template>

    </b-table>
    <b-button @click="addItem">Add</b-button>
  </div>
</template>

<script>
// 1. CSS to strikeout a whole row
// 2. Approach #1 using _rowVariant, which we made conditional based on checkbox
// 3. Override how table-danger behaves
// Next time, text fields for adding, filter?, add location data
export default {
  data () {
    return {
      items: [
        { strike: true, item: 'Quinoa', store: 'Costco', location: 'Norwalk', _rowVariant: 'danger' },
        { strike: false, item: 'Stand Mixer', store: 'Macy\'s', location: 'Trumbull', _rowVariant: 'danger' },
        { strike: true, item: 'Polo Shirt', store: 'Macy\'s', location: 'Trumbull', _rowVariant: 'danger' },
        { strike: false, item: 'Carrots', store: 'Costco', location: 'Any', _rowVariant: 'danger' }
      ],
      fields: [
        { key: 'strike', label: 'Check' },
        { key: 'item', label: 'Item' },
        { key: 'store', label: 'Store' },
        { key: 'location', label: 'Location'}
      ]
    }
  },
  methods: {
    addItem () {
      this.items.push({strike: false, item: 'Jeans', store: 'Kohl\'s', location: 'Any'})
    },
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
    background-color: transparent;
  }
  .table-danger th, .table-danger td, .table-danger thead th, .table-danger tbody + tbody {
    border-color: rgb(222, 226, 230);
  }

</style>

<!-- table-basic-1.vue -->
