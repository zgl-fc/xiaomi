<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button
          class="btn"
          @click="buy"
        >立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a
            href=""
            id=""
          >全球首款双频 GP</a>
          <span>|</span>
          <a
            href=""
            id=""
          >骁龙845</a>
          <span>|</span>
          <a
            href=""
            id=""
          >AI 变焦双摄</a>
          <span>|</span>
          <a
            href=""
            id=""
          >红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥{{product.price}}<s>￥{{product.price}}</s></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img
              src="/imgs/product/gallery-2.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="/imgs/product/gallery-3.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="/imgs/product/gallery-4.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="/imgs/product/gallery-5.jpg"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="/imgs/product/gallery-6.jpg"
              alt=""
            ></swiper-slide>
          <!-- Optional controls -->
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
      <div class="item-swiper-title">
        小米8 AI变焦双摄拍摄
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div
          class="video-bg"
          @click="showSlide='slideDown'"
        ></div>
        <div
          class="video-box"
          v-show="showSlide"
        >
          <div class="overlay"></div>
          <div
            class="video"
            :class="showSlide"
          >
            <span
              class="icon-close"
              @click="closeVideo"
            ></span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProductParam from "../components/ProductParam";
import "swiper/css/swiper.css";
export default {
  name: "product",
  components: {
    ProductParam,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showSlide: "", //控制动画效果
      product: {},
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
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
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`)
    },
    closeVideo() {
      this.showSlide = "slideUp";
      setTimeout(() => {
        this.showSlide = "";
      }, 600);
    },
  },
};
</script>

<style lang="scss">
.swiper-container {
  padding-bottom: 31px;
  .swiper-pagination-bullets {
    bottom: 0px;
    .swiper-pagination-bullet {
      width: 38px;
      height: 7px;
      border-radius: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.product {
  .content {
    .item-bg {
      background: url("/imgs/product/product-bg-1.png") no-repeat center;
      height: 718px;
      text-align: center;
      h2 {
        padding-top: 55px;
        font-size: 80px;
        font-family: PingFang SC;
        font-weight: bold;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 38px;
        color: #333;
        s {
          font-size: 26px;
          margin-left: 8px;
        }
      }
    }
    .item-bg-2 {
      background: url(/imgs/product/product-bg-2.png) no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3 {
      background: url(/imgs/product/product-bg-3.png) no-repeat center;
      height: 638px;
      background-size: cover;
      margin-bottom: 36px;
    }
    .item-swiper {
      img {
        width: 100%;
      }
    }
    .item-swiper-title {
      box-sizing: border-box;
      height: 93px;
      padding-top: 23px;
      text-align: center;
      color: #333;
      font-size: 18px;
    }
    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        width: 1226px;
        height: 540px;
        background: url("/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        margin: 0 auto 120px;
        cursor: pointer;
      }
    }
    .video-box {
      .overlay {
        @include position(fixed);
        background-color: #333333;
        opacity: 0.4;
        z-index: 9;
      }
      @keyframes slideDown {
        from {
          top: -50%;
          opacity: 0;
        }
        to {
          top: 50%;
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          top: 50%;
          opacity: 1;
        }
        to {
          top: -50%;
          opacity: 0;
        }
      }
      .video {
        @include position(fixed, -50%, 50%, 1000px, 536px);
        transform: translate(-50%, -50%);
        z-index: 10;
        opacity: 1;
        &.slideDown {
          animation: slideDown 0.6s linear;
          top: 50%;
        }
        &.slideUp {
          animation: slideUp 0.6s linear;
        }

        .icon-close {
          position: absolute;
          top: 20px;
          right: 20px;
          @include bgImg(20px, 20px, "/imgs/icon-close.png");
          cursor: pointer;
          z-index: 11;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
      }
    }
  }
}
</style>