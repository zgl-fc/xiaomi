<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/" target="blank">小米商城</a><span>|</span>
      <a href="https://www.baidu.com/" target="blank">百度一下</a><span>|</span>
      <a href="https://github.com/" target="blank">github</a><span>|</span>
      <a href="https://www.vmall.com/" target="blank">华为商城</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>


<script>
export default {
  name: "NavFooter"
};
</script>


<style lang="scss" scoped>
  .footer {
    height: 234px;
    border-top:4px solid #FF7301;
    background-color: #333;
    font-family: FZLTHJW--GB1-0;
    font-size: 16px;
    color: #999;
    text-align: center;
    .footer-logo {
      margin-top:46px;
      margin-bottom:31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom:13px;
      }
    }
    .footer-link {
      margin-bottom: 10px;
      a {
        color: #999;
      }
      span {
        margin:0 10px;
      }
    }
    .copyright {
      .domain {
        color: #FF7301;
      }
    }
  }
</style>