<template>
  <div class="c-listItem">
    <p 
      v-if="!listItem.isBold && !listItem.route" 
      slot="listItem-name"
      class="u-text__p--thin">
      {{ listItem.name }}
    </p>
    <p 
      v-else 
      slot="listItem-name" 
      class="u-text__p" 
      @click="goToPage(listItem.route)">
      {{ listItem.name }}
    </p>
    <svg 
      v-if="listItem.childContent" 
      width="8px" 
      height="12px" 
      viewBox="0 0 8 12" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g 
        id="Symbols" 
        stroke="none" 
        stroke-width="1" 
        fill="none" 
        fill-rule="evenodd">
        <g 
          id="Icons/Chevron-Forward/Light" 
          transform="translate(-9.000000, -6.000000)" 
          fill="#222222">
          <polygon 
            id="Shape" 
            points="9 7.4 10.4 6 16.4 12 10.4 18 9 16.6 13.6 12" />
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    listItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      secondLevelItems: null
    }
  },
  methods: {
    goToPage(link) {
      if (!link) {
        return false
      }
      this.$emit('closeMenu')
      return this.$router.push('/pagina/' + this.listItem.name)
    }
  }
}
</script>
