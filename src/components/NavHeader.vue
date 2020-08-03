<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username" >{{username}}</a>
          <a href="/#/login" v-if="!username">登陆</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a
            href="javascript:;"
            class="my-cart"
          ><span class="icon-cart"></span>购物车({{count}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-log">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a
                    href="/#/product/31"
                    target="_blank"
                  >
                    <div class="pro-img"><img
                        src="/imgs/nav-img/nav-1.png"
                        alt=""
                      ></div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
          </div>
          <div class="item-menu">
            <span>家电</span>
          </div>
        </div>
        <div class="header-serach">
          <div class="wrapper">
            <input
              type="text"
              name="keyword"
            >
            <a href="javascript:;">
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import {mapState} from 'vuex'
export default {
  name: "NavHeader",
  methods:{
    logout() {
      
    }
  },
  computed:{
    ...mapState(['username','count'])
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    background-color: #333333;
    line-height: 39px;
    .container {
      @include flex();
      a {
        display: inline-block;
        font-weight: bold;
        margin-right: 17px;
        color: rgba(176, 176, 176, 1);
      }
      .my-cart {
        width: 110px;
        background-color: #666666;
        text-align: center;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
      height: 112px;
      .header-log {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 623px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          padding: 47px 10px;
          span {
            font-size: 16px;
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
border-top:1px solid #E5E5E5;
            }
          }
          .children {
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 112px;
            z-index: 10;
            width: 1226px;
            height: 0px;
            background-color: #FFF;
            
            transition: height 0.5s;
            overflow: hidden;
            .product {
              float: left;
              top:22px;
              width: 204px;
              text-align: center;
              padding-top:26px;
              a {
                display: inline-block;
                .pro-img {
                  img {
                    width: auto;
                    height: 111px;
                  }
                }
                .pro-name {
                  color:$colorB;
                  margin-top:19px;
                  margin-bottom: 8px;
                }
                .pro-price {
                  color:$colorA
                }
              }
              &::after {
                content: '';
                position: absolute;
                top:33px;
                display: inline-block;
                height: 99px;
                border-right: 1px solid #D7D7D7;
              }
              &:last-child::after {
                display: none;
              }
            }
          }
        }
      }
      .header-serach {
        .wrapper {
          height: 50px;
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          input {
            display: inline-block;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 263px;
            height: 50px;
            outline: none;
          }
          a {
            width: 55px;
            height: 50px;
            text-align: center;
            padding-top: 30px;
            i {
              @include bgImg(18px, 18px, $img: "/imgs/icon-search.png");
            }
          }
        }
      }
    }
  }
}
</style>