<template>
    <div id="footer">
        <ul class="footer-wrep">
            <li :class="{'item':true,   'active': index===0 }"
                v-for="(item,index,) in footerList"
                :key="index"
                  >
                <router-link :to="item.to" >
                  <p class="iconfont" v-html="item.icon"/>
                  <p class="title">{{item.text}}</p>
                </router-link>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: "FooterPart",
    setup(){
            const footerList =[
                {icon:"&#xe62e;",text:"首页",to:{name:"HomeView"}},
                {icon:"&#xe897;",text:"购物车",to:{name:"Cart"}},
                {icon:"&#xe897;",text:"订单",to:{name:"Order"}},
                {icon:"&#xe70b;",text:"我的",to:{name:"Login"}}
            ];
            const fa=[
              {a:0},{a:1},{a:2},{a:3}
            ]
            return {
                footerList
            }
    },

}
</script>

<style scoped lang="less">
 #footer{
        position: fixed;
        left:0;
        bottom:0;
        width: 100%;
        height: .5rem;
        padding:0 .18rem;
        border:.01rem solid #F1F1F1;
        box-sizing: border-box;
        background-color: #fff;
        .footer-wrep{
            display: flex;
            width: 100%;
            .item{
                height: .49rem;
                flex: 1;
                text-align: center;
                a{
                  color: #333;
                    .iconfont{
                      margin:.07rem 0 .02rem 0;
                    }
                    .title{
                      font-size: 20px;
                      line-height: .14rem;
                      transform: scale(.5,.5);
                      transform-origin: center top;
                    }
                    &.router-link-exact-active {
                      color: red;
                    }
                }

            }
          
            
        }
}
    
</style>