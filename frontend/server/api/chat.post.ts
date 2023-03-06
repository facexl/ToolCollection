import config from '@/authconfig/index'
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return await $fetch(config.wzgapi,{
        method:'post',
        body:{
            fn:body.fn,
            pwd:config.pwd
        }
    })
})