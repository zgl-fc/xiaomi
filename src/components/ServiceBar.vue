<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>

</template>


<script>
export default {
  name: "service-bar",
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.service {
  padding: 33px 0;
  li {
    position: relative;
    width: 24.9%;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    color: #666;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top:-6px;
      display: inline-block;
      height: 34px;
      border-right: 1px solid #e5e5e5;
    }
    span {
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>