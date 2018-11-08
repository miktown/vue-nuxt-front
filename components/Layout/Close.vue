// Click and emit an close event
<template>
  <div
    class="c-close"
    @click="$emit('close')">
    <img
      src="~/assets/images/header/cross.svg"
      alt="">
  </div>
</template>
