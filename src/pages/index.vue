<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper
          ref="mySwiper"
          :options="swiperOption"
        >
          <!-- slides -->
          <swiper-slide
            v-for="(item, index) in slideList"
            :key="index"
          >
            <a :href="'/#/product/' + item.id">
              <img
                :src="item.img"
                alt=""
              ></a></swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
          <div
            class="swiper-button-prev"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-next"
            slot="button-next"
          ></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          href=""
          id=""
        ><img
            src="/imgs/ads/ads-1.png"
            alt=""
          ></a>
        <a
          href=""
          id=""
        ><img
            src="/imgs/ads/ads-2.jpg"
            alt=""
          ></a>
        <a
          href=""
          id=""
        ><img
            src="/imgs/ads/ads-3.png"
            alt=""
          ></a>
        <a
          href=""
          id=""
        ><img
            src="/imgs/ads/ads-4.jpg"
            alt=""
          ></a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img
            src="/imgs/banner-1.png"
            alt=""
          >
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img
                src="/imgs/mix-alpha.jpg"
                alt=""
              ></a>
          </div>
          <div class="list-box">
            <div
              class="list"
              v-for="(item,index) in list"
              :key="index"
            >
              <div
                class="item"
                v-for="(item1, index1) in item"
                :key="index1"
              >
                <span class="new-pro">新品</span>
                <div class="item-img"><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg"
                    alt=""
                  ></div>
                <div class="item-info">
                  <h3>Redmi K20 Pro 6GB+128GB</h3>
                  <p>骁龙855， 弹出全面屏</p>
                  <p class="price">2999元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        effect: "cube",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
      list: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="scss">
.swiper-box {
  .swiper-pagination-bullets {
    width: auto !important;
    left: 1120px !important;
  }
}
</style>
<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.index {
  .swiper-box {
    margin-bottom: 14px;
    .swiper-button-prev,
    .swiper-button-next {
      right: 0px;
      color: #666;
      &:hover {
        color: #fff;
        background-color: #66666663;
      }
    }
    .swiper-button-prev {
      left: 264px;
      padding: 10px 10px 10px 3px;
    }
    .swiper-button-next {
      padding: 10px 3px 10px 10px;
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-menu {
      position: absolute;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a29;
      .menu-wrap {
        width: 264px;
        height: 399px;
        .menu-item {
          line-height: 50px;
          font-size: 16px;
          a {
            position: relative;
            padding-left: 30px;
            display: block;
            color: #fff;
            font-weight: bold;
            &:hover {
              background-color: #ff6600;
            }
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
        }
      }
    }
  }
  .ads-box {
    @include flex();
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        height: 100%;
      }
    }
  }
  .banner {
    a {
      display: block;
      height: 130px;
    }
    img {
      width: 100%;
      height: 130px;
    }
  }
  .product-box {
    background-color: $colorJ;
    height: 740px;
    h2 {
      height: 72px;
      line-height: 72px;
      font-size: 22px;
      font-family: FZLanTingHeiS-R-GB;
      color: #333;
    }
    .wrapper {
      @include flex();
      height: 619px;
      .banner-left {
        height: 619px;
        margin-right: 16px;
        img {
          width: 224px;
          height: 100%;
        }
      }
      .list-box {
        .list {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
          width: 986px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            box-sizing: border-box;
            padding: 0 23px;
            width: 236px;
            height: 302px;
            background-color: #fff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
            }
            .item-img {
              width: 190px;
              height: 195px;
              img {
                height: 100%;
              }
            }
            .item-info {
              h3 {
                margin-bottom: 6px;
              }
              p {
                margin-bottom: 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>