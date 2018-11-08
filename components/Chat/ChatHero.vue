<template>
  <div class="c-chatHero">
    <close @close="$emit('close')" />
    <img
      src="@/assets/images/header/taro.png"
      alt="">
    <p class="title">Hola, soy Taro<br>y seré tu asistente</p>
    <p>¿Hablamos?</p>
  </div>
</template>

<script>
import Close from '@/components/Layout/Close'
export default {
  components: {
    Close
  }
}
</script>
