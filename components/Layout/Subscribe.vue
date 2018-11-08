<template>
  <form class="c-subscribe">
    <input
      type="email"
      class="email_input"
      placeholder="tucorreo@email.com">
    <div class="check">
      <input
        type="checkbox"
        name="lopd"
        required>
      <label for="lopd">
        He leido y acepto la <nuxt-link to="/">política de privacidad</nuxt-link>
        <span>&nbsp;</span>
      </label>
    </div>
    <button
      type="submit"
      class="c-button c-button--small c-button--blue c-button--rounded u-margin-top">
      Suscribirme
    </button>
  </form>
</template>
