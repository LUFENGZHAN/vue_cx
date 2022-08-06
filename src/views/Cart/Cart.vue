<template>
<h2>我的全部购物车（2）</h2>
  <div class="cart">
    <h3>沃尔沃</h3>
    <div class="cart-list">
      <img src="../../assets/img/icon/close.png" alt="">
      <div class="cart-item">
        <p>番茄250g/份</p>
        <span>33.6x3</span>
        <span>99.9￥</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
name: 'Cart'
}
</script>

<style lang="less" scoped>
  h2{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .cart {
    width: 3.39rem;
    margin:0 auto;
    height: 100%;
    padding: 10px;
    background-color: #44494b49;
    border-radius: 4px;
    border-radius: 4px;
    h3{
      margin-top: 20px;
      margin-left: 20px;
    }
    .cart-list {
      display: flex;
      margin-top:15px;
      // justify-content: baseline;
      img{
        margin-left: 20px;
        width: .46rem;
        height: .46rem;
      }
      .cart-item{
        width: 100%;
        margin-left: 20px;

        span:nth-child(2){
          font-size: .14rem;
          float: left;
          padding-top : 32px;
          color: #000000;

        }
        span:nth-child(3){
         float: right;
         margin-top : 32px;
          font-size: .14rem;
          color: #000000;
          line-height: .14rem;
        }
      }
    }
  }


</style>