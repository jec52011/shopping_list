<template>
  <div>
    <h1>Shopping List</h1>
    <b-table striped hover :items="items"></b-table>
    <b-button @click="addItem">Add</b-button>
  </div>
</template>

<script>
// 1. Find a way to draw HTML Input elements (textfields, checkboxes) in your table.
// (Read up on how to use slots)
// 2. Change item and store to textfields, and isActive to a checkbox
// 3. Add an additional property to know if an item is strikethrough
export default {
  data () {
    return {
      items: [
        { isActive: true, item: 'Quinoa', store: 'Costco' },
        { isActive: false, item: 'Stand Mixer', store: 'Macy\'s' },
        { isActive: true, item: 'Polo Shirt', store: 'Macy\'s' },
        { isActive: false, item: 'Carrots', store: 'Costco' }
      ]
    }
  },
  methods: {
    addItem (){
      this.items.push({isActive: true, item: 'Jeans', store: 'Kohl\'s'})
    }
  }
}
</script>

<!-- table-basic-1.vue -->
