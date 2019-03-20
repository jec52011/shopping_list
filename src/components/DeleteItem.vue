<template>
  <div>
    <b-btn variant="danger" @click.stop="deleteitems()">Delete Selected</b-btn>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'DeleteItem',
  methods: {
    deleteitems () {
      axios.delete('http://localhost:3000/item')
      .then((result) => {
        this.$router.push({
          name: 'MainV2'
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
