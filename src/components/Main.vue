<template>
  <b-container fluid>
    <h1>Shopping List</h1>
    <b-row>
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
    </b-row>

    <b-row>
      <b-form class="mx-auto" inline @submit="addItem">
        <label class="sr-only" for="inputName">Item: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputName"
          placeholder="Item name"
          type="text"
          v-model="form.newItem"
          required />

        <label class="sr-only" for="inputStore">Store: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputStore"
          placeholder="Store"
          type="text"
          v-model="form.newStore"
           />

        <label class="sr-only" for="inputLocation">Location: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputName"
          placeholder="Location"
          type="text"
          v-model="form.newLocation"
           />
        <b-button type="submit" variant="primary">Add</b-button>
      </b-form>
    </b-row>


  </b-container>
</template>

<script>
// Next time, text fields for adding, filter?, add location data
export default {
  data () {
    return {
      form: {
        newItem:'',
        newStore:'',
        newLocation:''
      },
      items: [],
      // items: [
      //   { strike: true, item: 'Quinoa', store: 'Costco', location: 'Norwalk', _rowVariant: 'danger' },
      //   { strike: false, item: 'Stand Mixer', store: 'Macy\'s', location: 'Trumbull', _rowVariant: 'danger' },
      //   { strike: true, item: 'Polo Shirt', store: 'Macy\'s', location: 'Trumbull', _rowVariant: 'danger' },
      //   { strike: false, item: 'Carrots', store: 'Costco', location: 'Any', _rowVariant: 'danger' }
      // ],
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
      this.items.push({strike: false, item: this.form.newItem, store: this.form.newStore, location: this.form.newLocation})
      this.form.newItem = ''
      this.form.newStore = ''
      this.form.newLocation = ''
    },
    changeVariant (row) {
      if (row.strike == true) {
        row._rowVariant = 'danger'
      }
      else {
        row._rowVariant = ''
      }
    },
    onSubmit (evt) {
      evt.preventDefault()
      //alert(JSON.stringify(this.form.name))
      this.items.push({strike: false, item: this.form.newItem, store: this.form.newStore, location: this.form.newLocation})
      this.form.newItem = ''
      this.form.newStore = ''
      this.form.newLocation = ''
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
</style>

<!-- table-basic-1.vue -->
