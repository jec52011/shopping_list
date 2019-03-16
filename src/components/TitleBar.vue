<template>
  <div class="title">
    <h1>Milford Shopping List <font-awesome-icon icon="shopping-cart" /></h1>
    <!--<p>{{name}}</p>-->
  </div>
</template>

<script>
export default {
  name: 'TitleBar'//,
  // data () {},
  // props: ['name']
}
</script>

<style>
  .title{
    width: 100%;
    background-color: PowderBlue;
    padding: 35px;
    font-family: titleFont;
  }
  .fa-shopping-cart{
    color: White;
  }
  @font-face {
   font-family: titleFont;
   src: url(../assets/Milkshake.otf);
  }
</style>
