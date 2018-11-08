<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Layout/Header'
export default {
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
  
.fade-enter-active, .fade-leave-active 
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0

.slide-enter-active, .slide-leave-active 
  transition: left .5s
.slide-enter, .slide-leave-to
  left: calc(100vw - 50px)
  
*
  font-family: 'Roboto', Helvetica, sans-serif !important
  box-sizing: border-box

.u-text__p--tiny
  font-size: 12px
  font-weight: 300

.u-text__title
  font-size: 30px
  font-weight: 300

.u-text__p--small
  font-size: 14px
  font-weight: 300

.u-text__title--thin
  font-size: 30px
  font-weight: 100

.u-text__p
  font-size: 16px
  font-weight: 400
.u-text__p--thin
  font-size: 16px
  font-weight: 300
a
  text-decoration: none !important

</style>
