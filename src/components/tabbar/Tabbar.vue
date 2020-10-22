<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: 'Tabbar',
}
</script>
 
<style scoped>
.tab-bar {
  display: flex;
  text-align: center;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>