interface MenuBase {
    name:string,
    route:string,
}

interface MenuItem extends MenuBase{
    icon:string,
    children:MenuChildItem[]
}

interface MenuChildItem extends MenuBase{
    
}

export default defineAppConfig({
    title: 'Hello Nuxt',
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    },
    menus:[
        {
            name:'gpt',
            route:'/gpt',
            icon:'StarOutlined',
            children:[
                {
                    name:'chat',
                    route:'/chat',
                }
            ]
        }
    ]
  })