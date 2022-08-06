<template>
  <div id="content">
    <TopPart></TopPart>
    <NearbyShops></NearbyShops>
  </div>
<!-- <FooterPart></FooterPart> -->
</template>

<script>
// @ is an alias to /src
import TopPart from'./TopPart.vue'
import FooterPart from './FooterPart.vue';
// import {get} from '../utils/request'
import NearbyShops from './NearbyShops.vue'

export default {
  name: 'HomeView',
  components: {
   TopPart,
   NearbyShops,
    FooterPart
  },
  
}
</script>
<style lang="less" scoped>
#content{
        position: relative;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        padding:0 .18rem;}
</style>