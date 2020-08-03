<template>
  <div
    class="nav-bar"
    ref="navRef"
    :class="{'isFixed':isFixed}"
  >
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "product-param",
  props: {
    title: String,
  },
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const navTOP =
        this.$refs.navRef.offsetTop + this.$refs.navRef.offsetHeight || 0;
      this.isFixed = scrollTop > navTOP;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.product-param {
  height: 70px;
}
.nav-bar {
  line-height: 70px;
  height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
    z-index:10;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: 400;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        font-size: 14px;
        color: $colorC;
        &:nth-child(5) {
          margin-right: 10px;
        }
        &:hover {
          color:$colorA;
        }
      }
    }
  }
}
</style>