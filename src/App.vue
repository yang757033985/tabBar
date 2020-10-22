<template>
  <div id="app">
    <router-view/>
    <Tabbar>
      <TabbarItem link="/Home">
        <img slot="icon" src="../src/assets/images/tabbar/home.svg" alt />
        <img slot="active-icon" src="../src/assets/images/tabbar/home_active.svg" alt />
        <div slot="text">首页</div>
      </TabbarItem>
      <TabbarItem link="/Category">
        <img slot="icon" src="../src/assets/images/tabbar/category.svg" alt />
        <img slot="active-icon" src="../src/assets/images/tabbar/category_active.svg" alt />
        <div slot="text">分类</div>
      </TabbarItem>
      <TabbarItem link="/Shopcart">
        <img slot="icon" src="../src/assets/images/tabbar/shopcart.svg" alt />
        <img slot="active-icon" src="../src/assets/images/tabbar/shopcart_active.svg" alt />
        <div slot="text">购物车</div>
      </TabbarItem>
      <TabbarItem link="/Profile">
        <img slot="icon" src="../src/assets/images/tabbar/profile.svg" alt />
        <img slot="active-icon" src="../src/assets/images/tabbar/profile_active.svg" alt />
        <div slot="text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '../src/components/tabbar/Tabbar'
import TabbarItem from '../src/components/tabbar/TabbarItem'

export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem,
  },
}
</script>

<style>
/* 引入css初始化样式 */
@import '../src/assets/css/base.css';
</style>
