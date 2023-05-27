<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">


        <template v-if="item.children">
          <el-sub-menu :index="item.path" :key="item.path">
            <template #title>
              <i :class="item.meta.icon"></i>
              <span>666{{ item.meta.title }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.path">
              <!-- <el-sub-menu
                v-if="subItem.children"
                :index="subItem.path"
                :key="subItem.path"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.children"
                  :key="i"
                  :index="threeItem.index"
                >
                  888{{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu> -->
              <el-menu-item :index="subItem.path"
                >888{{ subItem.meta.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>



        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <i :class="item.meta.icon"></i>
            <template #title>777{{ item.meta.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useConfigStore } from '../store/config'
import { useRoute, useRouter } from 'vue-router'
import router from '../router/index'
console.log(router)
const router1 = useRouter()
const items = ref([
  // {
  //   icon: 'el-icon-lx-home',
  //   index: '/dashboard',
  //   title: '系统首页',
  // },
  // {
  //   icon: 'el-icon-lx-cascades',
  //   index: '/table',
  //   title: '基础表格',
  // },
  // {
  //   icon: 'el-icon-lx-copy',
  //   index: '/tabs',
  //   title: 'tab选项卡',
  // },
  // {
  //   icon: 'el-icon-lx-calendar',
  //   index: '3',
  //   title: '表单相关',
  //   subs: [
  //     {
  //       index: '/form',
  //       title: '基本表单',
  //     },
  //     {
  //       index: '/upload',
  //       title: '文件上传',
  //     },
  //     {
  //       index: '4',
  //       title: '三级菜单',
  //       subs: [
  //         {
  //           index: '/editor',
  //           title: '富文本编辑器',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icon: 'el-icon-lx-emoji',
  //   index: '/icon',
  //   title: '自定义图标',
  // },
  // {
  //   icon: 'el-icon-pie-chart',
  //   index: '/charts',
  //   title: 'schart图表',
  // },
  // {
  //   icon: 'el-icon-lx-global',
  //   index: '/i18n',
  //   title: '国际化功能',
  // },
  // {
  //   icon: 'el-icon-lx-warn',
  //   index: '7',
  //   title: '错误处理',
  //   subs: [
  //     {
  //       index: '/permission',
  //       title: '权限测试',
  //     },
  //     {
  //       index: '/404',
  //       title: '404页面',
  //     },
  //   ],
  // },
  {
    icon: 'el-icon-lx-redpacket_fill',
    index: '/donate',
    title: '支持作者',
  },
])
items.value = router.options.routes

const route = useRoute()
console.log(route, router1)
const onRoutes = computed(() => {
  return route.path
})

const store = useConfigStore()
const collapse = computed(() => store.collapse)
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
