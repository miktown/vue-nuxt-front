<template>
  <div class="c-langContainer">
    <div 
      class="c-langContainer__listItem" 
      @click="showSelect = true">
      <p class="u-text__p--thin">{{ lang[currentLang].text }}</p>
      <img 
        :src="getImgUrl(lang[currentLang].id)" 
        alt="">
    </div>
    <transition name="fade">
      <div 
        v-if="showSelect" 
        class="c-langContainer__flags">
        <img 
          v-for="(flag, index) in lang" 
          :key="index" 
          :src="getImgUrl(flag.id)" 
          alt=""
          @click="setLang(index)">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentLang: 0,
      showSelect: false,
      lang: this.$store.state.lang
    }
  },
  methods: {
    getImgUrl(flag) {
      return require('~/assets/images/flags/' + flag + '.svg')
    },
    setLang(index) {
      this.currentLang = index
      this.showSelect = false
    }
  }
}
</script>
