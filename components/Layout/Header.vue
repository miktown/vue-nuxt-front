<template>
  <header
    :class="{chatActive: chatShitch}"
    class="o-header">
    <chat-hero @close="chatShitch = false"/>
    <div class="o-header__left">
      <div class="o-header__mobile-menu">
        <img
          src="~/assets/images/header/mobile-menu.svg"
          @click="toggleSideNav">
      </div>
      <div class="o-header__search">
        <img src="~/assets/images/header/search-menu.svg">
      </div>
    </div>
    <div class="o-header__logo">
      <img
        src="~/assets/images/header/logo-mobile.svg"
        @click="$router.push('/')">
    </div>
    <div class="o-header_right">
      <div class="o-header__chat">
        <img
          src="~/assets/images/header/chat-mobile.svg"
          @click="chatShitch = !chatShitch">
      </div>
    </div>
    <side-nav
      :sideBarState="sideBarSwitch"
      @closeSideNav="toggleSideNav"/>
      <!-- <Search /> -->
  </header>

</template>

<script>
import SideNav from '@/components/SideNav/SideNav'
import ChatHero from '@/components/Chat/ChatHero'
// import Search from '@/components/Search/Search'
export default {
  components: {
    SideNav,
    ChatHero
    // Search
  },
  data() {
    return {
      sideBarSwitch: false,
      chatShitch: false
    }
  },
  methods: {
    toggleSideNav() {
      this.sideBarSwitch = !this.sideBarSwitch
    }
  }
}
</script>
