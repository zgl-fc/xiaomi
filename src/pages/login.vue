<template>
  <div class="login">
    <div class="container">
      <div class="header-log">
        <a href="/#/index"><img
            src="/imgs/login-logo.png"
            alt=""
          ></a>
      </div>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-form">
          <div class="login-title">
            <a
              href=""
              class="active"
            >账号登陆</a>
            <span>|</span>
            <a href="">扫码登陆</a>
          </div>
          <div class="login-input">
            <div class="input">
              <input
                type="text"
                placeholder="邮箱/手机号/小米ID"
                v-model="username"
              >
            </div>
            <div class="input">
              <input
                type="text"
                placeholder="密码"
                v-model="password"
              >
            </div>
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="resigter-button">
            <div class="resigter-left">
              <a
                href=""
                class="modile-register"
              >手机登陆注册</a>
            </div>
            <div class="resigter-right">
              <a
                href=""
                class="register"
              >立即注册</a>
              <span>|</span>
              <a
                href=""
                class="forget-pass"
              >忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-links">
        <a href="javascript:;">简体</a>
        <span>|</span>
        <a href="javascript:;">繁体</a>
        <span>|</span>
        <a href="javascript:;">English</a>
        <span>|</span>
        <a href="javascript:;">常见问题</a>
        <span>|</span>
        <a href="javascript:;">隐私策略</a>
      </div>
      <div class="footer-intro">
        <p>小米公司版权所有-京ICP备10046444-<i></i>京公网安备11010802020134号-京ICP证110507号</p>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  name:'login',
  data() {
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login() {
      const {username, password} = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId',res.id,{expires:'1h'});
        this.$router.push('/index')
        this.$store.dispatch('saveUserName', username)
      })
    }
  }

};
</script>


<style lang="scss" scoped>
.login {
  .header-log {
    height: 112px;
    img {
      width: 204px;
      height: 112px;
    }
  }
  .login-body {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    background-color: #666;
    position: relative;
    .container {
      height: 576px;
      .login-form {
        position: absolute;
        top: 50%;
        right: 0;
        box-sizing: border-box;
        width: 410px;
        height: 510px;
        padding: 40px 31px 0;
        background-color: #fff;
        text-align: center;
        transform: translate(0, -50%);
        .login-title {
          margin-bottom: 49px;
          font-size: 24px;
          a {
            color: #666;
            &.active {
              color: #ff6600;
            }
          }
          span {
            margin: 0 31px;
            color: #d7d7d7;
          }
        }
        .login-input {
          .input {
            padding: 1px 18px;
            border: 1px solid #e5e5e5;
            &:first-child {
              margin-bottom: 20px;
            }
            &:last-child {
              margin-bottom: 30px;
            }
            input {
              width: 328px;
              height: 48px;
              outline: none;
              border: none;
            }
          }
        }
        .btn-box {
          margin-bottom: 14px;
          .btn {
            display: inline-block;
            width: 348px;
            height: 50px;
            line-height: 50px;
            background-color: #FF6600;
            color: #FFF;
            font-size: 16px;
          }
        }
        .resigter-button {
          display: flex;
          justify-content: space-between;
          .resigter-left {
            a {
              color: #ff6600;
              font-size: 14px;
              font-weight: bold;
            }
          }
          .resigter-right {
            .register,
            .forget-pass {
              color: #999;
              font-size: 14px;
            }
            span {
              margin: 0 7px;
              color: #d7d7d7;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .footer {
    box-sizing: border-box;
    height: 391px;
    padding-top: 252px;
    .footer-links {
      text-align: center;
      font-size: 14px;
      color: #999;
      margin-bottom: 19px;
      a {
        color: #999;
      }
      span {
        margin: 0 2px;
      }
    }
    .footer-intro {
      text-align: center;
      color: #999;
      i {
        display: inline-block;
        width: 21px;
        height: 21px;
        background: url('/imgs/login-footer.png') no-repeat center;
      }
    }
  }
}
</style>