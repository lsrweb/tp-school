<template>
  <div class="">
    <div class="register_bg">
      <img
        src="../../assets/svg.png"
        alt=""
      >
    </div>

    <div v-if="activeStep == 1" class="el_form login-container">
      <div class="login_container_title">
        教师评教系统校园端 - 注册
      </div>
      <el-form
        ref="ruleForm"
        :model="register"
        :rules="rules"
        label-width="100px"
        class="login-form "
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="phone">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.number.trim="register.phone"
            placeholder="请输入注册手机号"
          />
        </el-form-item>
        <el-form-item prop="email">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.number.trim="register.email"
            placeholder="请输入联系邮箱"
          />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.trim="register.password"
            placeholder="请输入登录密码"
          />
        </el-form-item>
        <el-form-item prop="school_name">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.trim="register.school_name"
            placeholder="请输入申请学校"
          />
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        :loading="loadSub"
        @click="submitForm('ruleForm')"
      >立即创建
      </el-button>

    </div>
    <div v-else-if="activeStep == 2" class="el_form login-container">
      <!--   上传申请资料   -->
      <el-form
        ref="applyForm"
        :model="register"
        :rules="rules"
        label-width="100px"
        class="el_form login-container"
        auto-complete="on"
        label-position="left"
      >

        <el-form-item prop="email">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.number.trim="register.email"
            placeholder="请输入联系邮箱"
          />
        </el-form-item>
        <el-form-item prop="school_name">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.trim="register.school_name"
            placeholder="请输入申请学校"
          />
        </el-form-item>
        <el-form-item prop="school_code">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            v-model.trim="register.school_code"
            placeholder="请输入院校代码"
          />
        </el-form-item>
        <el-form-item prop="auditData" class="audioData">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-upload
            ref="uploadAssets"
            class="uploadFiles"
            :auto-upload="false"
            :http-request="HttpRequest"
            multiple
            :limit="3"
            :file-list="fileList"
            action=""
            :on-change="fileChange"
            :on-remove="fileRemove"
            @before-upload="fileBefore"
          >
            <el-button slot="trigger" :loading="loadingSub" size="small" type="primary">选取文件</el-button>
            <el-button v-if="fileList.length > 0" :loading="loadingSub" style="margin-left: 10px;" size="small" type="success" @click="confirmSubmit">上传资料</el-button>
          </el-upload>

        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;"
        :loading="loadMit"
        @click="submitApply('applyForm')"
      >提交申请
      </el-button>
    </div>
    <div v-else />

    <el-steps
      :active="activeStep"
      simple
      class="step"
    >
      <el-step
        title="注册账号"
        icon="el-icon-edit"
      />
      <el-step
        title="资料填写"
        icon="el-icon-upload"
      />
      <el-step
        title="等待审核"
        icon="el-icon-picture"
      />
    </el-steps>
    <div style="height: 300px;" class="step_pe">
      <el-steps direction="vertical" :active="1">
        <el-step title="注册账号" description="这是一段很长很长很长的描述性文字" />
        <el-step title="资料填写" description="这是一段很长很长很长的描述性文字" />
        <el-step title="等待审核" description="这是一段很长很长很长的描述性文字" />
      </el-steps>
    </div>

  </div>
</template>

<script>
import { uploadFile } from '@/api/files'
import { Message } from 'element-ui'
import { subMitCheckInfo } from '@/api/user'

const rules = {
  phone: [
    { required: true, message: '请输入注册手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
  ],
  email: [
    { required: true, message: '请输入联系邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, message: '邮箱格式不正确' }
  ],
  password: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 6, max: 16, message: '请输入6-16位密码', trigger: 'blur' }
  ],
  school_name: [
    { required: true, message: '请输入申请学校', trigger: 'blur' }
  ]

}

export default {
  name: 'Register',
  data() {
    return {
      fileList: [],
      register: {
        phone: '13954967415',
        email: 'siriforever.ltd@gmail.com',
        password: '1233121',
        school_name: '21312'
      },
      rules,
      activeStep: 1,
      loadSub: false,
      loadingSub: false,
      loadMit: false
    }
  },
  methods: {
    // 确认注册
    submitForm(formName) {
      this.loadSub = true
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const endResult = await this.$store.dispatch('user/register', this.register)
          if (endResult.code == 0 && endResult?.data?.isCheck == null) {
            setTimeout(() => {
              this.activeStep = 2
              this.register.id = endResult?.data?.account_id
              this.loadSub = false
            }, 500)
          } else {
            this.loadSub = false
          }
          console.log(endResult)
        }
      })
    },
    submitApply(formName) {
      this.loadMit = true
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          subMitCheckInfo(this.register).then(res => {
            console.log(res)
          })
          this.loadMit = false
        }
      })
    },
    // HttpRequest
    HttpRequest(item) {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('file', item.file)
        formData.append('type', 'file')
        uploadFile(formData).then(res => {
          if (res.code == 0) {
            Message.info(res?.message)
          } else {
            this.register.auditData = res?.data?.url
            Message.success(res?.message)
          }
        })
      })
    },
    fileChange(file, fileList) {
      this.fileList = fileList
    },
    fileRemove(file) {
      this.fileList.splice(this.fileList.indexOf(file), 1)
    },
    fileBefore() {
      console.log('befor')
    },
    confirmSubmit() {
      this.$refs.uploadAssets.submit()
    }
  }
}
</script>
<style lang="scss">

$bg:#283443;
$light_gray:#fff;
$cursor:#fff;

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
      // 修改placeholder颜色
      &::-webkit-input-placeholder {
        color:#FFF !important;
      }

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

    .el-form-item__content {
      margin-left:0 !important;
    }
    //.el-form-item__error{
    //  color: #000 !important;
    //  margin-top: 2px;
    //}
  }
}
</style>
<style scoped lang="scss">
$dark_gray:#fff;

.register_bg {
  position:fixed;
  width:100vw;
  height:100vh;
  z-index: -1;

  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
}

.el_form {
  max-width:520px;
  margin:0 auto;
  padding-top:80px;

  transition:all .3s;

  .login_container_title {
    margin-bottom: 20px;
    color: #FFF;
    font-size: 18px;
    text-align: center;
  }
}

.step {
  width:60%;
  margin:0 auto;
  position:fixed;
  bottom:60px;
  left:50%;
  transform:translateX(-50%);
}
.step_pe{
  display: none;
  width:60%;
  margin:0 auto;

}

.svg-container {
  padding:6px 5px 6px 15px;
  color:$dark_gray;
  vertical-align:middle;
  width:30px;
  display:inline-block;
}

.audioData {
  ::v-deep .el-form-item__content{
    display: flex;
    line-height: 30px;
    //align-items: center;
    .uploadFiles {
      margin-left: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}

@media screen and(max-height:700px) {
  .step {
    position: unset;
    transform: none;
  }
}
@media screen and(max-width: 1024px) {
  .el_form {
    padding: 120px 20px 0 20px;
  }
  .step {
    display: none;
  }
  .step_pe {
    display: block;
  }
  .login-container {
    padding-top: 30px;
  }
}
</style>
