<template>
  <div class="detail">
    <product-param :title="product.name">
    </product-param>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper fl">
          <swiper :options="swiperOption">
            <swiper-slide><img
                src="/imgs/detail/phone-1.jpg"
                alt=""
              ></swiper-slide>
            <swiper-slide><img
                src="/imgs/detail/phone-2.jpg"
                alt=""
              ></swiper-slide>
            <swiper-slide><img
                src="/imgs/detail/phone-3.jpg"
                alt=""
              ></swiper-slide>
            <swiper-slide><img
                src="/imgs/detail/phone-4.jpg"
                alt=""
              ></swiper-slide>
            <!-- Optional controls -->
            <div
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
        </div>
        <div class="content fr">
          <h2 class="item-title">{{product.name}}</h2>
          <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="delivery">小米自营</div>
          <div class="item-price">{{product.price}}元<span class="del">1999元</span></div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div
              class="phone fl"
              :class="{'checked':version==1}"
              @click="version=1"
            >6GB+64GB 全网通</div>
            <div
              class="phone fr"
              :class="{'checked':version==2}"
              @click="version=2"
            >4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color"></span>
              深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{product.name}} {{checkPhoneInfo}} 深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn-group">
            <a
              href="javascript:;"
              class="btn btn-huge fl"
              @click="addCart"
            >加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import ProductParam from "../components/ProductParam";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "Detail",
  components: {
    ProductParam,
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      version: 1,
      product: {},
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res;
      });
    },
    addCart() {},
  },
  computed:{
    checkPhoneInfo() {
      return this.version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.detail {
  .wrapper {
    .swiper {
      background-color: #fff;
      width: 565px;
      height: 617px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      width: 586px;
      height: 870px;
      .item-title {
        padding-top: 30px;
        font-size: 28px;
        margin-bottom: 16px;
        color: #333;
      }
      .item-info {
        font-size: 14px;
        color: #999;
        margin-bottom: 14px;
      }
      .delivery {
        color: #ff6700;
        font-size: 16px;
        margin-bottom: 14px;
      }
      .item-price {
        color: #ff6700;
        font-size: 20px;
        margin-bottom: 25px;
        .del {
          margin-left: 10px;
          color: #999;
          font-size: 14px;
          text-decoration: line-through;
        }
      }
      .line {
        border: 1px solid #e5e5e5;
        margin-bottom: 20px;
      }
      .item-addr {
        position: relative;
        box-sizing: border-box;
        height: 108px;
        padding-top: 31px;
        padding-left: 64px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        font-size: 14px;
        .icon-loc {
          position: absolute;
          top: 30px;
          left: 34px;
          @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
        }
        .addr {
          color: #666;
          margin-bottom: 15px;
        }
        .stock {
          color: #ff6700;
        }
      }
      .item-version,
      .item-color {
        margin-top: 30px;
        h2 {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      .item-version,
      .item-color {
        .phone {
          position: relative;
          width: 287px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: #333333;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
          span {
            color: #666666;
            margin-left: 15px;
          }
          .color {
            position: absolute;
            top: 17px;
            left: 78px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #666666;
          }
          &.checked {
            border: 1px solid #ff6600;
            color: #ff6600;
          }
        }
      }
      .item-total {
        height: 108px;
        background: #fafafa;
        padding: 24px 33px 29px 30px;
        font-size: 14px;
        margin-top:10px;
        margin-bottom: 30px;
        box-sizing: border-box;
        .phone-total {
          font-size: 24px;
          color: #ff6600;
          margin-top: 18px;
        }
      }
    }
  }
}
</style>