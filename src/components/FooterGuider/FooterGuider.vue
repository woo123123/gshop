<template>
  <div class="footer">
    <span v-for="item in menu" :key='item.route' class="menuItem"
      :class="{active:'/'+item.route === $route.path}" @click="goto(item.route)">
      <i class="iconfont" :class="item.icon"></i>
      <div>{{item.name}}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FooterGuider',
  data () {
    return {
      menu: [
        {
          icon: 'icon-waimai',
          name: '外卖',
          route: 'MSite'
        },
        {
          icon: 'icon-sousuo',
          name: '搜索',
          route: 'Search'
        },
        {
          icon: 'icon-dingdanguanli',
          name: '订单',
          route: 'Order'
        },
        {
          icon: 'icon-wodedangxuan',
          name: '我的',
          route: 'Profile'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus">
  .footer
    position absolute
    bottom 0
    left 0
    width 100%
    height 50px
    display flex
  .menuItem
    flex-grow 1
    text-align center
    color #999
    div
      padding-top 5px
      font-size 18px
  .menuItem.active
      color green
</style>
