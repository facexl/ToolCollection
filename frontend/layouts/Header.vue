<template>
  <div class="app-header flex items-center justify-between">
    <div class="left flex">
      <div class="app-header-trigger flex items-center">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="$emit('update:collapsed',!collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="$emit('update:collapsed',!collapsed)"
        />
      </div>
      <a-breadcrumb class="flex items-center justify-center">
        <a-breadcrumb-item>{{ father }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ child }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div class="right">
      <a-dropdown style="vertical-align: bottom;">
        <a class="name">
          你好！
          <!-- {{ user.userInfo!.username }} -->
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <!-- <a-menu-item>
              <a
                href="javascript:;"
                @click="showModel"
              >用户设置</a>
            </a-menu-item> -->
            <a-menu-item>
              <a
                href="javascript:;"
                @click="outlogin"
              >退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined,MenuFoldOutlined,DownOutlined } from '@ant-design/icons-vue';
const router = useRouter()
const route = useRoute()

const appConfig = useAppConfig()

const filterRoutes = appConfig.menus

// 面包屑
const father = ref()
const child = ref()

const breadcrumbs = ref([])

watch(
  route,
  (v)=>{
    filterRoutes.forEach((it) => {
      it.children.forEach(item => {
        if (it.route+item.route === v.path) {
          father.value = it.name
          child.value = item.name
        }
      })
    })
  },
  {
    immediate:true
  }
)


defineEmits(['update:collapsed'])
   
defineProps({
  collapsed:{
    type:Boolean
  }
})



const outlogin = ()=>{
//   local.remove(config.token_key)
//   router.replace({
//     name: 'login',
//     query: {
//       redirect: location.pathname.replace(import.meta.env.BASE_URL,'')
//     }
//   })
}

</script>
<style lang="less" scoped>
.app-header{
    padding-right: 30px;
}
.app-header-trigger{
    height: 64px;
    line-height: 64px;
    vertical-align: top;
    padding: 0 22px;
    display: inline-block;
    cursor: pointer;
    -webkit-transition: all 0.3s, padding 0s;
    transition: all 0.3s, padding 0s;
    font-size: 20px;
    &:hover{
        background: rgba(0, 0, 0, 0.025);
    }
}
.menuTabs-box{
    display: flex;
    align-items: flex-end;
    height:64px;
    overflow: hidden;
}
.name{
    color:#333;
    font-size: 14px;
}
</style>
<style lang="less">
.app-header{
    .menuTabs-box{
        margin-left: 10px;
        .ant-tabs-nav{
            margin-bottom: 0;
        }
        .ant-tabs-tab-active{
            border-bottom-color: #f0f2f5 !important;
            background-color: #f0f2f5 !important;
        }
    }
}
</style>