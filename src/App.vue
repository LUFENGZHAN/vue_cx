<template>
  <router-view/>
  <FooterPart></FooterPart>
</template>
<script>
import FooterPart from './views/home/FooterPart.vue';
export default {
  name: 'App',
  components:{
     FooterPart 
  }
}
</script>
<style lang="less">

    @import "assets/css/reset.css";
    @import "assets/css/border.css";
    @import "assets/css/iconfont.css";
</style>
