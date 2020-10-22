<template>
  <div class="block">
    <h2>首页</h2>
    <span class="demonstration">时间</span>
    <div>
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // created() {
  //   console.log(this.$router)
  // },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
    }
  },
}
</script>

<style scoped>
.block {
  text-align: center;
}
</style>