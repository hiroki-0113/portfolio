<template>
<div class="type">
  <vue-typer
  :text='["Hiroki’s\nPortfolio","Hiroki\nNakanishi","genius\nprogrammer"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='2000'
  :type-delay='130'
  :pre-erase-delay='2000'
  :erase-delay='100'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink'
></vue-typer>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  },
}
</script>

<style scoped lang="scss">


.type{
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  
  @media screen and (min-width: 600px){
    height: 400px;
    width: 70%;
    margin: 0 auto;
    margin-top: 300px;
    margin-bottom: 150px;
}
 

  .vue-typer {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    @media screen and (min-width: 600px){
      font-size: 70px;
    }
  }
}

</style>