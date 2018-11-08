<template>
  <div 
    :class="{ active: sideBarState }"
    class="o-sidenav">
    <div 
      class="c-close" 
      @click="closeMenu">
      <img 
        src="~/assets/images/header/cross.svg" 
        alt="">
    </div>
    <div 
      class="o-sidenav__top">
      <div 
        :style="{ backgroundImage: 'url(' + hero.bgi + ')' }"
        class="o-sidenav__hero">
        <div class="o-sidenav__home u-text__p--small">
          <span 
            @click="goToPage('/')">
            <img 
              src="~/assets/images/header/home.svg" 
              alt="">Inicio</span>
        </div>
        <div class="o-sidenav__weather u-text__p--small">
          <p>{{ hero.status }}</p>
          <p>{{ hero.temperature }}ºC</p>
        </div>
      </div>
      <nav>
        <ul>
          <li 
            v-for="listItem in listItemsArray" 
            :key="listItem.name" 
            @click="showSecondLevel(listItem)">
            <ListItems 
              :listItem="listItem" 
              @closeMenu="closeMenu"/>
          </li>
          <li><LangSelect/></li>
        </ul>
      </nav>
    </div>
    <div 
      class="bottom">
      <div 
        class="o-sidenav__footer">
        <p 
          class="u-text__p">Descárgate la guía más completa de Lanzarote para iOS y Android.</p>
        <div>
          <img 
            src="~/assets/images/header/logo-mobile.svg" 
            alt="">
        </div>
      </div>
      <div 
        class="o-sidenav__rrss">
        <p 
          class="u-text__p--small">Síguenos</p>
        <div>
          <img 
            src="~/assets/images/rrss/fb.png" 
            height="14" 
            alt="">
          <img 
            src="~/assets/images/rrss/tw.svg" 
            height="14" 
            alt="">
          <img 
            src="~/assets/images/rrss/yt.svg" 
            height="14" 
            alt="">
          <img 
            src="~/assets/images/rrss/ig.svg" 
            height="14" 
            alt="">
          <img 
            src="~/assets/images/rrss/pin.svg" 
            height="14" 
            alt="">
        </div>
      </div>
    </div>
    <transition name="fade">

      <div 
        v-if="showLevel && secondLevelItems.childContent"
        class="o-sidenav__secondLevel">
        <div 
          class="o-sidenav__goBack u-text__p--small"
          @click="showLevel = false">
          <img 
            src="~/assets/images/header/back.svg" 
            alt="">
          {{ secondLevelItems.name }}
        </div>
        <ul>
          <li 
            v-for="(item, index) of secondLevelItems.childContent" 
            :key="index">
            <div 
              class="o-sidenav__category">{{ item.title }}</div>
            <ul>
              <li 
                v-for="(item, index) of item.items" 
                :key="index">
                <ListItems 
                  :listItem="item" 
                  @closeMenu="closeMenu"/>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </transition>
  </div>
</template>

<script>
import backgroundImage from '~/assets/images/header/mock_heroSideNav.jpg'
import ListItems from '~/components/SideNav/ListItem'
import LangSelect from '~/components/SideNav/LangSelect'
export default {
  components: {
    ListItems,
    LangSelect
  },
  props: {
    sideBarState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.sideBarState,
      secondLevelItems: {},
      showLevel: false,
      hero: {
        bgi: backgroundImage,
        status: 'Despejado',
        temperature: '22'
      },
      listItemsArray: this.$store.state.listItems
    }
  },
  methods: {
    goToPage(link) {
      if (!link) {
        return false
      }
      this.closeMenu()
      return this.$router.push(link)
    },
    closeMenu() {
      this.$emit('closeSideNav')
    },
    showSecondLevel(content) {
      console.log(content)
      this.secondLevelItems = content
      this.showLevel = true
    }
  }
}
</script>
