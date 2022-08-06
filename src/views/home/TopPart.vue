<template>
<!-- 地址 -->
    <div class="top-address">
      <i class="iconfont ">&#xe601;</i>
      <p class="address">北京理工大学国防科技园2号楼10层</p>
      <i class="iconfont">&#xe600;</i>
    </div>
<!-- 搜索框 -->
    <div class="search">
        <i class="iconfont">&#xe8b9;</i>
        <input type="search" placeholder="山姆会员商店优惠商品" class="ipt">
    </div>
<!-- 轮播图 -->
<img src="../../assets/img/news/banner.jpg" alt="" class="imga">
<!-- 店铺 -->
<div class="shop">
    <ul class="shop-item">
        <li class="shop-item-li" v-for="(item,index) in iconList" :key="index">
            <img class="shop-item-li-title" :src="item.imgUrl"/>
            <p class="shop-item-li-title1">{{item.imgTitle}}</p>
        </li>
    </ul>
</div>
<div class="gap"></div>
</template>

<script>
export default {
    name : "TopPart",
    setup(){
            const iconList = [
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"},
                {imgUrl:require("../../assets/img/icon/close.png"),imgTitle:"超市便利"}
            ];
            return {
                iconList
            }
        }
}
</script>

<style lang='less' scoped>
//地址栏
.top-address{
    display: flex;
    justify-content:space-between;
     padding: .16rem 0;
        font-size: .16rem;
        color:#333;
    .address{
        flex: 1;
        line-height: .22rem;  
        vertical-align:middle;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;  
    }
    .iconfont{
        line-height:.22rem
    }
}
//搜索区
.search{
    overflow: hidden;
    position: relative;
    height: .32rem;
    border-radius: .16rem;
    .ipt{
            height: .32rem;
            width: 100%;
            background-color: #F5F5F5;
            border:0;
            outline: none;
            text-indent: .44rem;
        &::-webkit-input-placeholder {   
            font-size: .14rem;
            color: #B7B7B7;
        }
    }
    
    .iconfont{
        position: absolute;
        left: .16rem;
        font-size: .16rem;
        line-height: .32rem;
         color: #B7B7B7;
        
    }
}
// 图片
.imga{
    width: 3.39rem;
    height: .86rem;
    margin-top: .18rem;
}
// 店铺
.shop{
    margin-top: .16rem;
    &-item{
        display: flex;
        width: 3.39rem;
        flex-wrap: wrap;
        text-align: center;
        &-li{
             width: 20%;
            &-title{
                width: .4rem;
            }
            &-title1{
                color: black;
                 margin:.06rem 0 .16rem 0;
            }
        }
    }
    
}
.gap{
        height: .1rem;
        margin:0 -.18rem;
        background: #F1F1F1;
    }
</style>