import config from '@/authconfig/index'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: config.apiKey,
});

const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    // const completion = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: body.prompt,
    // });
    const res = await $fetch(`${config.proxyUrl}/v1/chat/completions`,{
        method:'post',
        headers:{
            Authorization:`Bearer ${config.apiKey}`
        },
        body:{
            model: "gpt-3.5-turbo",
            messages:[
                {role: "user", content: "Hello world"}
            ]
        }
    })
    console.log(res)

    return res.choices
})