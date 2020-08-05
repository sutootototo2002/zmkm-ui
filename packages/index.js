
import set from './set.vue'
import './css/style.css'
const components = [
    set
  ];
const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  export default {
    install,
    set
  };