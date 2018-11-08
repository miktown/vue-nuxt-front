<template>
  <main>
    <section class="c-carouselHome">
      <div class="c-carouselHome__container">
        <no-ssr>
          <carousel :perPage="1">
            <slide>
              <carousel-home-item/>
            </slide>
            <slide>
              <carousel-home-item/>
            </slide>
            <slide>
              <carousel-home-item/>
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </section>
    <section class="o-contentSection o-contentSection--dark u-padding-top-large">
      <div class="u-padding-horizontal u-padding-bottom-small">
        <h2 class="o-contentSection__title">Centros de Arte, Cultura y Turismo de Lanzarote</h2>
        <p>Visitar Lanzarote es una experiencia única que permanecerá siempre en tu memoria.</p>
        <p>La singular visión del artista César Manrique nos ofrece la posibilidad de disfrutar de estos espacios donde arte y naturaleza conviven en armonía.</p>
      </div>
      <div class="c-gridHome">
        <div class="item1">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item2">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item3">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item4">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item5">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item6">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item7">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item8">
          <p>Cueva de los verdes</p>
        </div>
        <div class="item9">
          <p>Cueva de los verdes</p>
        </div>
      </div>
    </section>
    <section class="o-contentSection o-contentSection--light-gray u-padding-top">
      <h2 class="o-contentSection__title--center u-margin-bottom">Agenda semanal</h2>
      <ul>
        <li
          v-for="(agendaItem, index) in agendaContent"
          :key="index">
          <agenda
            :content="agendaItem"/>
        </li>
      </ul>
      <nuxt-link
        to="/"
        class="o-contentSection__goToLink">
        Ver todos
      </nuxt-link>
    </section>
    <section class="o-contentSection o-contentSection--light-gray u-padding-vertical">
      <h2 class="o-contentSection__title--center u-margin-bottom">El Blog de los CACT</h2>
      <div class="c-carouselBlog">
        <div class="c-carouselBlog__container">
          <no-ssr>
            <carousel :perPage="1">
              <slide>
                <carousel-blog-item/>
              </slide>
              <slide>
                <carousel-blog-item/>
              </slide>
              <slide>
                <carousel-blog-item/>
              </slide>
            </carousel>
          </no-ssr>
        </div>
      </div>
    </section>
    <section class="o-contentSection u-padding-horizontal u-padding-vertical">
      <h2 class="o-contentSection__title">Suscríbete a la newsletter</h2>
      <p class="subtitle">Sin spam, solo información sobre exposiciones, talleres, conciertos...</p>
      <subscribe />
    </section>
  </main>
</template>

<script>
import CarouselHomeItem from '~/components/Carousel/CarouselHomeItem'
import CarouselBlogItem from '~/components/Carousel/CarouselBlogItem'
import Subscribe from '~/components/Layout/Subscribe'
import Agenda from '~/components/Agenda/Agenda'
export default {
  components: {
    CarouselHomeItem,
    CarouselBlogItem,
    Subscribe,
    Agenda
  },
  data() {
    return {
      agendaContent: this.$store.state.content
    }
  }
}
</script>
