<template>
  <div class="c-search">
    <div class="c-search__box">
      <input 
        v-model="searchText"
        type="text">
      <button>
        <img 
          v-if="!searchText" 
          src="~/assets/images/header/search-menu.svg">
        <img 
          v-if="searchText" 
          style="opacity: 1" 
          src="~/assets/images/header/cross_black.svg"
          @click="searchText = ''">
      </button>
    </div>
    <div class="c-search__results">
      <span class="u-text__p--tiny">3 results</span>
      <ul>
        <li 
          v-for="(item, index) of items" 
          :key="index">
          <ListItem
            :listItem="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ListItem from '@/components/SideNav/ListItem'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      items: [
        { name: 'Bienal de Arte de Lanzarote', route: '/' },
        { name: 'Jameos Music Festival', route: '/' },
        { name: 'Lanzarote Fashion Weekend', route: '/' }
      ],
      removeText: false,
      searchText: ''
    }
  }
}
</script>
