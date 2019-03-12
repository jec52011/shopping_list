<template>
  <div>
    <h1>Milford Shopping List <font-awesome-icon icon="shopping-cart" /></h1>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  data () {},
  props: ['name']
}
</script>

<style>
  div{
    height: 19%;
    width: 100%;
    background-color: PaleTurquoise;
  }
  .fa-shopping-cart{
    color: White;
  }
</style>
