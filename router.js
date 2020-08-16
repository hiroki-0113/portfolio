import Vue  from 'vue'
import Router from 'vue-router'
import About from './components/about.vue'
import Skill from './components/skill.vue'
import Works from './components/works.vue'

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [{path:'/about',component:About},
           {path:"/skill",component:Skill},
           {path:"/works",component:Works}]
})

