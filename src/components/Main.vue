<template>
  <div>
    <h1>Shopping List</h1>
    <b-table striped hover :items="items" :fields="fields">
      <template slot="check" slot-scope="row">
        <b-form-checkbox v-model="row.item.strike">{{row.item.strike}}</b-form-checkbox>
      </template>

      <template slot="itemName" slot-scope="row">
        {{ row.item.item }}
      </template>

      <template slot="storeName" slot-scope="row">
        {{ row.item.store }}
      </template>

    </b-table>
    <b-button @click="addItem">Add</b-button>
  </div>
</template>

<script>
// 1. Find a way to draw HTML Input elements (textfields, checkboxes) in your table.
// (Read up on how to use slots)
// 2. Change item and store to textfields, and isActive to a checkbox
// 3. Add an additional property to know if an item is strikethrough (I cant get strikethough to appear at start)
export default {
  data () {
    return {
      items: [
        { strike: true, item: 'Quinoa', store: 'Costco' },
        { strike: false, item: 'Stand Mixer', store: 'Macy\'s' },
        { strike: true, item: 'Polo Shirt', store: 'Macy\'s' },
        { strike: false, item: 'Carrots', store: 'Costco' }
      ],
      fields: [
        { key: 'check', label: 'Check' },
        { key: 'itemName', label: 'Item' },
        { key: 'storeName', label: 'Store' }
      ]
    }
  },
  methods: {
    addItem () {
      this.items.push({strike: false, item: 'Jeans', store: 'Kohl\'s'})
    }
  }
}
</script>

<style scoped>
  .strike{
    text-decoration: line-through;
  }
</style>

<!-- table-basic-1.vue -->
