<template>
  <a-layout-sider :collapsed="collapsed">
    <div class="aside-top flex items-center justify-center">
      <span v-if="!collapsed">{{ appConfig.title }}</span>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      theme="dark"
      mode="inline"
      :style="{ borderRight: 0 }"
    >
      <div
        v-for="(item,i) in filterRoutes"
        :key="String(i)"
      >
        <a-sub-menu
          :key="String(i)"
        >
          <template #title>
            <span>
              <template v-if="item.icon">
                <component :is="nameToComponents[item.icon]" />
              </template>
              <span>{{ item.name }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="(it,oi) in item.children"
            :key="`${i}-${oi}`"
            @click="$router.push({path:item.route+it.route})"
          >
            {{ it.name }}
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
import { UserOutlined,StarOutlined,ScheduleOutlined,GiftOutlined,ApartmentOutlined,ProfileOutlined,WhatsAppOutlined,ToolOutlined,PayCircleOutlined,SafetyOutlined,SettingOutlined,PieChartOutlined } from '@ant-design/icons-vue';
const route = useRoute()
const nameToComponents = {
  StarOutlined,
  UserOutlined,
  ScheduleOutlined,
  GiftOutlined,
  ApartmentOutlined,
  ProfileOutlined,
  WhatsAppOutlined,
  ToolOutlined,
  PayCircleOutlined,
  SafetyOutlined,
  SettingOutlined,
  PieChartOutlined
}
const router = useRouter()
defineProps({
  collapsed:{
    type:Boolean
  }
})
// 子菜单选中 eg:['0-1']
const selectedKeys = ref<string[]>([])
// 父级菜单open eg:['0']
const openKeys =  ref<string[]>([])

const appConfig = useAppConfig()

const filterRoutes = ref(appConfig.menus)

const initHighLightRoute = ()=>{
  filterRoutes.value.forEach((it, i) => {
    it?.children.forEach((item,oi) => {
      if (it.route+item.route === route.path) {
        openKeys.value = [String(i)]
        selectedKeys.value = [`${i}-${oi}`]
      }
    })
  })
}

// 直接登录系统会重定向到 index 中间页 权限判定之后才去其他菜单  
// 这里中间页跳转完成后 重新展开对应菜单  
const unwatch = router.afterEach((to,from)=>{
  unwatch()
  if(from.name==='index'){
    initHighLightRoute()
  }
})

onMounted(()=>{
  initHighLightRoute()
})
</script>
<style lang="less" scoped>
.aside-top{
    color:#fff;
    font-size: 18px;
    font-weight: 500;
    height:64px;
}
</style>
