<template>
  <b-container fluid>
    <b-row>
      <b-form class="mx-auto" inline @submit="addItem">
        <label class="sr-only" for="inputName">Item: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputName"
          placeholder="Item name"
          type="text"
          v-model="item.name"
          required />

        <label class="sr-only" for="inputStore">Store: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputStore"
          placeholder="Store"
          type="text"
          v-model="item.store"
           />

        <label class="sr-only" for="inputLocation">Location: </label>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          id="inputName"
          placeholder="Location"
          type="text"
          v-model="item.location"
           />
        <b-button type="submit" variant="primary">Add</b-button>
      </b-form>
    </b-row>

  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AddItem',
  data () {
    return {
      item: {}
    }
  },
  methods: {
    addItem (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/item`, this.item)
      .then(response => {
        this.$router.push({
          //name: 'MainV2'//,
          //params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

</style>

<!-- table-basic-1.vue -->
