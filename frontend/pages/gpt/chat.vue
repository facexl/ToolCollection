<template>
  <div>
    <a-input
      v-model="input"
      @keydown.enter="send"
    />
  </div>
</template>
<script lang="ts" setup>
const input = ref('')
const send = ()=>{
    const fn = `return function hello(api,p){
    return new p((resolve)=>{
        api.sendMessage(${input.value}).then(res=>{
            resolve(res)
        })
    })
}`
    $fetch(`/api/chat`,{
        method:'post',
        body:{
            fn
        }
    }).then(res=>{
        console.log(res.detail.choices[0].text)
    })
}
</script>