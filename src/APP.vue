<template>
  <div>
    <router-view/>
    <FooterGuiter/>
  </div>
</template>

<script>
import FooterGuiter from './components/FooterGuider/FooterGuider'
export default {
  name: 'App',
  components: {FooterGuiter},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
  .app
    color :read
</style>
