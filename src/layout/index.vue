<template>
  <div class="about">
    <v-header />
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import vHeader from './Header.vue'
import vSidebar from './Sidebar.vue'
import vTags from './Tags.vue'
import { useConfigStore } from '../store/config'
const store = useConfigStore()
const tagsList = computed(() => store.tagsList.map((item) => item.name))
const collapse = computed(() => store.collapse)
</script>
