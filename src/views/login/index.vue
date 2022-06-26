<template>
  <div class="login-container">
    <div class="back_image">
      <img
        src="https://image.api.srliforever.ltd/images/2022/05/28/wallhaven-nz799y.jpg"
        alt=""
      >
    </div>
    <div class="lay_header">
      <div class="lay_container">
        <div class="right__nav__register">
          <el-link
            class="link"
            @click="type = 1"
          >
            登录
          </el-link>
          <el-link
            class="link"
            @click="type = 2"
          >
            注册
          </el-link>
        </div>
      </div>
    </div>

    <component :is="typeCom" />

    <div class="end_bottom_oa">
      <div>版权所属版权所属版权所属版权所属版权所属</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    loginView: () => import('./login.vue')
  },
  data() {
    return {
      type: 1,
      typeCom: 'loginView'
    }
  },
  watch: {
    type(val) {
      if (val === 1) {
        this.typeCom = 'loginView'
      } else {
        this.$router.replace('/register')
      }
    }
  }

}
</script>

<style lang="scss">

$bg:#283443;
$light_gray:#fff;
$cursor:#fff;

.back_image {
  position:fixed;
  width:100vw;
  height:100vh;

  img {
    object-fit:cover;
  }
}

.end_bottom_oa {
  position:fixed;
  width:100vw;
  bottom:0;
  height:54px;
  color:#FFF;
  background:rgba(0, 0, 0, 0.8);
  line-height:54px;
  text-align:center;

  div {
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

  }
}

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color:$cursor;
  }
}

/* reset element-ui css */
.login-container {
   .el-input {
    display:inline-block;
    height:47px;
    width:85%;

    input {
      background:transparent;
      border:0px;
      -webkit-appearance:none;
      border-radius:0px;
      padding:12px 5px 12px 15px;
      color:$light_gray;
      height:47px;
      caret-color:$cursor;

      &:-webkit-autofill {
        box-shadow:0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color:$cursor !important;
      }
    }
  }

  .el-form-item {
    border:1px solid rgba(255, 255, 255, 0.1);
    background:rgba(0, 0, 0, 0.1);
    border-radius:5px;
    color:#454545;
  }
}
</style>

<style lang="scss"  scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height:100%;
  width:100%;
  background-color:$bg;
  overflow:hidden;
  position:relative;

 ::v-deep .login-form {
    position:absolute;
    width:520px;
    max-width:100%;
    padding:60px 35px 0;
    margin:0 auto;
    overflow:hidden;
    right:180px;
    top:160px;
    transition:all .3s;
  }

 ::v-deep .login-infomation {
    position:absolute;
    left:80px;
    top:160px;
    padding:20px;
    background-color:rgba(255, 255, 255, 0.6);

    display:none;
  }

  .lay_header {
    position:absolute;
    width:100vw;
    background-color:rgba(236, 245, 255, 0.8);
    padding:10px 0;

    .lay_container {
      width:100%;
      max-width:1520px;
      margin:auto auto;
      display:flex;
      justify-content:flex-end;

      .right__nav__register {
        display:flex;

        ::v-deep .link, .el-link {
          margin-left:20px;
        }
      }
    }
  }

 ::v-deep .svg-container {
    padding:6px 5px 6px 15px;
    color:$dark_gray;
    vertical-align:middle;
    width:30px;
    display:inline-block;
  }

 ::v-deep  .title-container {
    position:relative;

    .title {
      font-size:26px;
      color:$light_gray;
      margin:0px auto 40px auto;
      text-align:center;
      font-weight:bold;
    }
  }

 ::v-deep .show-pwd {
    position:absolute;
    right:10px;
    top:7px;
    font-size:16px;
    color:$dark_gray;
    cursor:pointer;
    user-select:none;
  }
}

</style>
