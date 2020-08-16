<template>
  <div>
    <div class="container">
      <h1 class="title"><span class="fas fa-male"></span>About</h1>
    <div class="about">
      <div class="me">
        <h2><i class="fas fa-pencil-alt"></i>Name</h2>
        <p>Hiroki Nakanishi</p>
      </div>
      <div class="me">
        <h2><i class="fas fa-globe-asia"></i>Represent</h2>
        <p>Saitama toda</p>
      </div>
      <div class="me">
        <h2><i class="fas fa-school"></i>University</h2>
        <p>DBU</p>
      </div>
      <div class="me">
        <h2><i class="fas fa-baby"></i>Birthday</h2>
        <p>1/13</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .container{
    position: relative;
    font-family: 'Courier';
    margin-bottom: 200px;
  }
  .title{
    display: block;
    text-align: center;
    margin-bottom: 50px;
    font-size: 50px;
    }
  .me{
    margin-bottom: 45px;
    @media screen and(min-width: 600px){
      width: 100%;
    }
  }
  .about{
    width: 100%;
    text-align: center;
    margin-bottom: 140px;
    @media screen and(min-width: 600px){
      display: flex;
    }
  }
</style>
