<template>
  <div class="container">
    <div class="link">
    <ol>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to=item.path>
            {{item.title}}
          </router-link>
        </li>
    </ol>
    <typeVue style="border-bottom:solid black 2px;"></typeVue>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
  import typeVue from './components/type.vue'

export default {
  components:{
    typeVue,
  },
  data() {
    return {
      items:[
        {title:"about",path:"/about"},
        {title:"skill",path:"/skill"},
        {title:"works",path:"/works"}
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 600px) {
.link{
  width: 85%;
  margin: 0 auto;
}
}
ol {
  margin-left: auto;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 40px 0;
  @media screen and(min-width: 600px){
    position: absolute;
    top: 10px;
    right: 30px;
    position: fixed;
  }
}

li {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  width: 100px;
  height: 35px;
  margin-left:10px;
  margin-right:10px;
  margin-bottom: 10px;
  background-color: rgb(0, 0, 0);
  border-radius: 8px;
  position: relative;
  text-align: center;
  font-size: 28px;
}

li:hover {
  opacity: 0.4;
}

a {
  color: white;
  text-decoration: none;
}

</style>