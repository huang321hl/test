<template>
  <div class="login-wrapper">
    <!-- <div id="stars1" />
    <div id="stars2" />
    <div id="stars3" /> -->
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input
            v-model="username"
            type="text"
            key="username-v3"
            required="true"
            autocomplete="new-password"
            :disabled="loginFlag"
          />
          <label>用户名</label>
        </div>
        <div class="user-box">
          <input
            v-model="password"
            type="password"
            key="password-v3"
            required="true"
            autocomplete="new-password"
            :disabled="loginFlag"
          />
          <label>密码</label>
        </div>
        <div class="user-box" style="text-align: left">
          <input
            v-model="password"
            type="password"
            key="password-v3"
            required="true"
            :disabled="loginFlag"
            style="width: 60%"
          />
          <img src="#" style="display: inline-block; width: 100px; height: 30px" alt="">
          <label>验证码</label>
        </div>
        <a :class="{ noClick: !(username && password) }" @click="handleLogin">
          <!-- <span></span> <span></span>
          <span></span>
          <span></span> -->

          login</a
        >
      </form>
    </div>
    <!-- 登录验证 -->
    <!-- <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <span>
        验证码验证
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelLogin">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../../store/user'
import { login } from '@/api/login'
// src\api\login.ts
// const userStore = useUserStore()//
// console.log(userStore.name)
// https://github.com/brix/crypto-js
// https://www.cnblogs.com/huiguo/p/16601076.html
// import sha256 from 'crypto-js'
// https://juejin.cn/post/7007221498649772063

const username = ref()
const password = ref()
const loginFlag = ref(false)
const centerDialogVisible = ref(false)

const handleLogin = () => {
  loginFlag.value = true // 关闭可编辑按钮
  login({}).then(
    (res) => {
      // res.data：成功or失败处理
      // 成功：
      console.log('等待验证', res)
      //
    },
    () => {}
  )
  centerDialogVisible.value = true
}
// ================================= login =====================================

// ================================= dialog: cancelLogin ===============================
// const cancelLogin = () => {
//   centerDialogVisible.value = false
//   loginFlag.value = false
// }
</script>

<style lang="scss" scoped>
.login-wrapper {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-box {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgb(33 33 33);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }
    .user-box {
      position: relative;
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
        &:focus ~ label {
          top: -20px;
          left: 0;
          color: #03e9f4;
          font-size: 12px;
        }
        &:valid ~ label {
          top: -20px;
          left: 0;
          color: #03e9f4;
          font-size: 12px;
        }
        &:disabled ~ label {
          top: -20px;
          left: 0;
          color: #03e9f4;
          font-size: 12px;
        }
      }
    }
  }
}
.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  cursor: pointer;
  background: #143b3d;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 5px #03e9f4,
    0 0 10px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

// 登录a标签
.noClick:hover {
  cursor: not-allowed !important;
}
// 登录验证弹窗
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
