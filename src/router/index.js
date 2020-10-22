import Vue from 'vue'
import Router from 'vue-router'
//安装路由
Vue.use(Router)
  //定义路由映射  懒加载
const Home = () =>
  import ('../views/Home.vue')
const Category = () =>
  import ('../views/Category')
const Shopcart = () =>
  import ('../views/Shopcart')
const Profile = () =>
  import ('../views/Profile')


//创建对象
const router = new Router({
    mode: 'history',
    routes: [{
        path: '',
        redirect: '/Home'
      },
      {
        path: '/Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/Category',
        component: Category,
        meta: {
          title: '分类'
        }
      },
      {
        path: '/Shopcart',
        component: Shopcart,
        meta: {
          title: '购物车'
        }
      },
      {
        path: '/Profile',
        component: Profile,
        meta: {
          title: '我的'
        }
      },
    ]
  })
  //导出对象
export default router
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = to.matched[0].meta.title
  next()
    // console.log(to)
})