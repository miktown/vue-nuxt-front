<template>
  <div class="c-agenda">
    <div class="c-agenda__date">
      <p>{{ date | DayNum }}</p>
      <span>{{ date | DayName }}</span>
    </div>
    <div class="c-agenda__content">
      <div
        v-if="img"
        class="image">
        <img
          :src="img"
          alt="">
      </div>
      <div class="text">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      date: this.content.content.date,
      img: this.content.grid.cover,
      title: this.content.grid.title,
      subtitle: this.content.content.subtitle
    }
  }
}
</script>
