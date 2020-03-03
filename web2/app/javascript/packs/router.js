import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router';
import Index from './pages/index.vue'
import MyPage from './pages/mypage.vue'
import Signin from './pages/signin.vue'
import Signup from './pages/signup.vue'
Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index},
  {path: '/mypage', component: MyPage},
  {path: '/signin', component: Signin, meta: {needNotLogged: true}},
  {path: '/signup', component: Signup, meta: {needNotLogged: true}},
  ];

const router = new VueRouter({ routes })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.needNotLogged) && isLogin()) {
        console.log('next')
        next({path: "/mypage"})
        return;
    }
    next();
    return;
})

function isLogin() {
    return false;
}
export default router;