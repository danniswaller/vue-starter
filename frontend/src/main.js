import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CustomComponents from './components';


Vue.use(ElementUI);
Vue.use(CustomComponents);

Vue.config.productionTip = false;
router.beforeEach( function(to, from, next)  {
    console.log(to);
    if (to.meta.requireLogin) {
        if (store.state.user.name) {

            next();
        } else {
            next({name: 'login'})
        }
    } else {


        next();
    }

});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
