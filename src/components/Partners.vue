<template>
  <section class="partners container p-t-50 p-b-50">
    <div class="title text-center">
      <h2 class="text-center f-s-35">Our Partners</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
      </p>
    </div>
    <div>
      <carousel v-bind="settings">
        <slide v-for="n in 8" :key="n">
          <partner-card />
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>
import PartnerCard from './PartnerCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
  components: { PartnerCard, Carousel, Slide, Pagination },
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 2,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          992: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
        },
      },
    }
  },
}
</script>

<style></style>
