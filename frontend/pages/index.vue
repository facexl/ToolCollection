<template>
    <div>
      hello world
      <a-button type="primary">123</a-button>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  const runtimeConfig = useRuntimeConfig()
  
  console.log(runtimeConfig)
  
  const appConfig = useAppConfig()
  
  console.log(appConfig)
  
  </script>