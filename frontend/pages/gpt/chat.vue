<template>
  <div>
    <a-input
      v-model:value="input"
      @keydown.enter="send"
    />
  </div>
</template>
<script lang="ts" setup>

const input = ref('')

const send = ()=>{
    $fetch(`/api/chat`,{
        method:'post',
        body:{
            prompt: input.value,
        }
    }).then(res=>{
        console.log(res)
    })
}
</script>