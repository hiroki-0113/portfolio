<template>
<div>
  <div class="container">
  <h1>My Skill</h1>
  <div class="skill">
    <ul>
      <li class="fab fa-html5">HTML</li>
      <li class="fab fa-css3-alt">CSS</li>
      <li class="fab fa-js">JavaScript</li>
      <li class="fab fa-vuejs">Vue</li>
      <li class="fab fa-php">PHP</li>
      <li class="fab fa-wordpress">WordPress</li>
    </ul>
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
  background-color: rgb(0, 0, 0);
  color: white;
  margin-bottom: 80px;
  padding: 40px 0;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  @media screen and (min-width: 600px){
  width: 85%;
  padding-top: 60px;
  padding-bottom: 150px;
  margin: 0 auto;
  margin-bottom: 80px;
}
}
ul{
  margin: 0;
  padding: 0;
}
h1{
  border-bottom: white solid 3px;
  display: inline-block;
  @media screen and (min-width: 600px){
  font-size: 65px;
}
}
.skill{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
li{
  list-style: none;
  font-size: 27px;
  margin: 30px;
  font-weight: 900;
  // font-family: 'Courier';

  @media screen and (min-width: 600px){
    font-size: 50px;
    width: 25%;
}
}
</style>