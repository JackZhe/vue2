/*
 * @path: src/hello-vue-router/install.js
 * @Description: 插件安装方法install
 */
import View from "../../components/view";
import Link from "../../components/link";

export let _Vue;
export function install(Vue){
  if (install.installed && _Vue === Vue) return;
  install.installed = true;
  
  // 全局注册组件router-view
  Vue.component('RouterView', View);

  // 全局注册组件router-link
  Vue.component('RouterLink', Link);  
  // 使用Vue.mixin混入每一个组件
  Vue.mixin({
    // 使用Vue.mixin混入每一个组件
    beforeCreate() {
      // 只有根实例初始化时我们挂载了VueRouter实例router（main.js中New Vue({router})时）
      if(this.$options.router){ 
        // this 是 根组件本身
        this._routerRoot = this

        // this.$options.router就是挂在根组件上的VueRouter实例
        this._router = this.$options.router;

        this._route = {};
      } else {
        // 非根组件，也要把父组件的_routerRoot保存到自身身上
        this._routerRoot = this.$parent && this.$parent._routerRoot
        // 子组件也要挂上$router
        this._router = this._routerRoot.$router
      }
    },
  })
  // 在 Vue 原型上添加 $router 属性( VueRouter )并代理到 this._routerRoot._router
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });

  // 在 Vue 原型上添加 $route 属性( 当前路由对象 )并代理到 this._routerRoot._route
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route;
    }
  });
}