<template>
    <a-layout
      class="app-container"
      style="min-height: 100vh"
    >
      <Aside
        class="app-aside"
        :collapsed="collapsed"
      />
      <a-layout
        class="app-content"
        :class="{'app-content-small':collapsed}"
      >
        <a-layout-header style="background: #fff; padding: 0">
          <Header v-model:collapsed="collapsed" />
        </a-layout-header>
        <div style="padding:10px 0 0 10px">
          <div style="background:#fff;padding:12px;min-height:calc(100vh - 74px);border-radius: 4px;position: relative;">
            <slot></slot>
          </div>
        </div>
      </a-layout>
    </a-layout>
  </template>
  <script setup lang="ts">
  import Header from './Header.vue'
  import Aside from './Aside.vue'

  
  const collapsed = ref<boolean>(false)
  
  </script>
  <style lang="less" scoped>
  .app-aside{
      position: fixed;
      height:100vh;
      z-index:2;
      overflow-y: scroll;
  }
  .app-content{
      padding-left: 200px;
  }
  .app-content-small{
      padding-left: 80px;
  }
  </style>
  <style lang="less">
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    background-position: center;
    background-size: cover;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  </style>
  