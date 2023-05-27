<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">
        <span @click="transferLogin(true)" :class="{ isActive: !ifLogin }"
          >登录 |</span
        >
        <span @click="transferLogin(false)" :class="{ isActive: ifLogin }">
          注册</span
        >
      </div>
      <el-form
        v-if="ifLogin"
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="邮箱">
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-RectangleCopy"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="param.password">
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-RectangleCopy1"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="veritify">
          <el-input
            style="width: 60%"
            placeholder="验证码"
            v-model="param.veritify"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-yanzhengma"
              ></svg-icon>
            </template>
          </el-input>
          <div
            style="
              display: inline-block;
              height: 32px;
              width: 40%;
              text-align: right;
            "
          >
            <img src="#" style="width: 95%; height: 32px" alt="" />
          </div>
        </el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>

      <!-- 注册 -->
      <el-form
        v-else
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="邮箱">
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-RectangleCopy"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="param.password">
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-RectangleCopy1"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="veritify">
          <el-input
            style="width: 60%"
            placeholder="验证码"
            v-model="param.veritify"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <svg-icon
                className="iconMenu"
                iconName="icon-yanzhengma"
              ></svg-icon>
            </template>
          </el-input>
          <div
            style="
              display: inline-block;
              height: 32px;
              width: 40%;
              text-align: right;
            "
          >
            <div
              @click="verifySignUp"
              style="
                cursor: pointer;
                display: inline-block;
                border-radius: 5px;
                color: #fff;
                width: 90%;
                border: 1px solid #fff;
                text-align: center;
              "
            >
              验证邮箱
            </div>
            <!-- <img src="#" style="width: 95%; height: 32px" alt="" /> -->
          </div>
        </el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">注册</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { loginRequest, verifySignUp } from '@/api/login'
const router = useRouter()
const ifLogin = ref(true)
// =============== 切换登录注册===========
const transferLogin = (b) => {
  ifLogin.value = b
}

// ================ 登录 ==================
const param = reactive({
  username: '',
  password: '',
  veritify: '',
})

const rules = {
  username: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  veritify: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}
const login = ref(null)
const submitForm = () => {
  login.value.validate((valid) => {
    // console.log(valid)
    if (valid) {
      loginRequest(param).then(
        (res) => {
          // res.data：成功or失败处理
          // 成功：
          console.log(res)
          //
        },
        () => {}
      )
      ElMessage.success('登录成功')
      localStorage.setItem('ms_username', param.username)
      router.push('/')
    } else {
      ElMessage.error('登录失败')
      return false
    }
  })
}

// ================ 注册 ==================
const verifyEmail = () => {
  verifySignUp(param).then((res) => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
  // display: none;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
  &:hover {
    cursor: pointer;
  }
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
  :deep() .el-input-group__prepend {
    padding: 0 10px !important;
  }
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}

.iconMenu {
  color: #222;
  font-size: 24px;
}

.isActive {
  color: $bg-color !important;
}
</style>
